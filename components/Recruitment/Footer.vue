<template>
	<div class="bg-[#0e0e46]">
		<div class="bg-[#fafcff] rounded-t-[50px]">
			<div
				class="px-4 pt-16 mx-auto 2xl:mx-80 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
			>
				<div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2">
					<div class="sm:col-span-1 justify-self-start">
						<a
							:href="localePath('/')"
							aria-label="Go home"
							title="Company"
							class="inline-flex items-center"
						>
							<img :src="footlogo" class="h-12" alt="Logo" />
						</a>
						<div class="mt-6 lg:max-w-sm">
							<span
								class="text-base font-medium tracking-wide text-gray-600 mb-8"
								>{{ $t('followus') }}</span
							>
							<div class="flex items-center mt-6 space-x-3">
								<a
									aria-label="Instagram"
									href="https://www.instagram.com/yyounes_talks/"
									class="text-gray-800 transition-colors duration-300"
								>
									<svg viewBox="0 0 30 30" fill="currentColor" class="h-7">
										<circle cx="15" cy="15" r="4"></circle>
										<path
											d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
										></path>
									</svg>
								</a>
								<a
									aria-label="Tiktok"
									href="https://www.tiktok.com/@fluently.academy"
									class="text-gray-800 transition-colors duration-300"
								>
									<svg fill="currentColor" class="h-7" viewBox="0 0 448 512">
										<path
											d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
										/>
									</svg>
								</a>
								<a
									aria-label="LinkedIn"
									href="https://www.linkedin.com/in/younes-aithamou-23827b282/"
									class="text-gray-800 transition-colors duration-300"
								>
									<svg fill="currentColor" class="h-7" viewBox="0 0 448 512">
										<path
											d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="sm:col-span-1 justify-self-start md:justify-self-end">
						<div
							class="grid grid-cols-1 lg:gap-24 gap-7 row-gap-6 lg:col-span-4 md:grid-cols-2 justify-items-start md:justify-items-end"
						>
							<div>
								<p class="font-semibold tracking-wide text-gray-800 text-2xl">
									{{ $t('company') }}
								</p>
								<ul class="mt-2 space-y-2">
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
											>{{ $t('foot1') }}
										</a>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
											>{{ $t('foot2') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
										>
											{{ $t('foot3') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
										>
											{{ $t('foot4') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
										>
											{{ $t('foot5') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
										>
											{{ $t('foot6') }}</a
										>
									</li>
								</ul>
							</div>
							<div>
								<p class="font-semibold tracking-wide text-gray-800 text-2xl">
									{{ $t('resources') }}
								</p>
								<ul class="mt-2 space-y-2">
									<li>
										<a
											aria-label="Go Login"
											:href="localePath('/login')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
											>{{ $t('login') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/recruitment')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
											>{{ $t('nav_recruitment') }}</a
										>
									</li>
									<li>
										<a
											aria-label="Go home"
											:href="localePath('/about')"
											class="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
											>{{ $t('nav_about') }}</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"
				>
					<p
						class="text-md text-gray-400 hover:text-gray-600 transition-colors duration-300"
					>
						{{ $t('cc') }}
					</p>
					<ul
						class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
					>
						<li>
							<a
								aria-label="Terms"
								:href="localePath('/tos')"
								class="text-md text-gray-400 hover:text-gray-600 transition-colors duration-300"
								>{{ $t('terms') }}</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { footlogo } from '~/globalVariables.js';
const { locale } = useI18n();

const localePath = useLocalePath();
</script>
