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
							<Courses1VideoPlayer
								:toc="false"
								:actived="active - 1"
								:showdetails="false"
								class="mx-auto -mt-28"
							/>
							
							<div>
								<div
									class="flex flex-col justify-between p-5 rounded-2xl w-full h-max pb-0"
								>
									<div class="border-gray-400 border-b">
										<ul
											class="flex flex-nowrap justify-between md:justify-center -mb-px text-sm font-medium text-center text-white"
										>
											<li class="me-2">
												<a
													:href="localePath(`/courses/1`)"
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
													:href="localePath(`/courses/1/games?id=${active}`)"
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
															d="M14.9979 5C18.8639 5 21.9979 8.13401 21.9979 12C21.9979 15.7855 18.9931 18.8691 15.2385 18.9959L14.9979 19H9.00211C5.13611 19 2.00211 15.866 2.00211 12C2.00211 8.21455 5.00689 5.1309 8.76146 5.00406L9.00211 5H14.9979ZM14.75 12.5C14.0596 12.5 13.5 13.0596 13.5 13.75C13.5 14.4404 14.0596 15 14.75 15C15.4403 15 16 14.4404 16 13.75C16 13.0596 15.4403 12.5 14.75 12.5ZM7.99999 9C7.62029 9 7.3065 9.28215 7.25684 9.64823L7.24999 9.75V11.248L5.74999 11.2487C5.33578 11.2487 4.99999 11.5845 4.99999 11.9987C4.99999 12.3784 5.28214 12.6922 5.64822 12.7419L5.74999 12.7487L7.24999 12.748V14.25C7.24999 14.6642 7.58578 15 7.99999 15C8.37969 15 8.69348 14.7178 8.74314 14.3518L8.74999 14.25V12.748L10.25 12.7487C10.6642 12.7487 11 12.413 11 11.9987C11 11.6191 10.7178 11.3053 10.3518 11.2556L10.25 11.2487L8.74999 11.248V9.75C8.74999 9.33579 8.4142 9 7.99999 9ZM16.75 9C16.0596 9 15.5 9.55964 15.5 10.25C15.5 10.9404 16.0596 11.5 16.75 11.5C17.4403 11.5 18 10.9404 18 10.25C18 9.55964 17.4403 9 16.75 9Z"
														/>
													</svg>
													<span class="flex-1 ms-3 whitespace-nowrap">{{
														$t('games')
													}}</span>
												</a>
											</li>
											<li class="me-2">
												<a
													:href="localePath(`/courses/1/quiz?id=${active}`)"
													class="inline-flex items-center justify-center py-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-gray-300 group"
												>
													<svg
														class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white/40 group-hover:text-white"
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
										class="pt-12 pb-2 md:text-5xl text-4xl font-semibold text-[#00004D] text-center mx-auto"
									>
										{{ $t('tryour') }}
										<span class="text-[#00004D]"> {{ $t('games') }}</span
										>!
									</h1>
									<div
										class="flex flex-col lg:gap-4 gap-y-4 text-black h-full min-h-[79vh]"
									>
										<iframe
											style="aspect-ratio: 1 / 1; max-width: 100%"
											:src="quizLink"
											height="75%"
											frameborder="0"
											class="bg-white mx-auto my-auto lg:w-3/4 w-full"
											allowfullscreen
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
															{{ $t('gamess') }}
														</div>
														<div class="text-end">
															{{ $t('difficulty') }}
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
																	'bg-[#000032] text-white ':
																		active - 1 == index,
																	'rounded-b-lg':
																		index == quizzes[locale].length - 1,
																}"
																:href="
																	localePath(`/courses/1/games?id=${index + 1}`)
																"
															>
																<div class="flex space-x-2 xl:space-x-4">
																	<svg
																		class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
																		:class="{
																			'  fill-white': active - 1 == index,
																		}"
																		aria-hidden="true"
																		xmlns="http://www.w3.org/2000/svg"
																		fill="currentColor"
																		viewBox="0 0 24 24"
																	>
																		<path
																			d="M14.9979 5C18.8639 5 21.9979 8.13401 21.9979 12C21.9979 15.7855 18.9931 18.8691 15.2385 18.9959L14.9979 19H9.00211C5.13611 19 2.00211 15.866 2.00211 12C2.00211 8.21455 5.00689 5.1309 8.76146 5.00406L9.00211 5H14.9979ZM14.75 12.5C14.0596 12.5 13.5 13.0596 13.5 13.75C13.5 14.4404 14.0596 15 14.75 15C15.4403 15 16 14.4404 16 13.75C16 13.0596 15.4403 12.5 14.75 12.5ZM7.99999 9C7.62029 9 7.3065 9.28215 7.25684 9.64823L7.24999 9.75V11.248L5.74999 11.2487C5.33578 11.2487 4.99999 11.5845 4.99999 11.9987C4.99999 12.3784 5.28214 12.6922 5.64822 12.7419L5.74999 12.7487L7.24999 12.748V14.25C7.24999 14.6642 7.58578 15 7.99999 15C8.37969 15 8.69348 14.7178 8.74314 14.3518L8.74999 14.25V12.748L10.25 12.7487C10.6642 12.7487 11 12.413 11 11.9987C11 11.6191 10.7178 11.3053 10.3518 11.2556L10.25 11.2487L8.74999 11.248V9.75C8.74999 9.33579 8.4142 9 7.99999 9ZM16.75 9C16.0596 9 15.5 9.55964 15.5 10.25C15.5 10.9404 16.0596 11.5 16.75 11.5C17.4403 11.5 18 10.9404 18 10.25C18 9.55964 17.4403 9 16.75 9Z"
																		/>
																	</svg>
																	<p>{{ item.title }}</p>
																</div>
																<div class="flex space-x-1">
																	<div
																		v-for="x in 3"
																		:key="x"
																		:class="{
																			'text-blue-500': item.difficulty >= x,
																			'text-gray-200': item.difficulty < x,
																		}"
																	>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24"
																			fill="currentColor"
																			class="h-6 w-6"
																		>
																			<path
																				fill-rule="evenodd"
																				d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
																				clip-rule="evenodd"
																			/>
																		</svg>
																	</div>
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
														<p class="font-bold text-blue-800">
															{{ showAll ? 'Show Less' : 'Show All Games' }}
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
const user = useSupabaseUser()
const route = useRoute();


const localePath = useLocalePath();

const quizzes = {
	en: [
		{
			"id": "1",
			"title": "1. Consonant and Vowels",
			"link": "https://wordwall.net/embed/28a84db389ca45a6a43f9559175716f8?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "2",
			"title": "2. Singular Plural Nouns",
			"link": "https://wordwall.net/embed/45d5181cce8c4e3094d0be9e33784c38?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "3",
			"title": "3. A/An",
			"link": "https://wordwall.net/embed/cfc30ec89606403b892044fffced95a7?themeId=1&templateId=2&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "4",
			"title": "4. Subjective Pronouns",
			"link": "https://wordwall.net/embed/f1185095af104b578545ef6be055b383?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "5",
			"title": "5. Subjective Pronouns + Be verb",
			"link": "https://wordwall.net/embed/fda8051e46644e8ea974ebea496e29bb?themeId=1&templateId=36&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "6",
			"title": "6. Subjective Pronouns + Be verb not",
			"link": "https://wordwall.net/embed/0262771b851f4da6a09aadee64c726a0?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "7",
			"title": "7. Be verb questions:",
			"link": "https://wordwall.net/embed/8d5276cd4e2d4d6d8b615305a0121175?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "8",
			"title": "8. Grammar checkup #1 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "9",
			"title": "9. What + Be questions  (No Game)",
			"link": "",
			"difficulty": ""
	    },
		{
			"id": "10",
			"title": "10. This that",
			"link": "https://wordwall.net/embed/0d718b4173f14f5cbc20200fbb65895d?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "11",
			"title": "11. These those",
			"link": "https://wordwall.net/embed/256a7d3f31c741c2a560207af7ffca7b?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "12",
			"title": "12. Possessive adjectives:",
			"link": "https://wordwall.net/embed/63d76921da0747069703ae5586c57eee?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "13",
			"title": "13. Possessive Pronouns",
			"link": "https://wordwall.net/embed/eed8b7a8ddfc48e5ab449bcf0649aaf0?themeId=45&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "14",
			"title": "14. Grammar check up #2 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "15",
			"title": "15. Article + nouns:",
			"link": "https://wordwall.net/embed/7731a4873df54f0c96b11c33bcc47952?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "16",
			"title": "16. Prepositions of time",
			"link": "https://wordwall.net/embed/55a11c20423b4109bb685654c59ceb09?themeId=50&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "17",
			"title": "17. Prepositions of place",
			"link": "https://wordwall.net/embed/61b75842ee4f4f7ca716022c0eb716dc?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "18",
			"title": "18. Adjectives:",
			"link": "https://wordwall.net/embed/0f9504f7efd54f0a86dc66715862fe51?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "19",
			"title": "19. Grammar check up #3 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "20",
			"title": "20. Have/has",
			"link": "https://wordwall.net/embed/cbec1a58b74b4dca8d147ee159aadcde?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "21",
			"title": "21. Do / Does",
			"link": "https://wordwall.net/embed/12f19f8c548f4c09b9a5b5ede85b3766?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "22",
			"title": "22. Don't / Doesn't",
			"link": "https://wordwall.net/embed/d921a307a25748df882bc9194229f3c6?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "23",
			"title": "23. Grammar Check Up #4 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "24",
			"title": "24. Countable and uncountable nouns",
			"link": "https://wordwall.net/embed/d5d9cfee997d4f538e28f5f77a5b85ac?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "25",
			"title": "25. Present Simple",
			"link": "https://wordwall.net/embed/120a396837704425a6823acb9550ca25?themeId=1&templateId=5&fontStackId=",
			"difficulty": "3"
		},
		{
			"id": "26",
			"title": "26. Past simple",
			"link": "https://wordwall.net/embed/41c0ea652ab54c3fb8c15d394c888372?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "27",
			"title": "27. Future simple",
			"link": "https://wordwall.net/embed/1883cd70bbcd4e4e83a073eb892fee50?themeId=43&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			id: '28',
			title: '28. Final quiz (No Game)',
			link: "",
			difficulty: '',
		},	
	],
	ar: [
		{
			"id": "1",
			"title": "1. Consonant and Vowels",
			"link": "https://wordwall.net/embed/28a84db389ca45a6a43f9559175716f8?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "2",
			"title": "2. Singular Plural Nouns",
			"link": "https://wordwall.net/embed/45d5181cce8c4e3094d0be9e33784c38?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "3",
			"title": "3. A/An",
			"link": "https://wordwall.net/embed/cfc30ec89606403b892044fffced95a7?themeId=1&templateId=2&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "4",
			"title": "4. Subjective Pronouns",
			"link": "https://wordwall.net/embed/f1185095af104b578545ef6be055b383?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "5",
			"title": "5. Subjective Pronouns + Be verb",
			"link": "https://wordwall.net/embed/fda8051e46644e8ea974ebea496e29bb?themeId=1&templateId=36&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "6",
			"title": "6. Subjective Pronouns + Be verb not",
			"link": "https://wordwall.net/embed/0262771b851f4da6a09aadee64c726a0?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "7",
			"title": "7. Be verb questions:",
			"link": "https://wordwall.net/embed/8d5276cd4e2d4d6d8b615305a0121175?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "8",
			"title": "8. Grammar checkup #1 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "9",
			"title": "9. What + Be questions  (No Game)",
			"link": "",
			"difficulty": ""
	    },
		{
			"id": "10",
			"title": "10. This that",
			"link": "https://wordwall.net/embed/0d718b4173f14f5cbc20200fbb65895d?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "11",
			"title": "11. These those",
			"link": "https://wordwall.net/embed/256a7d3f31c741c2a560207af7ffca7b?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "12",
			"title": "12. Possessive adjectives:",
			"link": "https://wordwall.net/embed/63d76921da0747069703ae5586c57eee?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "13",
			"title": "13. Possessive Pronouns",
			"link": "https://wordwall.net/embed/eed8b7a8ddfc48e5ab449bcf0649aaf0?themeId=45&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "14",
			"title": "14. Grammar check up #2 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "15",
			"title": "15. Article + nouns:",
			"link": "https://wordwall.net/embed/7731a4873df54f0c96b11c33bcc47952?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "16",
			"title": "16. Prepositions of time",
			"link": "https://wordwall.net/embed/55a11c20423b4109bb685654c59ceb09?themeId=50&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "17",
			"title": "17. Prepositions of place",
			"link": "https://wordwall.net/embed/61b75842ee4f4f7ca716022c0eb716dc?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "18",
			"title": "18. Adjectives:",
			"link": "https://wordwall.net/embed/0f9504f7efd54f0a86dc66715862fe51?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "19",
			"title": "19. Grammar check up #3 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "20",
			"title": "20. Have/has",
			"link": "https://wordwall.net/embed/cbec1a58b74b4dca8d147ee159aadcde?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "21",
			"title": "21. Do / Does",
			"link": "https://wordwall.net/embed/12f19f8c548f4c09b9a5b5ede85b3766?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "22",
			"title": "22. Don't / Doesn't",
			"link": "https://wordwall.net/embed/d921a307a25748df882bc9194229f3c6?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "23",
			"title": "23. Grammar Check Up #4 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "24",
			"title": "24. Countable and uncountable nouns",
			"link": "https://wordwall.net/embed/d5d9cfee997d4f538e28f5f77a5b85ac?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "25",
			"title": "25. Present Simple",
			"link": "https://wordwall.net/embed/120a396837704425a6823acb9550ca25?themeId=1&templateId=5&fontStackId=",
			"difficulty": "3"
		},
		{
			"id": "26",
			"title": "26. Past simple",
			"link": "https://wordwall.net/embed/41c0ea652ab54c3fb8c15d394c888372?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "27",
			"title": "27. Future simple",
			"link": "https://wordwall.net/embed/1883cd70bbcd4e4e83a073eb892fee50?themeId=43&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			id: '28',
			title: '28. Final quiz (No Game)',
			link: "",
			difficulty: '',
		},	
	],
	fr: [
		{
			"id": "1",
			"title": "1. Consonant and Vowels",
			"link": "https://wordwall.net/embed/28a84db389ca45a6a43f9559175716f8?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "2",
			"title": "2. Singular Plural Nouns",
			"link": "https://wordwall.net/embed/45d5181cce8c4e3094d0be9e33784c38?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "3",
			"title": "3. A/An",
			"link": "https://wordwall.net/embed/cfc30ec89606403b892044fffced95a7?themeId=1&templateId=2&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "4",
			"title": "4. Subjective Pronouns",
			"link": "https://wordwall.net/embed/f1185095af104b578545ef6be055b383?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "5",
			"title": "5. Subjective Pronouns + Be verb",
			"link": "https://wordwall.net/embed/fda8051e46644e8ea974ebea496e29bb?themeId=1&templateId=36&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "6",
			"title": "6. Subjective Pronouns + Be verb not",
			"link": "https://wordwall.net/embed/0262771b851f4da6a09aadee64c726a0?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "7",
			"title": "7. Be verb questions:",
			"link": "https://wordwall.net/embed/8d5276cd4e2d4d6d8b615305a0121175?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "8",
			"title": "8. Grammar checkup #1 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "9",
			"title": "9. What + Be questions  (No Game)",
			"link": "",
			"difficulty": ""
	    },
		{
			"id": "10",
			"title": "10. This that",
			"link": "https://wordwall.net/embed/0d718b4173f14f5cbc20200fbb65895d?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "11",
			"title": "11. These those",
			"link": "https://wordwall.net/embed/256a7d3f31c741c2a560207af7ffca7b?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "1"
		},
		{
			"id": "12",
			"title": "12. Possessive adjectives:",
			"link": "https://wordwall.net/embed/63d76921da0747069703ae5586c57eee?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "13",
			"title": "13. Possessive Pronouns",
			"link": "https://wordwall.net/embed/eed8b7a8ddfc48e5ab449bcf0649aaf0?themeId=45&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "14",
			"title": "14. Grammar check up #2 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "15",
			"title": "15. Article + nouns:",
			"link": "https://wordwall.net/embed/7731a4873df54f0c96b11c33bcc47952?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "16",
			"title": "16. Prepositions of time",
			"link": "https://wordwall.net/embed/55a11c20423b4109bb685654c59ceb09?themeId=50&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "17",
			"title": "17. Prepositions of place",
			"link": "https://wordwall.net/embed/61b75842ee4f4f7ca716022c0eb716dc?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "18",
			"title": "18. Adjectives:",
			"link": "https://wordwall.net/embed/0f9504f7efd54f0a86dc66715862fe51?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "19",
			"title": "19. Grammar check up #3 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "20",
			"title": "20. Have/has",
			"link": "https://wordwall.net/embed/cbec1a58b74b4dca8d147ee159aadcde?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "21",
			"title": "21. Do / Does",
			"link": "https://wordwall.net/embed/12f19f8c548f4c09b9a5b5ede85b3766?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "2"
		},
		{
			"id": "22",
			"title": "22. Don't / Doesn't",
			"link": "https://wordwall.net/embed/d921a307a25748df882bc9194229f3c6?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "23",
			"title": "23. Grammar Check Up #4 (No Game)",
			"link": "",
			"difficulty": ""
		},
		{
			"id": "24",
			"title": "24. Countable and uncountable nouns",
			"link": "https://wordwall.net/embed/d5d9cfee997d4f538e28f5f77a5b85ac?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "25",
			"title": "25. Present Simple",
			"link": "https://wordwall.net/embed/120a396837704425a6823acb9550ca25?themeId=1&templateId=5&fontStackId=",
			"difficulty": "3"
		},
		{
			"id": "26",
			"title": "26. Past simple",
			"link": "https://wordwall.net/embed/41c0ea652ab54c3fb8c15d394c888372?themeId=1&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			"id": "27",
			"title": "27. Future simple",
			"link": "https://wordwall.net/embed/1883cd70bbcd4e4e83a073eb892fee50?themeId=43&templateId=5&fontStackId=0",
			"difficulty": "3"
		},
		{
			id: '28',
			title: '28. Final quiz (No Game)',
			link: "",
			difficulty: '',
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