import createBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const withBundleAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
	openAnalyzer: false,
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				hostname: "zhospital.azurewebsites.net",
			},
			{
				hostname: "**.dropboxusercontent.com",
			},
		],
	},
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
