"use client";

import clsx from "clsx";
import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { NavBar } from "../components/client";
import { Footer } from "../components/server";

import {
	AboutEventEight,
	AboutEventEleven,
	AboutEventFive,
	AboutEventFour,
	AboutEventNine,
	AboutEventOne,
	AboutEventSeven,
	AboutEventSix,
	AboutEventTen,
	AboutEventThirteen,
	AboutEventThree,
	AboutEventTwelve,
	AboutEventTwo,
} from "../../../public";

import "swiper/css";
import "./styles.css";

const AboutEvent = () => {
	const swiperRef = useRef<any>();

	return (
		<div className="bg-black">
			<NavBar />
			<div
				className={clsx("relative pt-[75%] pb-36", "lg:px-10 lg:pt-36")}
			>
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					modules={[Autoplay, Navigation, Pagination]}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					className="mySwiper"
					speed={3000}
				>
					<button
						onClick={() => swiperRef.current.slidePrev()}
						className={clsx(
							"absolute rounded-full h-5 w-5 top-1/2 -translate-y-1/2 left-10 z-10 cursor-pointer",
							"hover:bg-black/40",
							"lg:h-20 lg:w-20"
						)}
					>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 12H18M6 12L11 7M6 12L11 17"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button
						onClick={() => swiperRef.current.slideNext()}
						className={clsx(
							"absolute rounded-full h-5 w-5 top-1/2 -translate-y-1/2 right-10 z-10 cursor-pointer",
							"hover:bg-black/40",
							"lg:h-20 lg:w-20"
						)}
					>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 12H18M18 12L13 7M18 12L13 17"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>

					<SwiperSlide>
						<Image
							src={AboutEventOne}
							alt="About the event landing page"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventTwo} alt="The Show Concept" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventThree} alt="About MTV" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventFour} alt="Auditions" />
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative">
							<Image
								src={AboutEventFive}
								alt="Host of the show"
							/>
							<p
								className={clsx(
									"border border-white px-3 py-2 absolute top-1/2 right-[18%] text-xs -translate-y-1/2 text-[#D9A644]",
									"lg:text-4xl lg:right-[21%]"
								)}
							>
								Tentative
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventSix} alt="Judge of the show" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventSeven} alt="Selection Process" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventEight} alt="Flow of the show" />
					</SwiperSlide>

					<SwiperSlide>
						<Image src={AboutEventNine} alt="Show format" />
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={AboutEventTen}
							alt="Industry expert guidance for holistic grooming"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={AboutEventEleven}
							alt="Our grooming experts"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={AboutEventTwelve}
							alt="Episode highlights"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={AboutEventThirteen} alt="Liza Varma" />
					</SwiperSlide>
				</Swiper>
			</div>
			<Footer />
		</div>
	);
};

export default AboutEvent;
