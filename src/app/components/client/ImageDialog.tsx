import React from "react";
import Image from "next/image";
import { CrossIcon } from "../server";
import { CloseUpZoomedOutPng } from "../../../../public";

// [WIP]

const ImageDialog = (onClick: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0">
			<div className="relative">
				<CrossIcon
					onClick={onClick}
					className="absolute -top-0 -right-0 text-white bg-white/30"
				/>
				<Image
					src={CloseUpZoomedOutPng}
					alt="Close up reference zoomed out"
					className="rounded-md"
				/>
			</div>
		</div>
	);
};

export default ImageDialog;
