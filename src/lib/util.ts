import { sha256 } from "js-sha256";
import { useEffect, useState } from "react";

import { store } from "@/store/store";

import { PAYMENT } from "./constants";

export const getRequestData = () => {
	const userTransactionID = store.getState().userReducer.userTransactionID;
	console.log("userTransactionID:", userTransactionID);
	const userID = store.getState().userReducer.userID;
	console.log("userID:", userTransactionID);

	const PAYMENT_PAYLOAD = {
		merchantId: PAYMENT.MERCHANTID,
		merchantTransactionId: userTransactionID,
		amount: PAYMENT.AMOUNT,
		merchantUserId: userID,
		redirectUrl: PAYMENT.REDIRECT_URL,
		redirectMode: PAYMENT.REDIRECT_MODE,
		callbackUrl: PAYMENT.CALL_BACK_URL,
		paymentInstrument: {
			type: PAYMENT.PAYMENT_INSTRUMENT_TYPE,
		},
	};
	const payload = JSON.stringify(PAYMENT_PAYLOAD);
	const base64EncodedPayload = btoa(payload);
	const shaEncoded = sha256(
		`${base64EncodedPayload}/pg/v1/pay${PAYMENT.SALT_KEY}`
	);
	const x_verify = `${shaEncoded}###${PAYMENT.SALT_INDEX}`;

	return {
		base64EncodedPayload,
		x_verify,
	};
};

export const useGetSize = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 1024);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return [isSmallScreen, setIsSmallScreen];
};
