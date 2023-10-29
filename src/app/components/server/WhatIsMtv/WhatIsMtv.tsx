"use client";

import clsx from "clsx";
import { useRef } from "react";

// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { DateToRememberLogo } from "../../../../../public";
import EventCallToAction from "../EventCallToAction/EventCallToAction";

export default function WhatIsMtv() {
	const swiperRef = useRef<any>();

	return (
		<>
			<div className={clsx("px-[30px] py-10", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p
						className={clsx(
							"text-[32px] whitespace-nowrap",
							"lg:text-[64px]"
						)}
					>
						About the show
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>
				<div className="flex items-center w-full justify-center">
					<Image
						src={DateToRememberLogo}
						alt="MTV Date to Remember Mr & Miss India Runway Model"
						className={clsx("lg:h-[350px] lg:w-[450px]")}
					/>
				</div>
				<div
					className={clsx(
						"flex flex-col items-center w-full",
						"lg:flex-row lg:justify-between"
					)}
				>
					<video
						src={require("./video1.mp4")}
						muted
						autoPlay
						loop
						className={clsx("rounded-2xl mb-5", "lg:mb-0")}
					/>
					<video
						src={require("./video2.mp4")}
						muted
						autoPlay
						loop
						className="rounded-2xl"
					/>
				</div>
				<div className="w-full flex justify-center py-10">
					<EventCallToAction href="/about-event" text="Learn more" />
				</div>
			</div>
			<div
				className={clsx(
					"bg-black w-full flex items-center justify-center relative h-[400px] mb-10 border-y border-white",
					"lg:h-[600px]"
				)}
			>
				<div
					className={clsx(
						"absolute left-5 -bottom-14 z-10 text-black font-bold",
						"lg:left-10"
					)}
				>
					<button
						onClick={() => swiperRef.current.slidePrev()}
						className="px-3 py-2 bg-white/90 rounded border border-white hover:bg-white"
					>
						PREV
					</button>
					<button
						onClick={() => swiperRef.current.slideNext()}
						className="ml-5 px-3 py-2 bg-white/90 rounded border border-white hover:bg-white"
					>
						NEXT
					</button>
				</div>
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					// autoplay={{
					// 	delay: 2000,
					// 	disableOnInteraction: false,
					// }}
					className="mySwiper h-full w-full"
					speed={500}
				>
					<SwiperSlide>
						<iframe
							className="w-full h-full"
							src="https://www.youtube.com/embed/WtR7jqnSYI0?si=YOOzjvAFGtab7a7x"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</SwiperSlide>
					<SwiperSlide>
						<iframe
							className="h-full w-full"
							src="https://www.youtube.com/embed/IKOIMgVPAoA?si=Y6n2nP4kThyESB5J&amp;start=3"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
