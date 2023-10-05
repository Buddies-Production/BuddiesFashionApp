import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Buddies Fashion",
	description:
		"Buddies Production Mr and Miss India Runway model registration page mtv fashion event",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
