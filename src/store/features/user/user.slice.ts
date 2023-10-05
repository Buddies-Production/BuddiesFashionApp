import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const INTITIAL_STATE = {
	userID: "",
	userTransactionID: "",
};

export const user = createSlice({
	name: "user",
	initialState: INTITIAL_STATE,
	reducers: {
		setUserID(state, action: PayloadAction<string>) {
			state.userID = action.payload;
		},
		setTransactionID(state, action: PayloadAction<string>) {
			state.userTransactionID = action.payload;
		},
	},
});

export const { setUserID, setTransactionID } = user.actions;
export default user.reducer;
