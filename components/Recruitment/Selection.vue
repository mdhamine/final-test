<template>
	<div class="bg-[#000032]">
		<div class="bg-[#fafcff]">
			<div
				class="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-8 lg:pt-16"
			>
				<div
					class="flex flex-col lg:flex-row md:mb-10 mx-auto place-content-center"
				>
					<div class="lg:w-1/2">
						<h2
							class="mx-auto max-w-md text-center mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none xl:max-w-xl"
						>
							{{ $t('ouroffers') }}
						</h2>
					</div>
				</div>
			</div>
			<div
				class="colfortat place-content-start mx-auto place-items-start leading-relaxed bg-[#dae6ff] h-[2900px] overflow-y-auto"
			>
				<div class="w-full bg-[#fafcff]">
					<div class="flex flex-col md:mb-10 mx-auto place-content-center">
						<p
							class="mx-auto max-w-md text-center mb-6 font-sans text-md text-black leading-relaxed"
						>
							{{ $t('apply1') }}
						</p>
						<p
							class="mx-auto max-w-md text-center mb-6 font-sans text-md text-black leading-relaxed"
						>
							{{ $t('apply2') }}
						</p>
					</div>
				</div>

				<iframe
					id="JotFormIFrame-241433683061452"
					title="Appointment Request Form"
					:src="formUrl"
					frameborder="0"
					style="min-width: 100%; max-width: 100%; height: 600%; border: none"
					scrolling="yes"
				/>
			</div>
			<div
				class="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-16"
			></div>
		</div>
	</div>
</template>

<style>
.alerts {
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	gap: 1rem;
	text-align: center;
	border-radius: var(--rounded-box, 1rem);
	border-width: 0;
	padding: 1rem /* 16px */;
	color: black;
	background-color: transparent;
}
@media (min-width: 640px) {
	.alerts {
		flex-direction: row;
		text-align: start;
	}
}

.colfortat {
	height: 600px;
	overflow-y: auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: auto;
	gap: 1rem;
	padding-bottom: 6rem;
	place-content: start;
	place-items: start;
	background-color: #dae6ff;
}
</style>

<script setup>
let formUrl = 'https://form.jotform.com/241435626508558';

useHead({
	script: [
		{
			src: 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js',
			async: true,
		},
		{
			innerHTML: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-241433683061452']", "${formUrl}")`,
		},
	],
	__dangerouslyDisableSanitizersByTagID: {
		'jotform-script': ['innerHTML'],
	},
});
</script>