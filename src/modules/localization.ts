import { createI18n } from "vue-i18n";

export const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en: require('@/locales/en-US.json')
	}
});


export default i18n;