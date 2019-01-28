import React, { Component } from "react";
import { positions } from "../../../utils/consts";
import { uniqueId } from "lodash";

import "./style.css";

class SearchParams extends Component {
	state = {
		positions
	};
	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	handleClick = () => {
		this.props.onSearchClick();
	};

	handleChangeName = event => {
		this.props.onNameChange(event.target.value);
	};

	handlePositionChange = event => {
		this.props.onPositionChange(event.target.value);
	};

	handleAgeChange = event => {
		this.props.onAgeChange(event.target.value);
	};

	render() {
		const { positions } = this.state;
		return (
			<div className="search-params">
				<input
					className="name"
					type="text"
					placeholder="Player Name"
					value={this.props.name}
					onChange={this.handleChangeName}
				/>
				<select
					className="position"
					name=""
					id=""
					onChange={this.handlePositionChange}
					value={this.props.position}
				>
					{positions.map(position => {
						return (
							<option value={position} key={uniqueId()}>
								{position}
							</option>
						);
					})}
				</select>
				<input
					value={this.props.age}
					onChange={this.handleAgeChange}
					className="age"
					type="number"
					name="quantity"
					min="18"
					max="40"
					placeholder="Age"
				/>

				<button
					disabled={!this.props.isButtonEnabled}
					className="search"
					onClick={this.handleClick}
				>
					Search
				</button>
			</div>
		);
	}
}

export default SearchParams;
