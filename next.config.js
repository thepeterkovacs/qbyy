const withNextIntl = require("next-intl/plugin")("./src/lib/i18n/config.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
