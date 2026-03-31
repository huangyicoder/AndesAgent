export type AppLanguage = "en" | "zh" | "ja";

export function resolveAppLanguage(value?: string | null): AppLanguage {
	if (value === "en" || value === "zh" || value === "ja") {
		return value;
	}

	if (typeof navigator !== "undefined") {
		const preferred = [navigator.language, ...navigator.languages]
			.filter(Boolean)
			.map((entry) => entry.toLowerCase());

		for (const locale of preferred) {
			if (locale.startsWith("zh")) return "zh";
			if (locale.startsWith("ja")) return "ja";
			if (locale.startsWith("en")) return "en";
		}
	}

	return "en";
}

export function getDateLocale(language: AppLanguage): string {
	if (language === "zh") return "zh-CN";
	if (language === "ja") return "ja-JP";
	return "en-US";
}
