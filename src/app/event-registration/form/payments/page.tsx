"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sha256 } from "js-sha256";
import { getRequestData } from "@/lib/util";

// OLD

/*
ewogICJtZXJjaGFudElkIjogIkJVRERJRVNPTkxJTkUiLAogICJtZXJjaGFudFRyYW5zYWN0aW9uSWQiOiAiTVQ3ODUwNTkwMDY4MTg4MTA0IiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL2J1ZGRpZXNmYXNoaW9uLmluL2V2ZW50LXJlZ2lzdHJhdGlvbi9mb3JtL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly90ZXN0LWNhbGxiYWNrLXBob25lcGUudmVyY2VsLmFwcC8iLAogICJwYXltZW50SW5zdHJ1bWVudCI6IHsKICAgICJ0eXBlIjogIlBBWV9QQUdFIgogIH0KfQ==
ef192105318c81807306d8593788bb631889b89cb9fcae36c51b5018aa5ce333###1

PAYMENT TEST DETAILS WORKING testing 
{
  "merchantId": "MERCHANTUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 10000,
  "redirectUrl": "http://localhost:3000/event-registration/form",
  "redirectMode": "REDIRECT",
  "callbackUrl": "http://localhost:3001/callback-url",
  "mobileNumber": "9999999999",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
BASE64_ENCODED: ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cDovL2xvY2FsaG9zdDozMDAwL2V2ZW50LXJlZ2lzdHJhdGlvbi9mb3JtIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0=
SHA256: 05c90b232c5f4effa95909e6a25180edbdfcca68c1934b01dcbd0cb5bdb324e0
X-VERIFY: 05c90b232c5f4effa95909e6a25180edbdfcca68c1934b01dcbd0cb5bdb324e0###1



PAYMENT TEST DETAILS WORKING localhost 
{
  "merchantId": "MERCHANTUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 10000,
  "redirectUrl": "http://localhost:3000/event-registration/form",
  "redirectMode": "REDIRECT",
  "callbackUrl": "http://localhost:3000/api/url",
  "mobileNumber": "9999999999",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
BASE64_ENCODED: ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cDovL2xvY2FsaG9zdDozMDAwL2V2ZW50LXJlZ2lzdHJhdGlvbi9mb3JtIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91cmwiLAogICJtb2JpbGVOdW1iZXIiOiAiOTk5OTk5OTk5OSIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9
SHA256: e4ca04255403f5ad2cf6308d5d81003bdb797e6fe86e0c3c98ceacb29f8282f8
X-VERIFY: e4ca04255403f5ad2cf6308d5d81003bdb797e6fe86e0c3c98ceacb29f8282f8###1


PAYMENT TEST DETAILS WORKING webhook
{
  "merchantId": "MERCHANTUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 10000,
  "redirectUrl": "https://webhook.site/9a13653a-a261-4ca6-9fbf-309f84199969/redirect-url",
  "redirectMode": "REDIRECT",
  "callbackUrl": "https://webhook.site/9a13653a-a261-4ca6-9fbf-309f84199969/callback-url",
  "mobileNumber": "9999999999",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
BASE64_ENCODED: ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvOWExMzY1M2EtYTI2MS00Y2E2LTlmYmYtMzA5Zjg0MTk5OTY5L3JlZGlyZWN0LXVybCIsCiAgInJlZGlyZWN0TW9kZSI6ICJSRURJUkVDVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlLzlhMTM2NTNhLWEyNjEtNGNhNi05ZmJmLTMwOWY4NDE5OTk2OS9jYWxsYmFjay11cmwiLAogICJtb2JpbGVOdW1iZXIiOiAiOTk5OTk5OTk5OSIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9
SHA256: aee192faf3f6a6c01fc129731e0436439f137731ca4f4eaaabe790cd844bab9f
X-VERIFY: aee192faf3f6a6c01fc129731e0436439f137731ca4f4eaaabe790cd844bab9f###1


PAYMENT TEST DETAILS with localhost
{
  "merchantId": "PGTESTPAYUAT139",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 100,
  "redirectUrl": "http://localhost:3000/event-registration/form",
  "redirectMode": "REDIRECT",
  "callbackUrl": "http://localhost:3000/api/callback-url",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
BASE64_ENCODED: ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVDEzOSIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwOi8vbG9jYWxob3N0OjMwMDAvZXZlbnQtcmVnaXN0cmF0aW9uL2Zvcm0iLAogICJyZWRpcmVjdE1vZGUiOiAiUkVESVJFQ1QiLAogICJjYWxsYmFja1VybCI6ICJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhbGxiYWNrLXVybCIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9
SHA256: aee192faf3f6a6c01fc129731e0436439f137731ca4f4eaaabe790cd844bab9f
X-VERIFY: aee192faf3f6a6c01fc129731e0436439f137731ca4f4eaaabe790cd844bab9f###1


PAYMENT TEST DETAILS with webhook
{
  "merchantId": "PGTESTPAYUAT139",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 100,
  "redirectUrl": "https://webhook.site/9a13653a-a261-4ca6-9fbf-309f84199969/redirect-url",
  "redirectMode": "REDIRECT",
  "callbackUrl": "https://webhook.site/9a13653a-a261-4ca6-9fbf-309f84199969/callback-url",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
BASE64_ENCODED: ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVDEzOSIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS85YTEzNjUzYS1hMjYxLTRjYTYtOWZiZi0zMDlmODQxOTk5NjkvcmVkaXJlY3QtdXJsIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvOWExMzY1M2EtYTI2MS00Y2E2LTlmYmYtMzA5Zjg0MTk5OTY5L2NhbGxiYWNrLXVybCIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9
SHA256: 5961312421a0e8a7237895131c07849a979564944335d1dffafd5d1a08086ca6
X-VERIFY: 5961312421a0e8a7237895131c07849a979564944335d1dffafd5d1a08086ca6###1
*/

export default function Payments() {
	const [loader, setLoader] = useState<boolean>(false);
	const router = useRouter();

	const handlePayments = async () => {
		setLoader(true);

		const { base64EncodedPayload, x_verify } = getRequestData();

		try {
			const res = await fetch("/api/payment-gateway", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY": x_verify,
				},
				body: JSON.stringify({
					request: base64EncodedPayload,
				}),
			});

			const body = await res.json();
			// console.log("body:::", body);
			const url = body.data.instrumentResponse.redirectInfo?.url;
			window.open(url, "_self");
		} catch (err) {
			console.log("error in the start:", err);
		}
	};

	return (
		<div>
			<p
				onClick={handlePayments}
				className="cursor-pointer hover:font-bold text-4xl border-2 border-white rounded bg-white text-black"
			>
				Click to pay
			</p>
			{loader && <p className="text-black">LOADING...</p>}
		</div>
	);
}
