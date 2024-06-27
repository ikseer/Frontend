import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

if (!process.env.NEXT_PUBLIC_BACKEND_URL)
	throw new Error("Missing NEXT_PUBLIC_BACKEND_URL");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				hostname: new URL(process.env.NEXT_PUBLIC_BACKEND_URL).hostname,
			},
			{
				hostname: "**.dropboxusercontent.com",
			},
		],
	},
};

export default withNextIntl(nextConfig);
