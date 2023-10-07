// export const PAYMENT_PAYLOAD = {
// 	merchantId: "BUDDIESONLINE",
// 	merchantTransactionId: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
// 	amount: 100,
// 	merchantUserId: "1239019qw123",
// 	redirectUrl:
// 		"https://buddiesfashion.in/event-registration/form/registration-successful",
// 	redirectMode: "REDIRECT",
// 	callbackUrl: "https://test-callback-phonepe.vercel.app/",
// 	paymentInstrument: {
// 		type: "PAY_PAGE",
// 	},
// };

// export const PAYMENT_SALT_KEY = "31a69617-dd30-4f5e-902c-0b663c2a06dc";

// export const PAYMENT_SALT_INDEX = "1";

export enum PAYMENT {
	MERCHANTID = "BUDDIESONLINE",
	AMOUNT = "100000",
	REDIRECT_URL = "https://buddiesfashion.in/event-registration/form/registration-successful",
	REDIRECT_MODE = "REDIRECT",
	CALL_BACK_URL = "https://test-callback-phonepe.vercel.app/",
	PAYMENT_INSTRUMENT_TYPE = "PAY_PAGE",
	SALT_KEY = "31a69617-dd30-4f5e-902c-0b663c2a06dc",
	SALT_INDEX = "1",
}

export const LOCATION_VENUE_DATE = [
	{
		location: "Shrinagar",
		venue: "TBA",
		date: "15th October",
		time: "10am to 4pm",
	},
	{
		location: "Jammu",
		venue: "TBA",
		date: "16th October",
		time: "10am to 4pm",
	},
	{
		location: "Delhi NCR",
		venue: "TBA",
		date: "20th October",
		time: "10am to 4pm",
	},
	{
		location: "Jaipur",
		venue: "TBA",
		date: "TBA",
		time: "10am to 4pm",
	},
	{
		location: "Indore",
		venue: "TBA",
		date: "TBA",
		time: "10am to 4pm",
	},
	{
		location: "Hyderabad",
		venue: "TBA",
		date: "TBA",
		time: "10am to 4pm",
	},
];
