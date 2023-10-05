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

export default function MembersLanding() {
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
						Members
					</div>
					<div className="ml-10 h-px w-full bg-black" />
				</div>
				<div className="mt-10">
					<p
						className={clsx(
							"text-black text-2xl mb-5",
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
						>
							<SwiperSlide>
								<Image
									src={MohitRaghav}
									alt="Producer & CEO"
									className={clsx(
										"w-full h-full rounded-xl cursor-pointer"
										// "lg:w-[245px] lg:h-[300px]"
									)}
									onClick={() =>
										window.open(
											"https://www.instagram.com/mohit.raghav15/",
											"_blank"
										)
									}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={PulkitRaghav}
									alt="Producer & Creative"
									className={clsx(
										"w-full h-full rounded-xl cursor-pointer"
										// "lg:w-[245px] lg:h-[300px]"
									)}
									onClick={() =>
										window.open(
											"https://www.instagram.com/raghavpulkit/",
											"_blank"
										)
									}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={GautamNain}
									alt="Producer & Director"
									className={clsx(
										"w-full h-full rounded-xl cursor-pointer"
										// "lg:w-[245px] lg:h-[300px]"
									)}
									onClick={() =>
										window.open(
											"https://www.instagram.com/gautam_nain_official/",
											"_blank"
										)
									}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={RahulKhandelwal}
									alt="Producer & Finance"
									className={clsx(
										"w-full h-full rounded-xl cursor-pointer"
										// "lg:w-[245px] lg:h-[300px]"
									)}
									onClick={() =>
										window.open(
											"https://www.instagram.com/rahulkhandelwal167/",
											"_blank"
										)
									}
								/>
							</SwiperSlide>
						</Swiper>
					) : (
						<div className="flex justify-between items-center">
							<Image
								src={MohitRaghav}
								alt="Producer & CEO"
								className={clsx(
									"w-full h-full rounded-md cursor-pointer border border-black",
									"lg:w-[230px] lg:h-[280px]"
								)}
								onClick={() =>
									window.open(
										"https://www.instagram.com/mohit.raghav15/",
										"_blank"
									)
								}
							/>
							<Image
								src={PulkitRaghav}
								alt="Producer & Creative"
								className={clsx(
									"w-full h-full rounded-md cursor-pointer border border-black",
									"lg:w-[210px] lg:h-[280px]"
								)}
								onClick={() =>
									window.open(
										"https://www.instagram.com/raghavpulkit/",
										"_blank"
									)
								}
							/>

							<Image
								src={GautamNain}
								alt="Producer & Director"
								className={clsx(
									"w-full h-full rounded-md cursor-pointer border border-black",
									"lg:w-[200px] lg:h-[270px]"
								)}
								onClick={() =>
									window.open(
										"https://www.instagram.com/gautam_nain_official/",
										"_blank"
									)
								}
							/>
							<Image
								src={RahulKhandelwal}
								alt="Producer & Finance"
								className={clsx(
									"rounded-md cursor-pointer border border-black",
									"lg:w-[230px] lg:h-[280px]"
								)}
								onClick={() =>
									window.open(
										"https://www.instagram.com/rahulkhandelwal167/",
										"_blank"
									)
								}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
