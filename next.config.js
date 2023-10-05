/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/api/test-payment",
				destination:
					"https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
			},
			{
				source: "/api/payment-gateway",
				destination: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
			},
			{
				source: "/api/doc-form",
				destination:
					"https://script.google.com/macros/s/AKfycbzI3a4_GKvicJyBTybmwf4INhmYzWecJGtfX6qh_rUY0sHfyWOwPtC-kddnmrMDtgkbtg/exec",
			},
			// {
			// 	source: "/api/checkApi",
			// 	destination:
			// 		"https://api.phonepe.com/apis/hermes/pg/v1/status/BUDDIESONLINE/MT7850590068188104",
			// },
		];
	},
	experimental: {
		serverComponentsExternalPackages: ["mongoose"],
	},
};

module.exports = withVideos(nextConfig);
