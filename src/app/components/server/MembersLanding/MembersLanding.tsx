"use client";

import clsx from "clsx";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useGetSize } from "@/lib/util";
import "swiper/css";
import {
	GautamNain,
	MohitRaghav,
	PulkitRaghav,
	RahulKhandelwal,
} from "../../../../../public";

import { Cedarville_Cursive } from "next/font/google";

const cursiveFont = Cedarville_Cursive({ weight: ["400"], subsets: ["latin"] });

export default function MembersLanding() {
	const [isSmallScreen] = useGetSize();

	return (
		<div
			className={clsx(
				`bg-black w-full py-[50px] px-[30px]`,
				"lg:px-[58px] lg:pt-[78px] lg:pb-[111px]"
			)}
		>
			<div className="w-full">
				<div className="w-full flex items-center">
					<div
						className={clsx(
							"text-2xl font-normal text-white whitespace-nowrap",
							"lg:text-[64px] lg:mb-5"
						)}
					>
						Members
					</div>
					<div className="ml-10 h-px w-full bg-white" />
				</div>
				<div className="mt-10">
					<p
						className={clsx(
							"text-white text-2xl mb-5",
							"lg:text-[40px]"
						)}
					>
						Founders
					</p>
					{isSmallScreen ? (
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay]}
							className="mySwiper"
							style={{
								fontFamily: cursiveFont.style.fontFamily,
							}}
						>
							<SwiperSlide>
								<SmImageContainer
									alt="Producer & CEO"
									imgSrc={MohitRaghav}
									instaLink="https://www.instagram.com/mohit.raghav15/"
									name="Mohit Raghav"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<div className="h-[400px] w-[350px] flex flex-col items-center justify-center">
									<Image
										src={PulkitRaghav}
										alt="Producer & Creative"
										className={clsx("w-full h-[385px]")}
										style={{
											objectFit: "cover",
											objectPosition: "50% 20%",
										}}
										onClick={() =>
											window.open(
												"https://www.instagram.com/raghavpulkit/",
												"_blank"
											)
										}
									/>
									<p className="text-3xl text-center">
										Pulkit Raghav
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="h-[400px] w-[350px] flex flex-col items-center justify-center">
									<Image
										src={GautamNain}
										alt="Producer & Director"
										className={clsx("w-full h-[385px]")}
										style={{
											objectFit: "cover",
											objectPosition: "50% 20%",
										}}
										onClick={() =>
											window.open(
												"https://www.instagram.com/gautam_nain_official/",
												"_blank"
											)
										}
									/>
									<p className="text-3xl text-center">
										Gautam Nain
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="h-[400px] w-[350px] flex flex-col items-center justify-center">
									<Image
										src={RahulKhandelwal}
										alt="Producer & Finance"
										className={clsx("w-full h-[385px]")}
										style={{
											objectFit: "cover",
											objectPosition: "50% 20%",
										}}
										onClick={() =>
											window.open(
												"https://www.instagram.com/rahulkhandelwal167/",
												"_blank"
											)
										}
									/>
									<p className="text-3xl text-center">
										Rahul Khandelwal
									</p>
								</div>
							</SwiperSlide>
						</Swiper>
					) : (
						<div
							className="flex justify-between items-center"
							style={{
								fontFamily: cursiveFont.style.fontFamily,
							}}
						>
							<LgImageContainer
								imgSrc={MohitRaghav}
								alt="Producer & CEO"
								instaLink="https://www.instagram.com/mohit.raghav15/"
								name="Mohit Raghav"
							/>
							<LgImageContainer
								imgSrc={PulkitRaghav}
								alt="Producer & Creative"
								instaLink="https://www.instagram.com/raghavpulkit/"
								name="Pulkit Raghav"
							/>
							<LgImageContainer
								imgSrc={GautamNain}
								alt="Producer & Director"
								instaLink="https://www.instagram.com/gautam_nain_official/"
								name="Gautam Nain"
							/>
							<LgImageContainer
								imgSrc={RahulKhandelwal}
								alt="Producer & Finance"
								instaLink="https://www.instagram.com/rahulkhandelwal167/"
								name="Rahul Khandelwal"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

const LgImageContainer = (props: {
	imgSrc: any;
	alt: string;
	instaLink: string;
	name: string;
}) => {
	return (
		<div className="group">
			<div className="overflow-hidden cursor-pointer">
				<Image
					src={props.imgSrc}
					alt={props.alt}
					className={clsx(
						"transition-transform duration-500",
						"group-hover:scale-110",
						"lg:w-[230px] lg:h-[280px]"
					)}
					style={{
						objectFit: "cover",
					}}
					onClick={() => window.open(props.instaLink, "_blank")}
				/>
			</div>
			<p className="lg:text-3xl text-center">{props.name}</p>
		</div>
	);
};

const SmImageContainer = (props: {
	imgSrc: any;
	alt: string;
	instaLink: string;
	name: string;
}) => {
	return (
		<div className="h-[400px] w-[350px] flex flex-col items-center justify-center">
			<Image
				src={MohitRaghav}
				alt="Producer & CEO"
				className={clsx("w-full h-[385px]")}
				style={{
					objectFit: "cover",
				}}
				onClick={() =>
					window.open(
						"https://www.instagram.com/mohit.raghav15/",
						"_blank"
					)
				}
			/>
			<p className="text-3xl text-center">Mohit Raghav</p>
		</div>
	);
};
