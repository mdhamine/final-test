<template>
	<MainNavbar />
	<section class="bg-[#123456] hero text-white">
		<div class="hero-content w-full overflow-hidden">
			<ContentDoc
				class="max-w-full px-4 md:px-0"
				:path="'/' + locale + '/tos'"
			/>
		</div>
	</section>
	<MainFooter style="background-color: rgb(18 52 86 / var(--tw-bg-opacity))" />
</template>

<script setup>
const { locale } = useI18n();
</script>
