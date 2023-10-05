import clsx from "clsx";
import { NavBar } from "../components/client";
import { Footer } from "../components/server";

export default function TermsConditions() {
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
						Terms & Conditions
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
						"flex justify-center items-center text-sm mt-10",
						"lg:text-2xl"
					)}
				>
					<p>
						<span className="font-bold">1.</span> The applicant must
						agree to abide by all rules, as amended from time to
						time by the Organizer in its sole discretion.
						<br />
						<br />
						<span className="font-bold">
							2. Eligibility Criteria:
						</span>{" "}
						<br />
						-For an applicant who recognises themselves as female,
						age should be between (18 – 27 years as of 31st December
						2024) & 5’3” and above in height.
						<br /> -For an applicant who recognises themselves as
						male, age should be between (18 – 27 years as of 31st
						December 2024) & 5’9” and above in height.
						<br />
						<br />
						<span className="font-bold">
							3. Document Requirements:
						</span>{" "}
						<br />- Nationality Proof: Passport (preferred) or
						Aadhar Card. OCI applicants require an OCI card. <br />-
						State Eligibility Proof: Birth Certificate or Passport.{" "}
						<br />- Current State: Employment Certificate/Employment
						ID Card, House Rental Document, College ID, or
						Gas/Electricity Bill. <br />
						<br />
						<span className="font-bold">
							4. Marital Status and Parenthood:
						</span>{" "}
						<br />- Applicants should not have been married,
						undergone any marriage ceremony, or become parents.{" "}
						<br />- Female applicants should never have been
						pregnant.
						<br />
						<br />
						<span className="font-bold">5.</span> Applicants must be
						bona fide Indian citizens, holding valid Indian
						passports, and residing in India as per applicable laws.
						<br />
						<br />
						<span className="font-bold">6.</span> Applicants or
						their immediate families should not be related to
						employees of MTV, Viacom18 Media, contest sponsors,
						subcontractors, or judges. Any such relation must be
						disclosed.
						<br />
						<br />
						<span className="font-bold">7.</span> If under a
						commercial contract with a modeling agency during
						auditions, applicants must declare it via email before
						auditioning.
						<br />
						<br />
						<span className="font-bold">8.</span> Once shortlisted,
						applicants cannot enter into any other commercial
						contract or pageant without prior disclosure to the
						Organization.
						<br />
						<br />
						<span className="font-bold">9.</span> The Organizer is
						not responsible for application delays or non-receipt
						for any reason.
						<br />
						<br />
						<span className="font-bold">10.</span> Applicants should
						not have represented any country other than India in any
						contest and must disclose such participation.
						<br />
						<br />
						<span className="font-bold">11.</span> Applicants must
						participate in a disciplined and diligent manner as per
						the audition schedule.
						<br />
						<br />
						<span className="font-bold">12.</span> Any requested
						applicant information must be shared with the
						Organization immediately.
						<br />
						<br />
						<span className="font-bold">13.</span> The Organizer is
						not responsible for sponsors not fulfilling promised
						prizes.
						<br />
						<br />
						<span className="font-bold">14.</span> The Organizer is
						not responsible for any participant loss or physical
						injury during the event. Participants attend at their
						own risk.
						<br />
						<br />
						<span className="font-bold">15.</span> Incorrect
						information may result in disqualification, whether
						discovered before, during, or after participation.
						<br />
						<br />
						<span className="font-bold">16.</span> Judges&apos;
						decisions are final, and applicants cannot question them
						on any platform.
						<br />
						<br />
						<span className="font-bold">17.</span> Applicants cannot
						disclose screening or judging process details or contact
						judges during the process.
						<br />
						<br />
						<span className="font-bold">18.</span> Applicants must
						be in good health, have a sound mind, and possess good
						moral character to participate.
						<br />
						<br />
						<span className="font-bold">19.</span> Applicants should
						not have any criminal or civil cases registered against
						them.
						<br />
						<br />
						<span className="font-bold">20.</span> Event schedule
						and qualification rounds are subject to change at the
						Organizer&apos;s discretion.
						<br />
						<br />
						<span className="font-bold">21.</span> State winners
						must sign the legal contract with the Organization
						within 24-48 hours of receiving it.
						<br />
						<br />
						<span className="font-bold">22.</span> OCI cardholders
						are eligible for the 2nd runner-up title only.
						<br />
						<br />
						<span className="font-bold">23.</span> The Organizer is
						not responsible for the non-completion or non-occurrence
						of the event.
						<br />
						<br />
						<span className="font-bold">24.</span> In case of
						disputes, the Organizer’s decisions are final, and the
						courts of Uttar Pradesh have jurisdiction.
						<br />
						<br />
						<span className="font-bold">25.</span> If due to any
						circumstances we are not able to reach your city,
						auditions will be taken online
						<br />
						<br />
						For further information or clarifications, please
						contact through whatsapp on the helpline number between{" "}
						<span className="font-bold">
							11:30 AM - 8 PM
						</span> at{" "}
						<span className="font-bold">
							+91 93101-70380 or +91 78278-01756
						</span>
						, or email us at{" "}
						<span className="font-bold">
							support@buddiesproductions.com
						</span>
						.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
