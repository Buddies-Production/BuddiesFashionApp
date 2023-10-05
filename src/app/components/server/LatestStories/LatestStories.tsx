"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import clsx from "clsx";
import { useGetSize } from "@/lib/util";
import LatestStoriesContainer from "../LatestStoriesContainer";
import {
	EthnicGirlOneSecond,
	FormalBoyOneFirst,
	FormalGirlOneSecond,
} from "../../../../../public";

export default function LatestStories() {
	const [isSmallScreen] = useGetSize();

	return (
		<div
			className={clsx(
				`bg-white w-full py-[50px] px-[30px]`,
				"lg:px-[58px] lg:pt-[78px] lg:pb-[111px]"
			)}
		>
			<div className="w-full">
				<div className="w-full flex items-center">
					<div
						className={clsx(
							"text-2xl font-normal text-black whitespace-nowrap",
							"lg:text-[64px] lg:mb-5"
						)}
					>
						Latest Stories
					</div>
					<div className="ml-10 h-px w-full bg-black" />
				</div>
				<div className={clsx("flex w-full mt-5", "lg:mt-16")}>
					{isSmallScreen ? (
						<Swiper
							slidesPerView={1}
							centeredSlides={true}
							spaceBetween={30}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, Pagination, Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>
								<div
									className={clsx(
										"group h-[300px] relative overflow-hidden cursor-pointer rounded-[10px]",
										"lg:h-[535px]"
									)}
								>
									<Image
										src={FormalBoyOneFirst}
										alt="Fashion story"
										style={{
											height: "100%",
											objectFit: "cover",
											objectPosition: "50% 20%",
										}}
										className="transition-transform duration-500 group-hover:scale-110"
									/>
									{/* <div className="absolute top-0 bg-[#890304] h-full w-full opacity-40" /> */}
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div
									className={clsx(
										"group h-[300px] relative overflow-hidden cursor-pointer rounded-[10px]",
										"lg:h-[535px]"
									)}
								>
									<Image
										src={FormalGirlOneSecond}
										alt="Fashion story"
										style={{
											height: "100%",
											objectFit: "cover",
											objectPosition: isSmallScreen
												? "50% 10%"
												: "50% 50%",
										}}
										className="transition-transform duration-500 group-hover:scale-110 rounded-[10px]"
									/>
									{/* <div className="absolute top-0 bg-[#890304] h-full w-full opacity-40" /> */}
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div
									className={clsx(
										"group h-[300px] relative overflow-hidden cursor-pointer rounded-[10px]",
										"lg:h-[535px]"
									)}
								>
									<Image
										src={EthnicGirlOneSecond}
										alt="Fashion story"
										style={{
											height: "100%",
											objectFit: "cover",
											objectPosition: "50% 20%",
										}}
										className="transition-transform duration-500 group-hover:scale-110"
									/>
									{/* <div className="absolute top-0 bg-[#890304] h-full w-full opacity-40" /> */}
								</div>
							</SwiperSlide>
						</Swiper>
					) : (
						<LatestStoriesContainer />
					)}
				</div>
			</div>
		</div>
	);
}
