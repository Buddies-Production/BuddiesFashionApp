// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type ModelInitialState = {
// 	value: ModelDataType;
// };

// const MODEL_INITIAL_STATE: ModelInitialState = {
// 	value: {
// 		contactDetails: {
// 			mobileNumber: "",
// 			alternateMobileNumber: "",
// 			email: "",
// 		},
// 		dateOfBirth: {
// 			day: "",
// 			month: "",
// 			year: "",
// 			age: 0,
// 		},
// 		gender: "",
// 		userName: {
// 			firstName: "",
// 			middleName: "",
// 			lastName: "",
// 		},
// 		state: {
// 			brith: "",
// 			current: "",
// 			audition: "",
// 		},
// 		height: {
// 			feet: "",
// 			inches: "",
// 		},
// 		pictures: {
// 			closeUp: null,
// 			midLength: null,
// 			fullLength: null,
// 			naturalShot: null,
// 		},
// 		officialDetails: {
// 			pancard: {
// 				id: "",
// 				image: null,
// 			},
// 			passport: {
// 				id: "",
// 				image: null,
// 			},
// 			aadhar: {
// 				id: "",
// 				image: null,
// 			},
// 		},
// 	},
// };

// export const modelSlice = createSlice({
// 	name: "model",
// 	initialState: MODEL_INITIAL_STATE,
// 	reducers: {
// 		setContactDetails: (state, action) => {
// 			state.value.contactDetails.mobileNumber = action.payload;
// 		},
// 	},
// });

// export const { setContactDetails } = modelSlice.actions;
// export default modelSlice.reducer;
