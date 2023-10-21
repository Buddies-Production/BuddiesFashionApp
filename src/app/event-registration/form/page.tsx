"use client";

import clsx from "clsx";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReCAPTCHA from "react-google-recaptcha";

import { BackButton, CrossIcon } from "@/app/components/server";
import {
	CloseUpZoomedInPng,
	CloseUpZoomedOutPng,
	FashionEventLogo,
	FullLengthZoomedInPng,
	FullLengthZoomedOutPng,
	MidLengthZoomedInPng,
	MidLengthZoomedOutPng,
	NaturalShotZoomedInPng,
	NaturalShotZoomedOutPng,
} from "../../../../public";
import {
	DAY,
	INCHES,
	MONTH,
	PREFFERED_AUDITION_CITY,
	STATES,
	YEAR,
} from "@/lib/constants";
import { CustomInput, FileInput } from "@/app/components/client";

// import { setContactDetails } from "@/store/features/model/model.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Payment from "@/app/components/client/Payment/Payment";
import {
	setTransactionID,
	setUserEmail,
	setUserID,
} from "@/store/features/user/user.slice";
import { getRequestData } from "@/lib/util";

export interface ModelPictures {
	closeUp: File | undefined;
	// midLength: File | undefined;
	// fullLength: File | undefined;
	naturalShot: File | undefined;
	pancard: {
		id: string;
		image: File | undefined;
	};
	passport: {
		id: string;
		image: File | undefined;
	};
	aadhar: {
		id: string;
		imageFront: File | undefined;
		imageBack: File | undefined;
	};
}

const Form = () => {
	// Captcha
	const captchaReference = useRef<any>(null);
	const [captchaStatus, setCaptchaStatus] = useState(false);

	const dispatch = useDispatch<AppDispatch>();

	const [loader, setLoader] = useState(false);
	const [paymentsPageOpen, setPaymentPageOpen] = useState(false);
	const [errorPage, setErrorPage] = useState(false);
	const [contactNumberLimit, setContactNumberLimit] = useState({
		show: false,
		text: "",
	});
	// const [goToPayments, setGotoPayments] = useState(false);

	const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

	const [imageFocus, setImageFocus] = useState({
		closeup: {
			hover: false,
			fullScreen: false,
		},
		midlength: {
			hover: false,
			fullScreen: false,
		},
		fulllength: {
			hover: false,
			fullScreen: false,
		},
		natural: {
			hover: false,
			fullScreen: false,
		},
	});

	const [modelContactDetails, setModelContactDetails] = useState({
		mobileNumber: "",
		alternateMobileNumber: "",
		email: "",
		instagramHandle: "",
	});

	const [modelDateInputs, setModelDateInputs] = useState({
		day: "",
		month: "",
		year: "",
	});
	const [modelName, setModelName] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
	});
	const [modelAge, setModelAge] = useState(0);
	const [modelState, setModelState] = useState({
		birth: "",
		current: "",
		audition: "",
	});
	const [modelAuditionMode, setModelAuditionMode] = useState();
	const [modelPhysical, setModelPhysical] = useState({
		feet: "",
		inches: "",
		gender: "",
	});

	const [fileSizeError, setFileSizeError] = useState(false);

	const [modelPictures, setModelPictures] = useState<ModelPictures>({
		closeUp: undefined,
		// midLength: undefined,
		// fullLength: undefined,
		naturalShot: undefined,
		aadhar: {
			id: "",
			imageFront: undefined,
			imageBack: undefined,
		},
		pancard: {
			id: "",
			image: undefined,
		},
		passport: {
			id: "",
			image: undefined,
		},
	});

	const [modelOfficialDetails, setModelOfficialDetails] = useState<{
		pancard: {
			id: string;
			image: File | undefined;
		};
		passport: {
			id: string;
			image: File | undefined;
		};
		aadhar: {
			id: string;
			image: File | undefined;
		};
	}>({
		pancard: {
			id: "",
			image: undefined,
		},
		passport: {
			id: "",
			image: undefined,
		},
		aadhar: {
			id: "",
			image: undefined,
		},
	});

	const handleNumberInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		numberType: "mobileNumber" | "alternateMobileNumber" | "aadhar"
	) => {
		const inputValue = e.target.value;

		if (
			numberType === "mobileNumber" ||
			numberType === "alternateMobileNumber"
		) {
			if (inputValue.length > 10) {
				setModelContactDetails((prevData) => ({
					...prevData,
					[numberType]: inputValue.slice(0, 10),
				}));
			} else {
				setModelContactDetails((prevData) => ({
					...prevData,
					[numberType]: inputValue,
				}));
			}
			return;
		}

		if (numberType === "aadhar") {
			if (inputValue.length > 12) {
				setModelOfficialDetails((prevData) => ({
					...prevData,
					aadhar: {
						...prevData.aadhar,
						id: inputValue.slice(0, 12),
					},
				}));
			} else {
				setModelOfficialDetails((prevData) => ({
					...prevData,
					aadhar: {
						...prevData.aadhar,
						id: inputValue,
					},
				}));
			}
		}
	};

	const focusImage = (imageType: number) => {
		if (imageType === 1) {
			setImageFocus((prevData) => ({
				...prevData,
				closeup: {
					hover: false,
					fullScreen: true,
				},
			}));
		} else if (imageType === 2) {
			setImageFocus((prevData) => ({
				...prevData,
				midlength: {
					hover: false,
					fullScreen: true,
				},
			}));
		} else if (imageType === 3) {
			setImageFocus((prevData) => ({
				...prevData,
				fulllength: {
					hover: false,
					fullScreen: true,
				},
			}));
		} else {
			setImageFocus((prevData) => ({
				...prevData,
				natural: {
					hover: false,
					fullScreen: true,
				},
			}));
		}
	};

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (modelContactDetails.mobileNumber.length < 10) {
			setContactNumberLimit({
				show: true,
				text: "Please re-check your mobile number",
			});
			return;
		} else if (modelContactDetails.alternateMobileNumber.length < 10) {
			setContactNumberLimit({
				show: true,
				text: "Please re-check your alternate mobile number",
			});
			return;
		} else if (modelOfficialDetails.aadhar.id.length < 12) {
			setContactNumberLimit({
				show: true,
				text: "Please re-check your aadhar id",
			});
			return;
		} else {
			const emailError = modelContactDetails.email;
			let findFirst = null;
			let findSecond = null;
			for (let i = 0; i < emailError.length; ++i) {
				if (emailError[i] === "@") {
					findFirst = i;
				}
				if (emailError[i] === ".") {
					findSecond = i;
				}
			}

			if (findFirst === null || findSecond === null) {
				setContactNumberLimit({
					show: true,
					text: "Please re-check your email",
				});
				return;
			}

			if (findSecond - findFirst < 4) {
				setContactNumberLimit({
					show: true,
					text: "Please re-check your email",
				});
				return;
			}
		}

		// const captcha = captchaReference.current.getValue();
		// captchaReference.current.reset();

		setLoader(true);

		const userID = uuidv4();
		const userTransctionID = uuidv4();

		// console.log("userID:", userID);
		// console.log("userTransctionID:", userTransctionID);

		dispatch(setUserID(userID));
		dispatch(setTransactionID(userTransctionID));
		dispatch(setUserEmail(modelContactDetails.email));

		metaConversionsApi();

		try {
			const arr = [
				modelPictures.aadhar.imageFront,
				modelPictures.aadhar.imageBack,
				modelPictures.pancard.image,
				modelPictures.passport.image,
				modelPictures.closeUp,
				modelPictures.naturalShot,
			];

			const firstName = modelName.firstName;
			const lastName = modelName.lastName;

			for (let i = 0; i < 6; ++i) {
				const formData = new FormData();
				formData.set("file", arr[i] as File);

				const fileName = arr[i]?.name;

				await fetch(
					`/api/upload?firstName=${firstName}&lastName=${lastName}&fileName=${fileName}`,
					{
						method: "POST",
						body: formData,
					}
				);
			}

			const formBody = {
				uid: {
					userID: userID,
					userTransactionID: userTransctionID,
				},
				userName: {
					firstName: modelName.firstName,
					middleName: modelName.middleName,
					lastName: modelName.lastName,
				},
				contactDetails: {
					mobileNumber: parseInt(modelContactDetails.mobileNumber),
					alternateMobileNumber: parseInt(
						modelContactDetails.alternateMobileNumber
					),
					email: modelContactDetails.email,
				},
				dateOfBirth: {
					day: modelDateInputs.day,
					month: modelDateInputs.month,
					year: modelDateInputs.year,
					age: modelAge,
				},
				gender: modelPhysical.gender,
				state: {
					birth: modelState.birth,
					current: modelState.current,
					audition: modelState.audition,
				},
				mode: modelAuditionMode,
				height: {
					feet: modelPhysical.feet,
					inches: modelPhysical.inches,
				},
				pictures: {
					closeUp: `https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelPictures.closeUp?.name}`,
					naturalShot: `https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelPictures.naturalShot?.name}`,
				},
				officialDetails: {
					pancard: {
						id: modelOfficialDetails.pancard.id,
						image: `https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelOfficialDetails.pancard.image?.name}`,
					},
					passport: {
						id: modelOfficialDetails.passport.id,
						image: `https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelOfficialDetails.passport.image?.name}`,
					},
					aadhar: {
						id: modelOfficialDetails.aadhar.id,
						image: `https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelOfficialDetails.aadhar.image?.name}`,
					},
				},
			};

			const res = await fetch("/api/model-registration", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(formBody),
			});

			const formDataGoogleDocs = new FormData();
			formDataGoogleDocs.append("FirstName", modelName.firstName);
			formDataGoogleDocs.append("MiddleName", modelName.middleName ?? "");
			formDataGoogleDocs.append("LastName", modelName.lastName);

			formDataGoogleDocs.append("Age", modelAge as unknown as string);
			formDataGoogleDocs.append("Email", modelContactDetails.email);
			formDataGoogleDocs.append(
				"PhoneNumber",
				modelContactDetails.mobileNumber
			);
			formDataGoogleDocs.append(
				"AlternateNumber",
				modelContactDetails.alternateMobileNumber
			);
			formDataGoogleDocs.append("Gender", modelPhysical.gender);

			formDataGoogleDocs.append(
				"CloseUp",
				`https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelPictures.closeUp?.name}`
			);
			formDataGoogleDocs.append(
				"NaturalShot",
				`https://buddies-fashion-model-image-entry.s3.ap-south-1.amazonaws.com/${modelPictures.naturalShot?.name}`
			);

			formDataGoogleDocs.append(
				"AuditionMode",
				modelAuditionMode as unknown as string
			);
			formDataGoogleDocs.append(
				"Instagram",
				modelContactDetails.instagramHandle
			);
			formDataGoogleDocs.append("Location", modelState.audition);

			try {
				const formRes = await fetch("/api/doc-form", {
					method: "POST",
					body: formDataGoogleDocs,
				});

				await formRes.json();
			} catch (error) {
				console.log("Error in google docs submission:", error);
			}

			// const captchaValidation = await res.json();
			// console.log("captchaValidation:", captchaValidation);

			if (res.ok) {
				setLoader(false);

				// Payment section
				const handlePayments = async () => {
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
						const url =
							body.data.instrumentResponse.redirectInfo?.url;
						window.open(url, "_self");
					} catch (err) {
						console.log("error in the start:", err);
					}
				};
				handlePayments();

				// setPaymentPageOpen(true);
			} else {
				setLoader(false);
				setErrorPage(true);
			}
		} catch (error) {
			console.log("ERROR IN HANDLE SUBMIT:", error);
		}
	};

	const metaConversionsApi = async () => {
		const data = {
			data: [
				{
					event_name: "Registered",
					event_time: Date.now(),
					action_source: "website",
				},
			],
		};

		await fetch(
			`https://graph.facebook.com/v1/3241007569525483/events?access_token=EAAWn01ZCV1ZBoBO4BzycEVDRrvSeBhxLPGNaKgciKE6ZAQu6bAzzk7HavJXK7YTPZCuPUBpsz5oZBAzFyUVSk6IUrER0QfSOUUXrOYB7wBuA1JdsG5l3d8sOvcFehWY9IT1Clun6u58YMpIYx4I5ElrIPWoMP4YR0PNZCHL8p7BMIZB9ut9GzRVW4yeAdsupZAcfRgZDZD`,
			{
				method: "POST",
				body: JSON.stringify(data),
			}
		);

		// const body = await res.json();
		// console.log("body:::", body);
	};

	useEffect(() => {
		const date = new Date();

		let age = 0;
		const year = date.getFullYear();
		const inputYear = parseInt(modelDateInputs.year);
		age = year - inputYear;

		const inputMonth = parseInt(modelDateInputs.month);
		const month = date.getMonth() + 1;

		if (month > inputMonth) {
			setModelAge(age);
		} else if (inputMonth >= month) {
			const inputDay = parseInt(modelDateInputs.day);
			const day = date.getDate();
			if (inputDay >= day) {
				setModelAge(++age);
			} else {
				setModelAge(age);
			}
		}
	}, [modelDateInputs]);

	return (
		<div className={clsx("font-sans bg-black relative px-3 py-28")}>
			{contactNumberLimit.show && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div
						className={clsx(
							"border border-white tracking-wide relative h-[30%] w-[80%] bg-black rounded-md text-center flex items-center justify-center px-5",
							"sm:text-sm",
							"lg:text-2xl lg:h-[40%] lg:w-[40%]"
						)}
					>
						<CrossIcon
							onClick={() =>
								setContactNumberLimit({
									show: false,
									text: "",
								})
							}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<p>
							{contactNumberLimit.text}
							{/* Please re-check your email */}
						</p>
					</div>
				</div>
			)}
			{fileSizeError && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div
						className={clsx(
							"border border-white tracking-wide relative h-[60%] w-[60%] bg-black rounded-md text-center flex items-center justify-center px-5",
							"sm:text-sm",
							"lg:text-2xl"
						)}
					>
						<CrossIcon
							onClick={() => setFileSizeError(false)}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<p>
							File Size too large please submit an image of 5MB or
							less
						</p>
					</div>
				</div>
			)}
			{loader && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div role="status">
						<svg
							aria-hidden="true"
							className="w-[80%] h-[80%] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
			{errorPage && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div
						className={clsx(
							"border border-white tracking-wide relative h-[60%] w-[80%] bg-black rounded-md text-center flex items-center justify-center",
							"text-xs",
							"lg:text-2xl lg:w-[60%] lg:px-20"
						)}
					>
						<div className="px-5">
							An error occured with the form submission please
							reload the page and try again or contact our
							helpline number{" "}
							<span className="whitespace-nowrap font-bold">
								+91 93101-70380 or +91 78278-01756
							</span>
							<p className="text-xs mt-5 text-left">
								- You might&apos;ve missed some fields in the
								form
							</p>
							<p className="text-xs mt-3 text-left">
								- There might be some error with the form server
								please contact our helpline number{" "}
								<span className="whitespace-nowrap font-bold">
									+91 93101-70380 or +91 78278-01756
								</span>
							</p>
							<button
								className="px-5 py-3 bg-white rounded text-black font-bold mt-5"
								onClick={() => window.location.reload()}
							>
								REFRESH THE PAGE
							</button>
						</div>
					</div>
				</div>
			)}
			{paymentsPageOpen && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div
						className={clsx(
							"relative h-[60%] w-[60%] bg-black rounded-md flex items-center justify-center",
							"sm:text-sm",
							"lg:text-2xl"
						)}
					>
						<Payment />
					</div>
				</div>
			)}
			{imageFocus.closeup.fullScreen && (
				// [WIP]
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div className="relative">
						<CrossIcon
							onClick={() =>
								setImageFocus((prevData) => ({
									...prevData,
									closeup: {
										hover: false,
										fullScreen: false,
									},
								}))
							}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<Image
							src={CloseUpZoomedOutPng}
							alt="Close up reference zoomed out"
							className="rounded-md"
						/>
					</div>
				</div>
			)}
			{imageFocus.midlength.fullScreen && (
				// [WIP]
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div className="relative">
						<CrossIcon
							onClick={() =>
								setImageFocus((prevData) => ({
									...prevData,
									midlength: {
										hover: false,
										fullScreen: false,
									},
								}))
							}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<Image
							src={MidLengthZoomedOutPng}
							alt="Mid length reference zoomed out"
							className="rounded-md h-full w-full"
						/>
					</div>
				</div>
			)}
			{imageFocus.fulllength.fullScreen && (
				// [WIP]
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div className="relative">
						<CrossIcon
							onClick={() =>
								setImageFocus((prevData) => ({
									...prevData,
									fulllength: {
										hover: false,
										fullScreen: false,
									},
								}))
							}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<Image
							src={FullLengthZoomedOutPng}
							alt="Full length reference zoomed out"
							className="rounded-md h-full w-full"
						/>
					</div>
				</div>
			)}
			{imageFocus.natural.fullScreen && (
				// [WIP]
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div className="relative">
						<CrossIcon
							onClick={() =>
								setImageFocus((prevData) => ({
									...prevData,
									natural: {
										hover: false,
										fullScreen: false,
									},
								}))
							}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<Image
							src={NaturalShotZoomedOutPng}
							alt="Natural reference zoomed out"
							className="rounded-md h-full w-full"
						/>
					</div>
				</div>
			)}
			{showTermsAndConditions && (
				<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
					<div className="border border-white relative h-[80%] w-[80%] bg-black rounded flex flex-col justify-center items-center">
						<CrossIcon
							onClick={() => setShowTermsAndConditions(false)}
							className="absolute top-5 right-5 text-white cursor-pointer h-10 w-10"
						/>
						<p className="font-bold text-2xl text-white">
							Terms and Conditions
						</p>
						<p
							className={clsx(
								"overflow-scroll h-[500px] text-white px-7 py-10 text-xs",
								"lg:text-base"
							)}
						>
							<span className="font-bold">1.</span> The applicant
							must agree to abide by all rules, as amended from
							time to time by the Organizer in its sole
							discretion.
							<br />
							<br />
							<span className="font-bold">2.</span> Registration
							fees for the audition round is ₹1000
							<br />
							<br />
							<span className="font-bold">
								3. Eligibility Criteria:
							</span>{" "}
							<br />
							-For an applicant who recognises themselves as
							female, age should be between (18 – 27 years as of
							31st December 2023) & 5’3” and above in height.
							<br /> -For an applicant who recognises themselves
							as male, age should be between (18 – 27 years as of
							31st December 2023) & 5’9” and above in height.
							<br />
							<br />
							<span className="font-bold">
								4. Document Requirements:
							</span>{" "}
							<br />- Nationality Proof: Passport (preferred) or
							Aadhar Card. OCI applicants require an OCI card.{" "}
							<br />- State Eligibility Proof: Birth Certificate
							or Passport. <br />- Current State: Employment
							Certificate/Employment ID Card, House Rental
							Document, College ID, or Gas/Electricity Bill.{" "}
							<br />
							<br />
							<span className="font-bold">
								5. Marital Status and Parenthood:
							</span>{" "}
							<br />- Applicants should not have been married,
							undergone any marriage ceremony, or become parents.{" "}
							<br />- Female applicants should never have been
							pregnant.
							<br />
							<br />
							<span className="font-bold">6.</span> Applicants
							must be bona fide Indian citizens, holding valid
							Indian passports, and residing in India as per
							applicable laws.
							<br />
							<br />
							<span className="font-bold">7.</span> Applicants or
							their immediate families should not be related to
							employees of MTV, Viacom18 Media, contest sponsors,
							subcontractors, or judges. Any such relation must be
							disclosed.
							<br />
							<br />
							<span className="font-bold">8.</span> If under a
							commercial contract with a modeling agency during
							auditions, applicants must declare it via email
							before auditioning.
							<br />
							<br />
							<span className="font-bold">9.</span> Once
							shortlisted, applicants cannot enter into any other
							commercial contract or pageant without prior
							disclosure to the Organization.
							<br />
							<br />
							<span className="font-bold">10.</span> The Organizer
							is not responsible for application delays or
							non-receipt for any reason.
							<br />
							<br />
							<span className="font-bold">11.</span> Applicants
							should not have represented any country other than
							India in any contest and must disclose such
							participation.
							<br />
							<br />
							<span className="font-bold">12.</span> Applicants
							must participate in a disciplined and diligent
							manner as per the audition schedule.
							<br />
							<br />
							<span className="font-bold">13.</span> Any requested
							applicant information must be shared with the
							Organization immediately.
							<br />
							<br />
							<span className="font-bold">14.</span> The Organizer
							is not responsible for sponsors not fulfilling
							promised prizes.
							<br />
							<br />
							<span className="font-bold">15.</span> The Organizer
							is not responsible for any participant loss or
							physical injury during the event. Participants
							attend at their own risk.
							<br />
							<br />
							<span className="font-bold">16.</span> Incorrect
							information may result in disqualification, whether
							discovered before, during, or after participation.
							<br />
							<br />
							<span className="font-bold">17.</span> Judges&apos;
							decisions are final, and applicants cannot question
							them on any platform.
							<br />
							<br />
							<span className="font-bold">18.</span> Applicants
							cannot disclose screening or judging process details
							or contact judges during the process.
							<br />
							<br />
							<span className="font-bold">19.</span> Applicants
							must be in good health, have a sound mind, and
							possess good moral character to participate.
							<br />
							<br />
							<span className="font-bold">20.</span> Applicants
							should not have any criminal or civil cases
							registered against them.
							<br />
							<br />
							<span className="font-bold">21.</span> Event
							schedule and qualification rounds are subject to
							change at the Organizer&apos;s discretion.
							<br />
							<br />
							<span className="font-bold">22.</span> State winners
							must sign the legal contract with the Organization
							within 24-48 hours of receiving it.
							<br />
							<br />
							<span className="font-bold">23.</span> OCI
							cardholders are eligible for the 2nd runner-up title
							only.
							<br />
							<br />
							<span className="font-bold">24.</span> The Organizer
							is not responsible for the non-completion or
							non-occurrence of the event.
							<br />
							<br />
							<span className="font-bold">25.</span> In case of
							disputes, the Organizer’s decisions are final, and
							the courts of Uttar Pradesh have jurisdiction.
							<br />
							<br />
							<span className="font-bold">26.</span> If due to any
							circumstances after paying the ₹1000 we are not able
							to reach your city, auditions will be taken online
							<br />
							<br />
							For further information or clarifications, please
							contact through whatsapp on the helpline number
							between{" "}
							<span className="font-bold">
								11:00 AM - 8 PM
							</span>{" "}
							at
							<b>+91 93101-70380</b>
							or <b>+91 78278-01756</b>, or email us at{" "}
							<span className="font-bold">
								support@buddiesproductions.com
							</span>
							.
						</p>
					</div>
				</div>
			)}
			<BackButton
				linkTo="/event-registration"
				title="CHECK STEPS TO REGISTER"
				borderNone={true}
			/>
			{/* <input
					className="w-36 h-10 bg-white text-black px-5 py-3"
					onChange={(e) => setTestInput(e.target.value)}
				/>
				<button
					onClick={testClickHandler}
					className="p-5 bg-white text-black"
				>
					CLICK HERE
				</button> */}
			<div
				className={clsx(
					"h-[80%] w-px bg-white top-[10%] left-[40%] opacity-0 absolute",
					"lg:opacity-100"
				)}
			/>
			<div
				className={clsx(
					"h-full rounded-2xl shadow-xl shadow-white/20 bg-transparent font-normal border border-white flex"
				)}
			>
				<div className={clsx("w-2/5 pt-20 px-10 hidden", "lg:block")}>
					<div className="w-full flex justify-center">
						<Image
							className="w-1/2"
							src={FashionEventLogo}
							alt="Buddies Production logo"
						/>
					</div>
					<div className="w-full mt-5 px-10 py-5">
						<p className="text-lg font-bold text-[#FB9214]">
							Important Eligibility Criteria to keep in mind
						</p>
						<EligibilityCriteriaPoints
							className="mt-5"
							title="AGE"
							text="18 - 27 years (27 as of December 31, 2023)"
						/>
						<EligibilityCriteriaPoints
							className="mt-5"
							title="HEIGHT"
							text="5’3″ & above (without heels) for women and 5'9 & above for men"
						/>
						<EligibilityCriteriaPoints
							className="mt-5"
							title="NATIONALITY"
							text="Indian passport required"
						/>
					</div>
				</div>

				{/* Form half */}
				<div className={clsx("w-full px-3 py-10", "lg:py-20 lg:w-3/5")}>
					<div
						className={clsx(
							"w-full flex items-center justify-center",
							"lg:hidden"
						)}
					>
						<Image
							className={clsx("w-full")}
							src={FashionEventLogo}
							alt="Buddies Production logo"
						/>
					</div>
					<p
						className={clsx(
							"mt-10 text-lg tracking-wide font-bold",
							"lg:mt-0 lg:text-2xl"
						)}
					>
						Please Fill in Your Credentials
					</p>
					<form className="flex flex-col" onSubmit={handleFormSubmit}>
						<div className={clsx("flex flex-col mt-5", "lg:mt-10")}>
							<p className="font-bold">Name* </p>
							<div className="flex w-full mt-3">
								<CustomInput
									placeholder="First Name"
									className="grow"
									required
									val={modelName.firstName}
									type="text"
									name="firstName"
									onChange={(e) =>
										setModelName((prevData) => ({
											...prevData,
											firstName: e.target.value,
										}))
									}
								/>
								<CustomInput
									placeholder="Middle Name"
									className="grow mx-5"
									required={false}
									val={modelName.middleName}
									type="text"
									name="middleName"
									onChange={(e) =>
										setModelName((prevData) => ({
											...prevData,
											middleName: e.target.value,
										}))
									}
								/>
								<CustomInput
									placeholder="Last Name"
									required
									className="grow"
									val={modelName.lastName}
									type="text"
									name="lastName"
									onChange={(e) =>
										setModelName((prevData) => ({
											...prevData,
											lastName: e.target.value,
										}))
									}
								/>
							</div>
						</div>

						{/* Date of Brith */}
						<div className="flex flex-col mt-10 w-full">
							<p className="font-bold">Date of Birth* </p>
							<div
								className={clsx(
									"w-full flex items-center mt-3 flex-col",
									"lg:flex-row"
								)}
							>
								<div
									className={clsx(
										"flex w-full justify-between"
										// "lg:w-[40%]"
									)}
								>
									<DropDownList
										name="Day"
										placeholder="DD"
										option={DAY}
										requiredSection={true}
										className="w-[80px]"
										setValue={(e) => {
											setModelDateInputs((prevData) => ({
												...prevData,
												day: e,
											}));
										}}
									/>

									<DropDownList
										name="Month"
										placeholder="MM"
										option={MONTH}
										requiredSection={true}
										className="mx-5 w-[80px]"
										setValue={(e) => {
											setModelDateInputs((prevData) => ({
												...prevData,
												month: e,
											}));
										}}
									/>

									<DropDownList
										name="Year"
										placeholder="YYYY"
										option={YEAR}
										requiredSection={true}
										className="w-[450px]"
										setValue={(e) => {
											setModelDateInputs((prevData) => ({
												...prevData,
												year: e,
											}));
										}}
									/>
								</div>

								<div
									className={clsx(
										"flex items-center justify-start w-full mt-5",
										"lg:ml-10 lg:justify-center lg:mt-0"
									)}
								>
									<p>Age</p>
									<p className="bg-transparent ml-3 text-center py-2 h-10 w-10 text-white border border-gray-100 rounded-sm">
										{modelAge === 0 ||
										Number.isNaN(modelAge)
											? ""
											: modelAge}
									</p>
								</div>
							</div>
						</div>

						{/* State of origin */}
						<div className="flex justify-start w-full mt-10">
							<div className="w-32">
								<p className="mb-3 font-bold">Birth State* </p>
								<DropDownList
									name="birthState"
									placeholder="Birth State"
									setValue={(e) => {
										setModelState((prevState) => ({
											...prevState,
											birth: e,
										}));
									}}
									option={STATES}
									requiredSection={true}
								/>
							</div>

							<div className="w-36 mx-5">
								<p className="mb-3 font-bold">
									Current State*{" "}
								</p>
								<DropDownList
									name="currentState"
									placeholder="Current State"
									setValue={(e) => {
										setModelState((prevState) => ({
											...prevState,
											current: e,
										}));
									}}
									option={STATES}
									requiredSection={true}
								/>
							</div>

							<div className="w-48">
								<p className="mb-3 font-bold">
									Preferred Audition City*
								</p>
								<DropDownList
									name="auditionState"
									placeholder="Audition City"
									setValue={(e) => {
										setModelState((prevState) => ({
											...prevState,
											audition: e,
										}));
									}}
									option={PREFFERED_AUDITION_CITY}
									requiredSection={true}
								/>
							</div>
						</div>

						{/* Preferred mode of Audition */}
						<div className="w-max mt-5">
							<p className="mb-3 font-bold">
								Preferred Mode of Audition*
							</p>
							<DropDownList
								name="auditionState"
								placeholder="Audition Mode"
								setValue={(e) => {
									setModelAuditionMode(e);
								}}
								option={["Online", "Offline"]}
								requiredSection={true}
							/>
						</div>

						<p className="mt-10 font-bold">Physical Attributes</p>
						<div
							className={clsx(
								"mt-3 flex justify-start flex-col",
								"lg:flex-row"
							)}
						>
							<div>
								<p className="font-semibold">Height*</p>
								<div className="flex w-fit justify-start mt-3">
									<DropDownList
										name="Feet"
										option={["5", "6"]}
										placeholder="Feet"
										requiredSection={true}
										className="!w-[100px]"
										setValue={(e) => {
											setModelPhysical((prevState) => ({
												...prevState,
												feet: e,
											}));
										}}
									/>

									<DropDownList
										name="Inches"
										option={INCHES}
										placeholder="Inches"
										requiredSection={true}
										className="ml-5 !w-[100px]"
										setValue={(e) => {
											setModelPhysical((prevState) => ({
												...prevState,
												inches: e,
											}));
										}}
									/>
								</div>
							</div>
							<div className={clsx("mt-5", "lg:mt-0 lg:ml-10")}>
								<p className="font-semibold">Gender*</p>
								<DropDownList
									name="Gender"
									option={["Male", "Female"]}
									placeholder="Gender"
									requiredSection={true}
									className="w-[200px] mt-3"
									setValue={(e) => {
										setModelPhysical((prevState) => ({
											...prevState,
											gender: e,
										}));
									}}
								/>
							</div>
						</div>

						{/* Contact Details */}
						<div className="mt-10">
							<p className="font-bold">Contact Details</p>
							<div className="text-black w-full flex flex-wrap justify-start mt-3">
								<CustomInput
									val={modelContactDetails.mobileNumber}
									required
									placeholder="Mobile no."
									type="tel"
									name="mobileNumber"
									className={clsx("my-5", "lg:my-0 lg:mr-5")}
									onChange={(e) =>
										handleNumberInput(e, "mobileNumber")
									}
								/>
								<CustomInput
									val={
										modelContactDetails.alternateMobileNumber
									}
									required
									placeholder="Alternate Mobile no."
									type="tel"
									name="alternateNumber"
									className={clsx("my-5", "lg:my-0 lg:mx-5")}
									onChange={(e) =>
										handleNumberInput(
											e,
											"alternateMobileNumber"
										)
									}
								/>
								<CustomInput
									val={modelContactDetails.email}
									required
									placeholder="Email"
									type="email"
									name="email"
									className={clsx("my-5", "lg:my-0 lg:mx-5")}
									onChange={(e) =>
										setModelContactDetails((prevData) => ({
											...prevData,
											email: e.target.value,
										}))
									}
								/>
							</div>
						</div>

						<div className="mt-10">
							<p className="font-bold">Instagram Profile</p>
							<div className="text-black w-full flex justify-start mt-3">
								<CustomInput
									val={modelContactDetails.instagramHandle}
									required={false}
									placeholder="Instagram Profile"
									type="text"
									name="instagramProfile"
									onChange={(e) =>
										setModelContactDetails((prevData) => ({
											...prevData,
											instagramHandle: e.target.value,
										}))
									}
								/>
							</div>
						</div>

						{/* Official Details */}
						<div className="mt-10">
							<p className="font-bold">Official Details</p>
							<p className="font-extralight mt-1">
								Format: png, jpg and jpeg | Max Size: 5 mb
							</p>
							<div className="text-white w-full flex flex-wrap items-center justify-start mt-5">
								<p className="whitespace-nowrap font-bold">
									Passport :
								</p>
								<div className="ml-5">
									<CustomInput
										val={modelOfficialDetails.passport.id}
										required={false}
										placeholder="Passport ID"
										type="text"
										name="passportID"
										onChange={(e) =>
											setModelOfficialDetails(
												(prevData) => ({
													...prevData,
													passport: {
														...prevData.passport,
														id: e.target.value,
													},
												})
											)
										}
									/>
								</div>
								<div
									className={clsx(
										"mt-3 w-full flex justify-center",
										"lg:ml-10 lg:w-1/3 lg:mt-0"
									)}
								>
									<FileInput
										setModelPictures={setModelPictures}
										pictureShot="passport"
										setFileSizeError={setFileSizeError}
										required={false}
									/>
								</div>
							</div>

							<div className="text-white w-full flex flex-wrap items-center justify-start mt-7">
								<p className="font-bold">Aadhar* :</p>
								<div className="ml-5">
									<CustomInput
										val={modelOfficialDetails.aadhar.id}
										required={true}
										placeholder="Aadhar"
										type="tel"
										name="aadharID"
										onChange={(e) =>
											handleNumberInput(e, "aadhar")
										}
									/>
								</div>
							</div>
							<div className="flex flex-wrap items-center justify-start mt-5">
								<div
									className={clsx(
										"w-full flex justify-center",
										"lg:w-1/3"
									)}
								>
									<p className="mr-3 font-extralight">
										Front:
									</p>
									<FileInput
										setModelPictures={setModelPictures}
										pictureShot="aadharFront"
										setFileSizeError={setFileSizeError}
										required={false}
									/>
								</div>
								<div
									className={clsx(
										"w-full flex justify-center",
										"lg:ml-10 lg:w-1/3"
									)}
								>
									<p className="mr-3 font-extralight">
										Back:
									</p>
									<FileInput
										setModelPictures={setModelPictures}
										pictureShot="aadharBack"
										setFileSizeError={setFileSizeError}
										required={false}
									/>
								</div>
							</div>

							<div className="text-white w-full flex flex-wrap items-center justify-start mt-7">
								<p className="font-bold">Pancard :</p>
								<div className="ml-5">
									<CustomInput
										val={modelOfficialDetails.pancard.id}
										required={false}
										placeholder="Pancard"
										type="text"
										name="pancardID"
										onChange={(e) =>
											setModelOfficialDetails(
												(prevData) => ({
													...prevData,
													pancard: {
														...prevData.pancard,
														id: e.target.value,
													},
												})
											)
										}
									/>
								</div>
								<div
									className={clsx(
										"w-full flex justify-center mt-5",
										"lg:w-1/3 lg:ml-10 lg:mt-0"
									)}
								>
									<FileInput
										setModelPictures={setModelPictures}
										pictureShot="pancard"
										setFileSizeError={setFileSizeError}
										required={false}
									/>
								</div>
							</div>
						</div>

						{/* Uncomment This */}
						<p className="font-bold mt-10">Upload Your Photos</p>
						<p className="font-extralight mt-1">
							Format: png, jpg and jpeg | Dimension: 450px*600px |
							Max Size: 5 mb
						</p>

						<div className="flex w-full items-center justify-between mt-5">
							<p className="whitespace-nowrap font-bold">
								Close up* :
							</p>
							<div
								className={clsx(
									"ml-5 w-full flex justify-center",
									"lg:w-1/3 lg:ml-0"
								)}
							>
								<FileInput
									setModelPictures={setModelPictures}
									pictureShot="closeUp"
									setFileSizeError={setFileSizeError}
									required={true}
								/>
							</div>
							<div
								className={clsx(
									"items-center hidden",
									"lg:flex "
								)}
							>
								<p className="mr-2 text-sm">Reference: </p>
								<div
									onMouseLeave={() =>
										setImageFocus((prevData) => ({
											...prevData,
											closeup: {
												hover: false,
												fullScreen: false,
											},
										}))
									}
									onMouseEnter={() =>
										setImageFocus((prevData) => ({
											...prevData,
											closeup: {
												hover: true,
												fullScreen: false,
											},
										}))
									}
									onClick={() => focusImage(1)}
									className="relative cursor-pointer"
								>
									{imageFocus.closeup.hover && (
										<div className="absolute h-full w-full top-0 left-0 bg-black/30 text-xs flex justify-center items-center">
											Click to <br />
											expand
										</div>
									)}
									<Image
										src={CloseUpZoomedInPng}
										alt="Close up reference"
										className={clsx(
											"h-20 w-20 rounded",
											"lg:block"
										)}
									/>
								</div>
							</div>
						</div>

						{/* <div className="flex w-full items-center justify-between mt-5">
							<p className="whitespace-nowrap font-bold">
								Mid Length* :
							</p>
							<div className="w-1/3 flex justify-center">
								<FileInput
									setModelPictures={setModelPictures}
									pictureShot="midLength"
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-2 text-sm">Reference: </p>
								<div
									onMouseLeave={() =>
										setImageFocus((prevData) => ({
											...prevData,
											midlength: {
												hover: false,
												fullScreen: false,
											},
										}))
									}
									onMouseEnter={() =>
										setImageFocus((prevData) => ({
											...prevData,
											midlength: {
												hover: true,
												fullScreen: false,
											},
										}))
									}
									onClick={() => focusImage(2)}
									className="relative cursor-pointer"
								>
									{imageFocus.midlength.hover && (
										<div className="absolute h-full w-full top-0 left-0 bg-black/30 text-xs flex justify-center items-center">
											Click to <br />
											expand
										</div>
									)}
									<Image
										src={MidLengthZoomedInPng}
										alt="Mid length reference"
										className="h-20 w-20 rounded"
									/>
								</div>
							</div>
						</div>

						<div className="flex w-full items-center justify-between mt-5">
							<p className="whitespace-nowrap font-bold">
								Full Length* :
							</p>
							<div className="w-1/3 flex justify-center">
								<FileInput
									setModelPictures={setModelPictures}
									pictureShot="fullLength"
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-2 text-sm">Reference: </p>
								<div
									onMouseLeave={() =>
										setImageFocus((prevData) => ({
											...prevData,
											fulllength: {
												hover: false,
												fullScreen: false,
											},
										}))
									}
									onMouseEnter={() =>
										setImageFocus((prevData) => ({
											...prevData,
											fulllength: {
												hover: true,
												fullScreen: false,
											},
										}))
									}
									onClick={() => focusImage(3)}
									className="relative cursor-pointer"
								>
									{imageFocus.fulllength.hover && (
										<div className="absolute h-full w-full top-0 left-0 bg-black/30 text-xs flex justify-center items-center">
											Click to <br />
											expand
										</div>
									)}
									<div className="h-20 w-20 flex justify-center items-center">
										<Image
											src={FullLengthZoomedInPng}
											alt="Full length reference"
											className="h-20 w-14 rounded"
										/>
									</div>
								</div>
							</div>
						</div> */}

						<div className="flex w-full items-center justify-between mt-5">
							<p className="whitespace-nowrap font-bold">
								Natural Beauty shot <br />
								(no make-up)* :
							</p>
							<div
								className={clsx(
									"ml-5 w-full flex justify-center",
									"lg:w-1/3 lg:ml-0"
								)}
							>
								<FileInput
									setModelPictures={setModelPictures}
									pictureShot="natural"
									setFileSizeError={setFileSizeError}
									required={true}
								/>
							</div>
							<div
								className={clsx(
									"items-center hidden",
									"lg:flex"
								)}
							>
								<p className="mr-2 text-sm">Reference: </p>
								<div
									onMouseLeave={() =>
										setImageFocus((prevData) => ({
											...prevData,
											natural: {
												hover: false,
												fullScreen: false,
											},
										}))
									}
									onMouseEnter={() =>
										setImageFocus((prevData) => ({
											...prevData,
											natural: {
												hover: true,
												fullScreen: false,
											},
										}))
									}
									onClick={() => focusImage(4)}
									className="relative cursor-pointer"
								>
									{imageFocus.natural.hover && (
										<div className="absolute h-full w-full top-0 left-0 bg-black/30 text-xs flex justify-center items-center">
											Click to <br />
											expand
										</div>
									)}
									<Image
										src={NaturalShotZoomedInPng}
										alt="Natural shot reference"
										className="h-20 w-20 rounded"
									/>
								</div>
							</div>
						</div>

						{/* <div className="mt-10">
							<Payment />
						</div> */}

						<div className="flex items-start mt-10">
							<input
								type="checkbox"
								className="outline-none cursor-pointer"
								// onChange={(e) => setGotoPayments(true)}
								required
							/>
							<label
								className={clsx(
									"pl-3 font-bold text-sm -mt-2",
									"lg:text-base"
								)}
							>
								I agree to all the rules and regulations stated
								on the application: These Rules and Regulations
								are subject to modification, as needed, without
								prior notice. MTV D2R Mr & Miss India Runway
								Model reserves the right to make said
								modifications at its sole discretion.{" "}
								<span
									className="font-normal cursor-pointer text-red-500 hover:text-red-600"
									onClick={() => {
										setShowTermsAndConditions(true);
									}}
								>
									(Read all Terms & Conditions){" "}
								</span>
							</label>
						</div>

						<div className="mt-5">
							<ReCAPTCHA
								sitekey="6LfVZK4oAAAAAFpGJJBQvO9dduEdP6qfDSXJy8BU"
								ref={captchaReference}
								onChange={() => setCaptchaStatus(true)}
							/>
							{/* <p>{captchaStatus.message}</p> */}
						</div>

						{/* <button
							className="bg-white text-black p-5"
							onClick={metaConversionsApi}
							type="button"
						>
							META CLICK
						</button> */}

						<button
							className={clsx(
								"bg-white text-black mt-5 px-2 border-2 border-white py-2 w-full font-bold",
								"transition-colors duration-500",
								"lg:w-[200px]",
								captchaStatus &&
									"hover:border-blue-950 hover:bg-white/70"
							)}
							type="submit"
							disabled={!captchaStatus}
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

const EligibilityCriteriaPoints = (props: {
	title: string;
	text?: string;
	className?: string;
}) => {
	return (
		<div className={clsx("flex", props.className)}>
			&#8226;{" "}
			<p className="ml-3 tracking-wide">
				<span className="font-bold">{props.title}: </span>
				{props.text}
			</p>
		</div>
	);
};

const DropDownList = (props: {
	name: string;
	placeholder: string;
	option: string[];
	className?: string;
	setValue: React.Dispatch<React.SetStateAction<any>>;
	requiredSection: boolean;
}) => {
	return (
		<div
			className={clsx(
				"px-3 py-2 w-full border border-gray-100 rounded-sm",
				props.className
			)}
		>
			<select
				name={props.name}
				className={"text-white w-full bg-transparent outline-none"}
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
				required={props.requiredSection}
			>
				<option
					className="bg-black text-white"
					defaultValue={props.placeholder}
				>
					{props.placeholder}
				</option>
				{props.option.map((val, idx) => {
					return (
						<option
							value={val}
							key={idx}
							className="bg-black text-white"
						>
							{val}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Form;
