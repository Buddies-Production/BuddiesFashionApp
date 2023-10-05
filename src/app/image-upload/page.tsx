"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageUploadChecker() {
	const [uploadedImageUrl, setUploadedImageUrl] = useState<any>();
	const [uploadedImage, setUploadedImage] = useState<File>();

	const uploadHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!uploadedImage) return;

		const formData = new FormData();
		formData.set("file", uploadedImage);

		const firstName = uploadedImage.name;
		const lastName = uploadedImage.type;

		try {
			await fetch(`/api/upload?firstName=${firstName}`, {
				method: "POST",
				body: formData,
			});
		} catch (error) {
			console.log("error in uploadhandler:", error);
		}
	};

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="flex items-center justify-center h-36 w-[80%] border border-white rounded">
				<form onSubmit={uploadHandler}>
					<input
						type="file"
						accept="image/*"
						onChange={(e) => {
							if (e.target.files !== null) {
								const file = e.target.files[0];
								setUploadedImage(file);
								setUploadedImageUrl(URL.createObjectURL(file));
							}
						}}
					/>
					<input type="submit" value={"UPLOAD"} />
				</form>
				{uploadedImageUrl !== undefined && (
					<Image
						src={uploadedImageUrl}
						height={100}
						width={100}
						alt="test"
					/>
				)}
			</div>
		</div>
	);
}
