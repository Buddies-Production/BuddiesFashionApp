import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import modelReducer from "./features/model/model.slice";
import userReducer from "./features/user/user.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const persistConfig = {
	key: "root",
	storage,
};
const rootReducer = combineReducers({
	userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
