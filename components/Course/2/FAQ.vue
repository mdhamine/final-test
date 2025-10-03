<template>
	<div class="bg-[#000032]">
		<div class="hero from-[#dae6ff] to-30% to-[#fafcff] bg-gradient-to-t">
			<div
				class="sm:px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
			>
				<div
					class="flex flex-col mb-6 lg:flex-row md:mb-10 mx-auto place-content-center"
				>
					<div class="w-full">
						<h2
							class="mx-auto max-w-md text-center mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none xl:max-w-lg"
						>
							{{ $t('faq') }}
						</h2>
					</div>
				</div>
				<div
					class="flex flex-col items-center justify-center mx-auto pb-6 leading-relaxed w-[280px] sm:w-[400px] md:w-[540px] lg:w-[940px] xl:w-[1024px]"
				>
					<div
						id="accordion-flush"
						data-accordion="collapse"
						data-active-classes="bg-blue-100/30 text-black/70"
						data-inactive-classes="text-black bg-transparent"
						class="min-w-full"
					>
						<h2 id="accordion-flush-heading-1">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-1"
								aria-expanded="true"
								aria-controls="accordion-flush-body-1"
							>
								<span>{{ $t('faq1spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-1"
							class="hidden"
							aria-labelledby="accordion-flush-heading-1"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans1spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-2">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-2"
								aria-expanded="false"
								aria-controls="accordion-flush-body-2"
							>
								<span>{{ $t('faq2spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-2"
							class="hidden"
							aria-labelledby="accordion-flush-heading-2"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans2spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-3">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-3"
								aria-expanded="false"
								aria-controls="accordion-flush-body-3"
							>
								<span>{{ $t('faq3spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-3"
							class="hidden"
							aria-labelledby="accordion-flush-heading-3"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans3spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-4">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-4"
								aria-expanded="true"
								aria-controls="accordion-flush-body-4"
							>
								<span>{{ $t('faq4') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-4"
							class="hidden"
							aria-labelledby="accordion-flush-heading-4"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans4spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-5">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-5"
								aria-expanded="false"
								aria-controls="accordion-flush-body-5"
							>
								<span>{{ $t('faq5spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-5"
							class="hidden"
							aria-labelledby="accordion-flush-heading-5"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans5spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-6">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-6"
								aria-expanded="false"
								aria-controls="accordion-flush-body-6"
							>
								<span>{{ $t('faq6spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-6"
							class="hidden"
							aria-labelledby="accordion-flush-heading-6"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans6spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-7">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-7"
								aria-expanded="true"
								aria-controls="accordion-flush-body-7"
							>
								<span>{{ $t('faq7spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-7"
							class="hidden"
							aria-labelledby="accordion-flush-heading-7"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans7spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-8">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-8"
								aria-expanded="false"
								aria-controls="accordion-flush-body-8"
							>
								<span>{{ $t('faq8spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-8"
							class="hidden"
							aria-labelledby="accordion-flush-heading-8"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans8spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-9">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-9"
								aria-expanded="false"
								aria-controls="accordion-flush-body-9"
							>
								<span>{{ $t('faq9spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-9"
							class="hidden"
							aria-labelledby="accordion-flush-heading-9"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans9spe') }}
								</p>
							</div>
						</div>
						<h2 id="accordion-flush-heading-10">
							<button
								type="button"
								class="flex items-center justify-between w-full py-5 px-2 font-medium rtl:text-right text-black border-b border-blue-200 gap-3 text-lg"
								data-accordion-target="#accordion-flush-body-10"
								aria-expanded="false"
								aria-controls="accordion-flush-body-10"
							>
								<span>{{ $t('faq10spe') }}</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-flush-body-10"
							class="hidden"
							aria-labelledby="accordion-flush-heading-10"
						>
							<div class="py-5 px-2 border-b border-blue-200">
								<p class="mb-2 text-gray-500">
									{{ $t('faqans10spe') }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { initAccordions } from 'flowbite';
import { onMounted } from 'vue';

onMounted(() => {
	initAccordions();
});
</script>