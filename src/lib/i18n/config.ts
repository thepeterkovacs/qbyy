import { getRequestConfig } from "next-intl/server"

export const locales: Locale[] = [
	{
		name: "English",
		lang: "en",
	},
	{
		name: "Magyar",
		lang: "hu",
	},
]

export const defaultLocale = "en"

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./messages/${locale}.json`)).default,
}))
