import configureStore from "redux-mock-store";

// Actions to be tested
import * as selectActions from "../actions";

const mockStore = configureStore();
const store = mockStore();

describe("getUsers", () => {
	test("Dispatches the correct action and payload", () => {
		// to do...
	});
});
