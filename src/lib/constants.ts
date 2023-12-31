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

export enum PAYMENT_PAY {
	MERCHANTID = "BUDDIESONLINE",
	AMOUNT = "100000",
	// AMOUNT = "100",
	REDIRECT_URL = "https://buddiesfashion.in/event-registration/form/registration-successful",
	REDIRECT_MODE = "REDIRECT",
	CALL_BACK_URL = "https://test-callback-phonepe.vercel.app/",
	PAYMENT_INSTRUMENT_TYPE = "PAY_PAGE",
	SALT_KEY = "31a69617-dd30-4f5e-902c-0b663c2a06dc",
	SALT_INDEX = "1",
}

export enum PAYMENT_QRCODE {
	PAYMENT_INSTRUMENT_TYPE = "UPI_QR",
}

export const LOCATION_VENUE_DATE = [
	{
		location: "Shrinagar",
		venue: "Hotel Heritage Luxury",
		date: "15th October",
		time: "10am to 4pm",
	},
	{
		location: "Jammu",
		venue: "Hotel Lords Inn",
		date: "16th October",
		time: "10am to 4pm",
	},
	{
		location: "Delhi NCR",
		venue: "Holdiay Inn",
		date: "28th October",
		time: "10am to 4pm",
	},
	{
		location: "Dehradun",
		venue: "Centrio Mall",
		date: "18th November",
		time: "10am to 4pm",
	},
	{
		location: "Pune",
		venue: "TBA",
		date: "24th November",
		time: "10am to 4pm",
	},
];

export const STATES = [
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttar Pradesh",
	"Uttarakhand",
	"West Bengal",
	"Jammu And Kashmir (UT)",
	"Andaman And Nicobar Islands (UT)",
	"Chandigarh (UT)",
	"Dadra Nagar And Haveli &amp; Daman &amp; Diu(UT)",
	"Ladakh (UT)",
	"Lakshwadeep (UT)",
	"Puducherry (UT)",
];

export const PREFFERED_AUDITION_CITY = ["Online"];

export const YEAR = [
	"1996",
	"1997",
	"1998",
	"1999",
	"2000",
	"2001",
	"2002",
	"2003",
	"2004",
	"2005",
];

export const MONTH = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
];

export const DAY = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"30",
	"31",
];

export const INCHES = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
];
