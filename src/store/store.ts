import { configureStore } from "@reduxjs/toolkit";

// import modelReducer from "./features/model/model.slice";
import userReducer from "./features/user/user.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		// modelReducer,
		userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
