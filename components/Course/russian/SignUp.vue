<template>
	<div class="hero background-signup">
		<div
			class="flex-col-reverse mb-4 lg:flex-row-reverse hero-content max-w-screen-2xl"
		>
			<CalendlyInlineWidget
				v-bind="options"
				style="
					overflow: hidden !important;
					background-color: #00000000 !important;
					min-width: 200px;
				"
				class="mb-32 background-signup h-full w-full min-w-[200px] sm:min-w-[300px]"
			/>
			<div class="w-full py-10 sm:px-4">
				<h1
					class="text-5xl font-bold leading-normal text-white lg:mr-6"
					:class="{
						'text-center': $i18n.locale === 'ar',
						'text-left': $i18n.locale === 'en',
					}"
				>
					{{ $t('signup1') }}
					<span class="text-[#28CCFF]">{{ $t('ecom') }}</span>
					{{ $t('signup2') }}
				</h1>
				<div
					class="py-6 text-white"
					:class="{
						'text-center': $i18n.locale === 'ar',
						'text-left': $i18n.locale === 'en',
					}"
				>
					<p class="py-3 text-white">
						{{ $t('signupdesc') }}
					</p>
					<ul
						class="list-inside list-disc"
						:class="{
							rtl: $i18n.locale === 'ar',
							ltr: $i18n.locale === 'en',
						}"
					>
						<li>{{ $t('signupbull1') }}</li>
						<li>{{ $t('signupbull2') }}</li>
						<li>{{ $t('signupbull3') }}</li>
					</ul>
				</div>

				<CalendlyPopupButton
					v-bind="options"
					:root-element="rootElement"
					class="px-3 py-3 md:px-6 md:py-3 font-medium mx-auto lg:mx-0 block text-center shine text-white bg-[#000032] border-2 border-[#2893ff] rounded-full text-md max-w-sm sm:max-w-md"
				/>
			</div>
		</div>
	</div>
	<div ref="rootElement" />
</template>

<style>
.background-signup {
	background-color: #000032;
}

.rtl {
	direction: rtl;
}
.ltr {
	direction: ltr;
}
</style>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const rootElement = ref(null);

const options = computed(() => ({
	url: 'https://calendly.com/fluentlymeeting/15min?hide_gdpr_banner=1&primary_color=28ccff',
	text: t('appointment'),
}));
</script>