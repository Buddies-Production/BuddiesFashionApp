import mongoose from "mongoose";
declare global {
	var mongoose: any;
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) throw new Error("MONGODB_URL not defined");

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = {
		conn: null,
		promise: null,
	};
}

const dbConnect = async () => {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose
			.connect(MONGODB_URL, opts)
			.then((mongoose) => {
				return mongoose;
			});
	}

	try {
		cached.conn = await cached.promise;
	} catch (error) {
		cached.promise = null;
		throw error;
	}

	return cached.conn;
};

export default dbConnect;
