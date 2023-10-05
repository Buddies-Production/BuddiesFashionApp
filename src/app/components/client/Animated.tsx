"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Animated = () => {
	const [heading, setHeading] = useState(false);
	const [line, setLine] = useState(false);
	const [subFashion, setSubFashion] = useState(false);
	const [subFusion, setSubFusion] = useState(false);
	const [subFiesta, setSubFiesta] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setHeading(true);
			setTimeout(() => {
				setLine(true);
				setTimeout(() => {
					setSubFashion(true);
					setSubFiesta(true);
					setTimeout(() => {
						setSubFusion(true);
					}, 500);
				}, 500);
			}, 500);
		}, 300);
	}, []);

	return (
		<>
			<p
				className={clsx(
					"text-3xl tracking-[20px] translate-x-5 transition-transform duration-1000",
					"lg:text-8xl lg:tracking-[30px] lg:translate-x-0",
					heading ? "translate-y-0" : "translate-y-[1000%]"
				)}
			>
				RUNWAY
			</p>
			<div
				className={clsx(
					"bg-white h-[2px] w-[90%] mb-3 transition-transform duration-500",
					"lg:w-[98%]",
					line
						? "translate-x-2 lg:translate-x-0"
						: "-translate-x-[200%]"
				)}
			></div>
			<div className={clsx("flex text-sm", "lg:text-4xl")}>
				<p
					className={clsx(
						"transition-transform duration-1000",
						subFashion ? "translate-x-0" : "-translate-x-[1000%]"
					)}
				>
					FASHION
				</p>
				<p
					className={clsx(
						"mx-4 transition-transform duration-500",
						subFusion ? "scale-100" : "scale-0"
					)}
				>
					FUSION
				</p>
				<p
					className={clsx(
						"transition-transform duration-1000",
						subFiesta ? "translate-x-0" : "translate-x-[1000%]"
					)}
				>
					FIESTA
				</p>
			</div>
		</>
	);
};

export default Animated;
