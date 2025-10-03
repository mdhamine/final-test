// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

	runtimeConfig: {
		CHARGILY_API_KEY: process.env.CHARGILY_API_KEY,
		CHARGILY_SECRET_KEY: process.env.CHARGILY_API_SECRET,
		
	},
	ssr: true,
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/supabase',
		'@nuxtjs/tailwindcss',
		'humblescroll-nuxt',
		'nuxt-aos',
		'nuxt-calendly',
		'@nuxtjs/i18n',
		'@nuxt/image',
		'@nuxtjs/critters',
		'@nuxt/content',
		'@nuxtjs/sitemap',
	],
	plugins: [{ src: '~/plugins/jquery-smooth-scroll.js', mode: 'client' }, 'vercel-analytics.js'],
	content: {},
	build: {
		transpile: ['@splidejs'],
	},
	critters: {
		config: {
			preload: 'swap',
		},
	},
	i18n: {
		locales: ['en', 'ar', 'fr'],
		defaultLocale: 'en',
		detectBrowserLanguage: true,
		vueI18n: './i18n.config.ts',
	},
	humbleScroll: {
		repeat: true,
		mirror: true,
		offset: {
			bottom: -100,
			top: 0,
			left: 0,
			right: 0,
		},
	},
	mongoose: {
		uri: process.env.MONGODB_URI,
		options: {
			dbName: process.env.MONGODB_DB_NAME,
		},
	},
	sitemap: {
		xsl: false,
	},
	site: {
		url: 'https://fluently.academy',
		gzip: true,
		exclude: [],
		routes: ['/about', '/login', '/recruitment', '/course/1'],
	},
	supabase: {
		redirectOptions: {
			login: '/login',
			callback: '/courses',
			include: ['/courses(/*)', '/pay', '/success', '/failure', "/course(/*)/Form", '/course(/*)/payment',],
			exclude: undefined,
		},
	},
});