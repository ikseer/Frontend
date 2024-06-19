import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

if (!process.env.NEXT_PUBLIC_BACKEND_URL)
	throw new Error("Missing NEXT_PUBLIC_BACKEND_URL");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: new URL(process.env.NEXT_PUBLIC_BACKEND_URL).hostname,
			},
		],
	},
};

export default withNextIntl(nextConfig);
