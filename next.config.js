const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = withPayload(
  {
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    transpilePackages: ["@payloadcms/plugin-seo"],
    images: {
      domains: [
        "localhost",
        "nextjs-vercel.payloadcms.com",
        "rage-payload.vercel.app",
        "rage-payload-cms.s3.amazonaws.com",
        "main.d2pbkid6j17mz2.amplifyapp.com",
        process.env.NEXT_PUBLIC_APP_URL,
        // `${process.env.NEXT_PUBLIC_S3_ENDPOINT}`.replace("https://", ""),
      ],
    },
  },
  {
    configPath: path.resolve(__dirname, "./payload/payload.config")
  }
);

module.exports = nextConfig;
