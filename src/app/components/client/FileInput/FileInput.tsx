"use client";

import { ModelPictures } from "@/app/event-registration/form/page";
import { useRef } from "react";

import "./FileInput.css";

const FileInput = (props: {
	setModelPictures: React.Dispatch<React.SetStateAction<ModelPictures>>;
	setFileSizeError: React.Dispatch<React.SetStateAction<any>>;
	pictureShot: string;
	required: boolean;
}) => {
	const inputRef = useRef<any>(null);

	const closeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		let file = e.target.files?.[0];
		let fileType;
		let fileSize;

		if (file !== undefined) {
			fileType = file.type;
			fileSize = file.size;

			if (
				fileType !== "image/jpeg" &&
				fileType !== "image/jpg" &&
				fileType !== "image/png"
			) {
				inputRef.current.value = null;
				return;
			}

			if (fileSize > 5 * 1000000) {
				props.setFileSizeError(true);
				inputRef.current.value = null;
				return;
			} else {
				switch (props.pictureShot) {
					case "closeUp":
						props.setModelPictures((prevState) => ({
							...prevState,
							closeUp: file,
						}));
						break;
					case "midLength":
						props.setModelPictures((prevState) => ({
							...prevState,
							midLength: file,
						}));
						break;
					case "fullLength":
						props.setModelPictures((prevState) => ({
							...prevState,
							fullLength: file,
						}));
						break;
					case "passport":
						props.setModelPictures((prevState) => ({
							...prevState,
							passport: {
								...prevState.passport,
								image: file,
							},
						}));
						break;
					case "aadharFront":
						props.setModelPictures((prevState) => ({
							...prevState,
							aadhar: {
								...prevState.aadhar,
								imageFront: file,
							},
						}));
						break;
					case "aadharBack":
						props.setModelPictures((prevState) => ({
							...prevState,
							aadhar: {
								...prevState.aadhar,
								imageBack: file,
							},
						}));
						break;
					case "pancard":
						props.setModelPictures((prevState) => ({
							...prevState,
							pancard: {
								...prevState.pancard,
								image: file,
							},
						}));
						break;
					default:
						props.setModelPictures((prevState) => ({
							...prevState,
							naturalShot: file,
						}));
				}
			}
		} else {
			return;
		}
	};

	return (
		<input
			ref={inputRef}
			type="file"
			accept="image/*"
			onChange={closeImageHandler}
			className="custom-file-input w-full text-xs"
			required={props.required}
		/>
	);
};

export default FileInput;
