import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	defaultLocale: 'en',
	detectBrowserLanguage: false,
	fallbackLocale: 'en',
	messages: {
		en,
		ar,
		fr,
	},
}));
