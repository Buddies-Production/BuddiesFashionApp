import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const INTITIAL_STATE = {
	userID: "",
	userTransactionID: "",
	userEmail: "",
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
		setUserEmail(state, action: PayloadAction<string>) {
			state.userEmail = action.payload;
		},
	},
});

export const { setUserID, setTransactionID, setUserEmail } = user.actions;
export default user.reducer;
