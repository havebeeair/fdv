import { createSelector } from "reselect";

export const playerSelector = createSelector(
	state => state.players,
	players => players
);
