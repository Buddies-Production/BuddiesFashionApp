import { sha256 } from "js-sha256";
import { useEffect, useState } from "react";

import { store } from "@/store/store";

import { PAYMENT_PAY, PAYMENT_QRCODE } from "./constants";

export const getRequestData = () => {
	const userTransactionID = store.getState().userReducer.userTransactionID;
	const userID = store.getState().userReducer.userID;

	const PAYMENT_PAYLOAD = {
		merchantId: PAYMENT_PAY.MERCHANTID,
		merchantTransactionId: userTransactionID,
		amount: PAYMENT_PAY.AMOUNT,
		merchantUserId: userID,
		redirectUrl: PAYMENT_PAY.REDIRECT_URL,
		redirectMode: PAYMENT_PAY.REDIRECT_MODE,
		callbackUrl: PAYMENT_PAY.CALL_BACK_URL,
		paymentInstrument: {
			type: PAYMENT_PAY.PAYMENT_INSTRUMENT_TYPE,
		},
	};
	const payload = JSON.stringify(PAYMENT_PAYLOAD);
	const base64EncodedPayload = btoa(payload);
	const shaEncoded = sha256(
		`${base64EncodedPayload}/pg/v1/pay${PAYMENT_PAY.SALT_KEY}`
	);
	const x_verify = `${shaEncoded}###${PAYMENT_PAY.SALT_INDEX}`;

	return {
		base64EncodedPayload,
		x_verify,
	};
};

export const getQrCode = () => {
	const userTransactionID = store.getState().userReducer.userTransactionID;
	const userID = store.getState().userReducer.userID;

	const PAYMENT_PAYLOAD = {
		merchantId: PAYMENT_PAY.MERCHANTID,
		merchantTransactionId: userTransactionID,
		merchantUserId: userID,
		amount: PAYMENT_PAY.AMOUNT,
		callbackUrl: PAYMENT_PAY.CALL_BACK_URL,
		mobileNumber: "7086352900",
		// redirectUrl: PAYMENT_PAY.REDIRECT_URL,
		// redirectMode: PAYMENT_PAY.REDIRECT_MODE,
		paymentInstrument: {
			type: PAYMENT_QRCODE.PAYMENT_INSTRUMENT_TYPE,
		},
	};
	const payload = JSON.stringify(PAYMENT_PAYLOAD);
	const base64EncodedPayload = btoa(payload);
	const shaEncoded = sha256(
		`${base64EncodedPayload}/pg/v1/pay${PAYMENT_PAY.SALT_KEY}`
	);
	const x_verify = `${shaEncoded}###${PAYMENT_PAY.SALT_INDEX}`;

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
