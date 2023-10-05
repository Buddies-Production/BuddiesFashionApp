import clsx from "clsx";

import Image from "next/image";

import { Footer } from "../components/server";
import { NavBar } from "../components/client";

export default function Media() {
	return (
		<div className="h-screen w-screen relative">
			<NavBar />
			<div className={clsx("px-[30px] py-40", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p className={clsx("text-[32px]", "lg:text-[64px]")}>
						Media
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>

				<div>
					{/* <p
						className={clsx(
							"px-16 py-1 rounded-3xl bg-white w-fit text-black text-3xl mt-12",
							"lg:text-5xl"
						)}
					>
						Season 1
					</p> */}
					<div className="flex flex-wrap justify-between items-center pt-12">
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/hFw5SSh/formal-boy-1-1st.jpg"
								}
								alt="MTV mr and miss india runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/JkjxVCB/ethnic-boy-2-1st.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/8zt82BG/ethnic-girl-1-1st.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/bK238TN/ethnic-girl-2-1st.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/pxy02J4/formal-boy-1-2nd.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 30%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/ydYfSG1/ethnic-boy-2-2nd.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/XXF4jSL/ethnic-girl-1-2nd.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/k0bZPxc/ethnic-boy-1-1st.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 10%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/YWDTLxp/formal-girl-1-1st.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 20%",
								}}
							/>
						</div>
						<div className="h-[267px] w-[375px] border border-white">
							<Image
								src={
									"https://i.ibb.co/WWdfsx6/formal-girl-1-2nd.jpg"
								}
								alt="MTV mr and ms runaway model"
								className="rounded-[4px]"
								width={375}
								height={267}
								style={{
									height: "100%",
									objectFit: "cover",
									objectPosition: "50% 20%",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
