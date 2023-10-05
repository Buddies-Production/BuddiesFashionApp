import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		// accessKeyId: "AKIA3AP5PFREROBWPDG7",
		// secretAccessKey: "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",
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

export const main = async (key: string, buffer: Buffer) => {
	const command = new PutObjectCommand({
		Bucket: process.env.S3_BUCKET_NAME,
		Key: key,
		Body: buffer,
	});

	try {
		const response = await client.send(command);
		return {
			url: `https://${process.env.S3_BUCKET_NAME}.${process.env.AWS_REGION}.amazonaws.com/${key}`,
			response,
		};
	} catch (err) {
		console.error(err);
	}
};
