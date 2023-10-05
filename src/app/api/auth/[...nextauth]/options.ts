import type { NextAuthOptions } from "next-auth";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodbNextAuth";

export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET_ID!,
		}),
		// CredentialsProvider({
		// 	name: "Credentials",
		// 	credentials: {
		// 		email: {
		// 			label: "Email:",
		// 			type: "text",
		// 			placeholder: "Enter email",
		// 		},
		// 		password: {
		// 			label: "Password:",
		// 			type: "password",
		// 			placeholder: "Enter password",
		// 		},
		// 	},
		// 	async authorize(credentials) {
		// 		const client = await clientPromise;
		// 		const usersCollection = client
		// 			.db(process.env.DB_NAME)
		// 			.collection("users");
		// 		const email = credentials?.email.toLowerCase();
		// 		const user = await usersCollection.findOne({ email });
		// 		if (!user) {
		// 			throw new Error("User does not exist.");
		// 		}

		// 		// Validate password
		// 		const passwordIsValid = await bcrypt.compare(
		// 			credentials?.password!,
		// 			user.password
		// 		);

		// 		if (!passwordIsValid) {
		// 			throw new Error("Invalid credentials");
		// 		}

		// 		return {
		// 			id: user._id.toString(),
		// 			...user,
		// 		};
		// 	},
		// }),
	],
	// session: {
	// 	strategy: "jwt",
	// },
};
