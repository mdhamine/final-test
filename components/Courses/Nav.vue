<template>
	<nav
		class="relative top-0 z-30 md:z-[60] w-full start-0 2xl:h-20 xl:h-20 lg:h-20 md:h-16 sm:h-16 h-16"
	>
		<div
			class="flex flex-wrap items-center justify-between max-w-screen-2xl lg:px-4 md:py-3 lg:py-5 z-30 relative"
		>
			<div
				class="flex flex-wrap items-center justify-between w-full py-3 relative z-30 md:contents"
			>
				<a
					aria-label="Go home"
					:href="localePath('/')"
					class="flex items-center space-x-3 rtl:space-x-reverse sm:pl-4 pl-2 z-30 sm:w-auto w-1/4"
				>
					<img :src="logo" class="h-10" alt="Logo" />
				</a>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { logo } from '~/globalVariables.js';
import { reactive } from 'vue';
const { locale, setLocale, locales } = useI18n();

const state = reactive({
	isNavOpen: false,
});

const toggleNav = () => {
	state.isNavOpen = !state.isNavOpen;
};

const localePath = useLocalePath();

import { initDrawers } from 'flowbite';
import { onMounted } from 'vue';

onMounted(() => {
	initDrawers();
});
</script>

<style>
.shine:hover {
	-webkit-box-shadow: 0px 0px 32px 2px rgba(33, 213, 249, 1);
	-moz-box-shadow: 0px 0px 32px 2px rgba(33, 213, 249, 1);
	box-shadow: 0px 0px 32px 2px rgba(33, 213, 249, 1);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateY(-100%);
	color: 1;
}

.slide-enter-to,
.slide-leave-from {
	transform: translateY(0);
	opacity: 1;
}
</style>