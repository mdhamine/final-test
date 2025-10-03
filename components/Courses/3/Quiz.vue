<template>
	<div class="bg-[#000032]">
		<div class="background-wow">
			<CoursesNav />
			<div>
				<div
					class="h-full"
					:class="{ 'min-h-[91vh]': loggedIn, 'min-h-screen': !loggedIn }"
				>
					<div class="mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16">
						
						<div>
							<Courses3VideoPlayer
								:toc="false"
								:actived="active - 1"
								:showdetails="false"
								class="mx-auto -mt-28"
							/>
							<div>
								<div
									class="flex flex-col justify-between p-5 pb-0 rounded-2xl w-full h-max"
								>
									<div class="border-gray-400 border-b">
										<ul
											class="flex flex-nowrap justify-between md:justify-center -mb-px text-sm font-medium text-center text-white"
										>
											<li class="me-2">
												<a
													:href="localePath(`/courses/3`)"
													class="inline-flex items-center justify-center py-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-gray-300 group"
													aria-current="page"
												>
													<svg
														class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white/40 group-hover:text-white"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fill-rule="evenodd"
															d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
															clip-rule="evenodd"
														/>
													</svg>
													<span class="flex-1 ms-3 whitespace-nowrap">{{
														$t('home')
													}}</span>
												</a>
											</li>
										
											<li class="me-2">
												<a
													:href="localePath(`/courses/3/quiz?id=${active}`)"
													class="inline-flex items-center justify-center py-2 md:p-4 text-white border-b-2 border-white rounded-t-lg active group"
												>
													<svg
														class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															fill-rule="evenodd"
															d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clip-rule="evenodd"
														/>
														<path
															d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
														/>
													</svg>
													<span class="flex-1 ms-3 whitespace-nowrap">{{
														$t('quiz')
													}}</span>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div class="background-course">
									<h1
										class="pt-12 pb-2 md:text-5xl text-4xl font-semibold text-[#00004D] md:w-2/3 text-center mx-auto"
									>
										{{ $t('tryour') }}
										<span class="text-[#00004D]">{{ $t('quiz') }}</span
										>!
									</h1>
									<div
										class="flex flex-col lg:gap-4 gap-y-4 text-black h-full min-h-[79vh]"
									>
										<iframe
											:src="quizLink"
											height="75%"
											frameborder="0"
											class="bg-white mx-auto my-auto lg:w-3/4 w-full"
											marginheight="0"
											style="aspect-ratio: 1 / 1"
											marginwidth="0"
											>Loading…</iframe
										>
										<div
											class="relative px-4 pb-4 pt-2 shadow-sm sm:mx-auto sm:max-w-screen-2xl sm:rounded-lg"
										>
											<div
												class="mx-auto w-full md:min-w-[70vh] xl:w-screen sm:max-w-screen-xl"
											>
												<!-- Container -->
												<div class="py-2">
													<!-- Start of lines -->
													<div
														class="flex justify-between pb-4 font-bold text-black"
													>
														<div class="text-md lg:text-md xl:text-xl">
															{{ $t('quizzes') }}
														</div>
														<div class="text-end">
															
														</div>
													</div>
													<div class="relative">
														<div
															class="group"
															v-for="(item, index) in displayedQuizzes"
															:key="item.id"
														>
															<a
																class="flex justify-between rounded-md p-2 text-black space-x-2 group-hover:bg-[#000032]/80 group-hover:text-white"
																:class="{
																	'bg-[#000032] text-white':
																		active - 1 == index,
																	'rounded-b-lg':
																		index == quizzes[locale].length - 1,
																}"
																:href="
																	localePath(`/courses/3/quiz?id=${index + 1}`)
																"
															>
																<div class="flex space-x-2 xl:space-x-4">
																	<svg
																		class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
																		:class="{
																			'fill-white': active - 1 == index,
																		}"
																		aria-hidden="true"
																		xmlns="http://www.w3.org/2000/svg"
																		fill="currentColor"
																		viewBox="0 0 24 24"
																	>
																		<path
																			fill-rule="evenodd"
																			d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
																			clip-rule="evenodd"
																		/>
																		<path
																			d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
																		/>
																	</svg>
																	<p>{{ item.title }}</p>
																</div>
																
															</a>
														</div>
														<!-- gradient -->
														<div
															v-if="!showAll && hasMoreThanSixQuizzes"
															class="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#fafcff] via-[#fafcff]/80 to-transparent"
														></div>
													</div>

													<div
														v-if="hasMoreThanSixQuizzes"
														class="mx-auto flex w-fit space-x-2"
														@click="toggleShowAll"
													>
														<p class="font-bold text-black">
															{{ showAll ? 'Show Less' : 'Show All Quiz' }}
														</p>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															class="size-6 text-black"
															:class="{ 'rotate-180': showAll }"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="m19.5 8.25-7.5 7.5-7.5-7.5"
															/>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { logo } from '~/globalVariables.js';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { locale, setLocale, locales } = useI18n();

const user = useSupabaseClient();
const route = useRoute();

const localePath = useLocalePath();

const quizzes = {
	en: [
		{
		"id": "1",
		"title": "German for Begginers Quiz",
		"link": "https://docs.google.com/forms/d/e/1FAIpQLSe0Exh27lfLFbnsv7rDGl8XebhzZPEEjWgrNdxajPrV_lIceg/viewform?embedded=true",
		"difficulty": "1"
	},
	
	],

	
	
};

const idFromUrl = route.query.id;
const active = ref(Number(idFromUrl) >= 0 ? Number(idFromUrl) : 1);

const quizLink = computed(() => {
	if (quizzes[locale.value]) {
		const quiz = quizzes[locale.value].find(
			(quiz) => quiz.id === idFromUrl.toString()
		);
		return quiz ? quiz.link : '';
	} else {
		return quizzes['en'][0].link;
	}
});

const showAll = ref(false);

const displayedQuizzes = computed(() => {
	const currentLocale = locale.value;
	return showAll.value
		? quizzes[currentLocale]
		: quizzes[currentLocale].slice(0, 6);
});

const hasMoreThanSixQuizzes = computed(() => {
	const currentLocale = locale.value;
	return quizzes[currentLocale].length > 6;
});

function toggleShowAll() {
	showAll.value = !showAll.value;
}
</script>

<style scoped>
.background-wow {
	background-color: #000032;

	background-image: radial-gradient(
			circle at 99% 20%,
			rgba(69, 112, 255, 0.3) 0,
			transparent 15%
		),
		radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 15%);
}

.background-course {
	background-color: #fafcff;
	animation: animateBackgroundtrain 5s infinite;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>
