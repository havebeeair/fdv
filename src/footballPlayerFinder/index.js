import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "./actions";
import { playerSelector } from "./selectors";

import { calculate_age } from "../utils/age";
import { map, uniqueId, filter } from "lodash";

// import "./style.css";

import PlayersTable from "./components/PlayersTable";
import SearchBar from "./components/SearchBar";

class FootballPlayerFinder extends Component {
	state = {
		name: "",
		age: 18,
		position: "",
		showResults: false
	};

	handleNameChange = name => this.setState({ name, showResults: false });
	handleAgeChange = age => this.setState({ age, showResults: false });
	handlePositionChange = position =>
		this.setState({ position, showResults: false });
	handleSearchClick = () => {
		this.props.fetchPlayers();
		this.setState({ showResults: true });
	};

	searchFilter = (list, age, name, position) => {
		return filter(list, player => {
			if (
				calculate_age(player.dateOfBirth) === age &&
				player.position === position &&
				player.name.includes(name)
			) {
				return player;
			}
		});
	};

	filteredPlayers = playerList => {
		return this.searchFilter(
			playerList,
			parseInt(this.state.age),
			this.state.name,
			this.state.position
		);
	};

	render() {
		const { name, age, position, showResults } = this.state;
		const { fetchedPlayers } = this.props;
		const isEnabled = name.length > 0 && age >= 18 && age <= 45;
		return (
			<div className="FootballPlayerFinder">
				<h3>Football Player Finder</h3>
				<SearchBar
					name={name}
					age={age}
					position={position}
					onNameChange={this.handleNameChange}
					onAgeChange={this.handleAgeChange}
					onPositionChange={this.handlePositionChange}
					onSearchClick={this.handleSearchClick}
					isButtonEnabled={isEnabled}
				/>
				<PlayersTable
					players={this.filteredPlayers(fetchedPlayers)}
					showResults={showResults}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		fetchedPlayers: playerSelector(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPlayers: () => {
			dispatch(fetchPlayers());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FootballPlayerFinder);
// export default FootballPlayerFinder;
