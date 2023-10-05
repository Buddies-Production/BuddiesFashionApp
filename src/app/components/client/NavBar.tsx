"use client";

import clsx from "clsx";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
	BurgerMenu,
	CrossSvg,
	DateToRememberLogo,
	FashionEventLogo,
} from "../../../../public";
import { BookAntFont } from "../../../../font";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				"w-full flex h-32 py-4 justify-center items-center z-[99999] fixed transition-colors duration-1000",
				"lg:h-36",
				scrollPosition !== 0 && "bg-black"
				// scrollPosition > 795 && "bg-transparent"
			)}
		>
			<Link href={"/"}>
				<Image
					src={FashionEventLogo}
					alt="Buddies Production Logo"
					className={clsx(
						"absolute left-5 top-5 h-20 w-32",
						"lg:h-24 lg:left-10 lg:w-36"
					)}
				/>
			</Link>
			{/* {scrollPosition < 795 && ( */}
			<Image
				src={BurgerMenu}
				alt="Mobile Menu Hamburger icon Bar"
				width={"25"}
				height={"20"}
				className={clsx(
					"absolute top-12 right-5 cursor-pointer z-[51]",
					"lg:hidden"
				)}
				onClick={() => setIsOpen((props) => !props)}
			/>
			{/* )} */}

			{/* Desktop Navbar */}
			<div
				className={clsx(
					"hidden",
					"lg:flex",
					"w-[50%] h-28 items-center justify-between text-2xl font-normal"
				)}
			>
				{/* <div className="w-[50px]"> */}
				<Link
					href="/"
					className={clsx(
						"cursor-pointer w-[40px]",
						"hover:font-bold"
					)}
				>
					Home
				</Link>
				{/* </div> */}
				<Link
					href="/about"
					className={clsx(
						"cursor-pointer w-[40px]",
						"hover:font-bold"
					)}
				>
					About
				</Link>
				<Link
					href="/media"
					className={clsx(
						"cursor-pointer w-[50px]",
						"hover:font-bold"
					)}
				>
					Media
				</Link>
				{/* <Link
					href="/"
					className={clsx(
						"cursor-pointer w-[60px]",
						"hover:font-bold"
					)}
				>
					Members
				</Link> */}
				<Link
					href="/event-registration"
					className={clsx(
						"cursor-pointer w-[150px] whitespace-nowrap",
						"hover:font-bold"
					)}
				>
					Event Registration
				</Link>
				<Link
					href="/contact-us"
					className={clsx(
						"whitespace-nowrap",
						"cursor-pointer w-[50px]",
						"hover:font-bold"
					)}
				>
					Contact
				</Link>
			</div>

			{/* Mobile Navbar */}
			<div
				className={clsx(
					"absolute h-screen right-0 top-0 z-[99999] transition-all duration-500",
					// scrollPosition < 795 ? "opacity-100" : "opacity-0",
					// scrollPosition < 795 && isOpen
					isOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div
					className={
						"w-[300px] h-full bg-black flex flex-col justify-between items-center relative pt-16 pb-60 text-3xl text-center"
					}
					style={{
						fontFamily: BookAntFont.style.fontFamily,
					}}
				>
					<Image
						src={CrossSvg}
						alt="Exit from menu"
						className="cursor-pointer absolute top-5 right-5"
						width={"30"}
						height={"30"}
						onClick={() => setIsOpen((isopen) => !isopen)}
					/>
					<Link href="/" className="cursor-pointer">
						Home
					</Link>
					<Link href="/about" className="cursor-pointer">
						About
					</Link>
					<Link href="/media" className="cursor-pointer">
						Media
					</Link>
					{/* <Link href="/" className="cursor-pointer">
						Members
					</Link> */}
					<Link href="/event-registration" className="cursor-pointer">
						Event Registration
					</Link>
					<Link href="/contact-us" className="cursor-pointer">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
