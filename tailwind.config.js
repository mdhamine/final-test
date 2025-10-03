/** @type {import('tailwindcss').Config} */

import { humbleScrollTailwindPlugin } from 'humblescroll-vue';

export default {
	content: [
		'./node_modules/flowbite/**/*.{js,ts}',
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				'theme-dblue': '#101c5c',
				'theme-lblue': '#205cbc',
				'theme-cyan': '#45E8FF',
			},
			dropShadow: {
				blue: [
					'0 10px *px rgba(0, 255, 234, 0.04)',
					'0 4px 3px rgba(0, 255, 234, 0.1)',
				],
			},
			screens: {
				'3xl': '2560px',
				smoll: '375px',
				medium: '425px',
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('flowbite/plugin'),
		require('daisyui'),
		humbleScrollTailwindPlugin,
	],
	daisyui: {
		logs: false,
	},
};
