import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate_age } from "../../../utils/age";
import { map, uniqueId, filter } from "lodash";
// import { fetchPlayers } from "../../../footballPlayerFinder/actions";

// import { positions } from "../../../utils/consts";

import "./style.css";

class PlayersTable extends Component {
	render() {
		const { players, showResults } = this.props;
		// debugger;
		return (
			<div className="filtered-player">
				<table>
					<thead>
						<tr>
							<th>Player</th>
							<th>Position</th>
							<th>Nationality</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{showResults &&
							map(players, player => (
								<tr key={uniqueId()}>
									<td>{player.name}</td>
									<td>{player.position}</td>
									<td>{player.nationality}</td>
									<td>{calculate_age(player.dateOfBirth)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default PlayersTable;
