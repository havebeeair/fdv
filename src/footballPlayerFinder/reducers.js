import { combineReducers } from "redux";

function players(state = {}, action) {
	console.log(action.type);
	switch (action.type) {
		case "RECEIVE_PLAYERS":
			return {
				...state,
				...action.players
			};
		default:
			return state;
	}
}

export default combineReducers({
	players
});
