import { getPlayers } from "../utils/api";

const receivePlayers = players => {
	return {
		type: "RECEIVE_PLAYERS",
		players
	};
};

export const fetchPlayers = () => {
	return dispatch => {
		return getPlayers().then(players => {
			dispatch(receivePlayers(players));
		});
	};
};
