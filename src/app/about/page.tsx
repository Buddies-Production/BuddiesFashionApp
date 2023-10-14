"use client";

import Image from "next/image";
import { NavBar } from "../components/client";
import {
	GautamNain,
	MohitRaghav,
	PulkitRaghav,
	RahulKhandelwal,
} from "../../../public";
import { Footer } from "../components/server";
import BuddiesLogoElement from "../components/client/BuddiesLogo/BuddiesLogo";
import clsx from "clsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useGetSize } from "@/lib/util";

export default function About() {
	const [isSmallScreen] = useGetSize();

	return (
		<div className="h-screen w-screen bg-black relative">
			<NavBar />
			<div className={clsx("px-[30px] py-40", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p className={clsx("text-[32px]", "lg:text-[64px]")}>
						About
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>
				<div className="mt-6">
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
									"w-full h-full rounded-xl cursor-pointer",
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
									"w-full h-full rounded-xl cursor-pointer",
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
									"w-full h-full rounded-xl cursor-pointer",
									"lg:w-[230px] lg:h-[270px]"
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
									"rounded-xl cursor-pointer",
									"lg:w-[250px] lg:h-[280px]"
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

				<div className={clsx("mt-10", "lg:mt-16")}>
					<p className={clsx("text-xl text-center", "lg:text-4xl")}>
						Buddies Productions is a dynamic and influential player
						in the entertainment industry. With a track record of
						creating compelling content across various formats, they
						bring innovation and creativity to every project. Their
						collaboration with &quot;MTV Date to Remember Session
						2&quot; extends the show&apos;s impact, offering
						contestants unparalleled opportunities in the world of
						entertainment. Through music videos, web series, and
						more, Buddies Productions serves as a launchpad for
						budding talents, amplifying their presence and influence
						in the industry.
					</p>
				</div>
				<div className="mt-24 w-full flex justify-center">
					<BuddiesLogoElement />
				</div>
			</div>
			<Footer />
		</div>
	);
}
