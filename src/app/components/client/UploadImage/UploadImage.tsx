// "use client";

// import Image from "next/image";
// import FileInput from "../FileInput/FileInput";
// import { useState } from "react";

// const UploadImage = (props: {
//     title: string,
// }) => {
// 	const [mouseHover, setMouseHover] = useState(false);

// 	return (
// 		<div className="flex w-[75%] items-center justify-between mt-5">
// 			<p className="whitespace-nowrap font-bold">{props.title}* :</p>
// 			<div className="w-1/3 flex justify-center">
// 				<FileInput
// 					setModelPictures={setModelPictures}
// 					pictureShot="closeUp"
// 				/>
// 			</div>
// 			<div className="flex items-center">
// 				<p className="mr-2 text-sm">Reference: </p>
// 				<div
// 					onMouseLeave={() => setMouseHover(false)}
// 					onMouseEnter={() => setMouseHover(true)}
// 					onClick={() => focusImage(1)}
// 					className="relative cursor-pointer"
// 				>
// 					{mouseHover && (
// 						<div className="absolute h-full w-full top-0 left-0 bg-black/30 text-xs flex justify-center items-center">
// 							Click to <br />
// 							expand
// 						</div>
// 					)}
// 					<Image
// 						src={CloseUpZoomedInPng}
// 						alt="Close up reference"
// 						className="h-20 w-20"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
