import clsx from "clsx";
import { NavBar } from "../components/client";
import { Footer } from "../components/server";
import Link from "next/link";

export default function PrivacyPolicy() {
	return (
		<div className="h-screen w-screen relative">
			<NavBar />
			<div className={clsx("px-[30px] pt-40 pb-28", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p
						className={clsx(
							"whitespace-nowrap text-[32px]",
							"lg:text-[64px]"
						)}
					>
						Privacy Policy
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>
				<div
					className={clsx(
						"mt-14 text-sm tracking-wide",
						"lg:text-2xl"
					)}
				>
					<p className="leading-10">
						This privacy notice for Buddies Productions Private
						Limited (&quot;we,&quot; &quot;us,&quot; or
						&quot;our&quot;), describes how and why we might
						collect, store, use, and/or share (&quot;process&quot;)
						your information when you use our services
						(&quot;Services&quot;), such as when you:
					</p>
					<p className="mt-10 leading-10 pl-10">
						• Visit our website at{" "}
						<Link
							href={
								"https://www.buddiesfashion.in/privacy-policy"
							}
							className="text-blue-400 cursor-pointer"
						>
							https://www.buddiesfashion.in/privacy-policy
						</Link>
						, or any website of ours that links to this privacy
						notice
						<br />• Engage with us in other related ways, including
						any sales, marketing, or events
					</p>
					<p className="mt-10 leading-10">
						<b>Questions or concerns?</b> Reading this privacy
						notice will help you understand your privacy rights and
						choices. If you do not agree with our policies and
						practices, please do not use our Services. If you still
						have any questions or concerns, please contact us at{" "}
						<b>buddiesproductions01@gmail.com</b>.
					</p>
					<PolicyItem
						title="What personal information do we process?"
						text="When you visit, use, or navigate our Services, we may
						process personal information depending on how you
						interact with us and the Services, the choices you make,
						and the products and features you use."
						className="mt-5"
					/>
					<PolicyItem
						title="Do we process any sensitive personal information?"
						text="We may process sensitive personal information when
						necessary with your consent or as otherwise permitted by
						applicable law. Learn more about sensitive information
						we process."
						className="mt-5"
					/>
					<PolicyItem
						title="Do we receive any information from third parties?"
						text="We do not receive any information from third parties."
						className="mt-5"
					/>
					<PolicyItem
						title="How do we process your information?"
						text="We process your information to provide, improve, and
						administer our Services, communicate with you, for
						security and fraud prevention, and to comply with law.
						We may also process your information for other purposes
						with your consent. We process your information only when
						we have a valid legal reason to do so."
						className="mt-5"
					/>
					<PolicyItem
						title="In what situations and with which parties do we
							share personal information?"
						text="We may share information in specific situations and with
                            specific third parties."
						className="mt-5"
					/>
					<PolicyItem
						className="mt-5"
						title="How do we keep your information safe?"
						text="We have organizational and technical processes and
						procedures in place to protect your personal
						information. However, no electronic transmission over
						the internet or information storage technology can be
						guaranteed to be 100% secure, so we cannot promise or
						guarantee that hackers, cybercriminals, or other
						unauthorized third parties will not be able to defeat
						our security and improperly collect, access, steal, or
						modify your information."
					/>
					<PolicyItem
						className="mt-5"
						title="What are your rights?"
						text="Depending on where you are located
					geographically, the applicable privacy law may mean you have
					certain rights regarding your personal information."
					/>
					<p className="mt-10 leading-10 tracking-wide text-center">
						If you have questions or comments <br /> about this
						notice, you may email us at{" "}
						<b>buddiesproductions01@gmail.com</b> or contact us by
						post at:{" "}
						<b>
							Buddies Productions Private Limited A-23, 1st floor,
							Sector 16, Noida, 201301 Noida, Uttar Pradesh 201301
							India
						</b>
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const PolicyItem = (props: {
	title: string;
	text: string;
	className?: string;
}) => {
	return (
		<div className={clsx("leading-10", props.className)}>
			<span className="font-bold">{props.title} </span>
			{props.text}
		</div>
	);
};
