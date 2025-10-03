<template>
	<div class="grid grid-rows-1 gap-0 h-full">
		<div
			class="items-strech justify-center rounded mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16"
		>
			<div class="grid grid-cols-1 gap-4 h-full">
				<iframe
					ref="example"
					:src="classes[locale][active].video"
					:id="'video-' +  active"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
					:title="classes[locale][active].title"
					class="mx-auto my-auto 3xl:w-[1600px] 3xl:h-[900px] 2xl:w-[1334px] 2xl:h-[660px] xl:w-[965px] xl:h-[543px] lg:w-[637px] lg:h-[360px] md:w-[538px] md:h-[302px] sm:w-[510px] sm:h-[287px] w-[284px] h-[160px] medium:w-[391px] medium:h-[220px] smoll:h-[194px] smoll:w-[345px] rounded-lg"
					width="100%"
					height="100%"
				></iframe>
				<div
					class="flex flex-col justify-between group-hover:scale-105 w-full h-max"
					v-show="showdetails"
				>
					<div class="border-gray-400 border-b p-5 pb-0">
						<ul
							class="flex flex-nowrap justify-between md:justify-center -mb-px text-sm font-medium text-center text-white"
						>
							<li class="me-2">
								<a
									:href="localePath(`/courses/1`)"
									class="inline-flex items-center justify-center py-2 md:p-4 text-white border-b-2 border-white rounded-t-lg active group"
									aria-current="page"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white"
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
									:href="localePath(`/courses/1/games?id=${active + 1}`)"
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
									:href="localePath(`/courses/1/quiz?id=${active + 1}`)"
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
					<div class="background-course">
						<div class="overflow-auto border-b p-5 pt-12">
							<h6 class="mb-2 font-semibold leading-5 text-black text-2xl py-4">
								{{ classes[locale][active].title }}
							</h6>
							<div class="relative">
								<p class="mb-3 text-md text-black p-4 rounded-md">
									{{ desc(classes[locale][active].description) }}
								</p>
							</div>
							<div
								class="flex justify-end items-end mb-4 pr-4 px-5"
								@click="toggleShowAllDesc"
							>
								<p class="font-bold text-blue-800 cursor-pointer">
									{{ showAllDesc ? 'Show Less' : 'Show All' }}
								</p>
							</div>

							<div
								class="flex flex-col md:flex-row pt-4 mx-auto items-center justify-center"
							>
								<button
									v-if="classes[locale][active].file && refreshing"
									class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="animate-spin"
									>
										<path d="M12 2v4" />
										<path d="m16.2 7.8 2.9-2.9" />
										<path d="M18 12h4" />
										<path d="m16.2 16.2 2.9 2.9" />
										<path d="M12 18v4" />
										<path d="m4.9 19.1 2.9-2.9" />
										<path d="M2 12h4" />
										<path d="m4.9 4.9 2.9 2.9" />
									</svg>
								</button>
								<div class="flex flex-col md:flex-row justify-center md:justify-between w-full px-4 lg:px-60">
									<button
										v-if="classes[locale][active].file && !refreshing"
										class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
										@click="editAndDownloadPDF"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-7 h-7 transition duration-200 text-[#000032] group-hover:text-white"
											fill="currentColor"
											viewBox="0 -960 960 960"
										>
											<path
												d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
											/>
										</svg>
										<span class="ms-3 whitespace-nowrap font-bold text-lg">
											Download Certificate !
										</span>
									</button>
									<a
										v-if="classes[locale][active].file1b && !refreshing"
										class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
										href="https://docs.google.com/forms/d/e/1FAIpQLScYO_nUFUkXwylCAe7DS4kv-dwuf-gtG1voOh3C3V_rpokc8g/viewform?usp=send_form"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-7 h-7 transition duration-200 text-[#000032] group-hover:text-white"
											fill="currentColor"
											viewBox="0 0 100 100"
										>
										    <path d="M87,67.4c-1.7,4.4-6,7.3-10.7,7.3H44.8L20,90.8c-0.4,0.4-0.9,0.6-1.5,0.6c-0.3,0-0.6-0.1-0.8-0.2c-0.8-0.3-1.3-1.1-1.3-2  V74.7h-5.3c-6.4,0-11.5-5.2-11.5-11.5V28.3c0-6.4,5.2-11.5,11.5-11.5h35.1c1.2,0,2.1,1,2.1,2.1s-1,2.1-2.1,2.1H19.2  c-4,0-7.3,3.3-7.3,7.3v34.9c0,4,3.3,7.3,7.3,7.3h7.4c1.2,0,2.1,1,2.1,2.1v11.7l13.8-13.2c0.4-0.4,0.9-0.6,1.5-0.6h32.4  c3,0,5.7-1.9,6.8-4.6c0.4-1.1,1.7-1.6,2.8-1.2C86.9,65.1,87.5,66.3,87,67.4z M92.4,34.1c0,0.1,0,0.2,0,0.3l-3.1,19.5  c-0.6,5-4.2,7.9-9.6,7.9H56.8c-2.2,0-4.1-0.8-5.6-2.2c-0.7,0.5-1.5,0.8-2.4,0.8h-7.7c-2.2,0-4-1.8-4-4V32.3c0-2.2,1.8-4,4-4h7.7  c1.2,0,2.2,0.5,2.9,1.3c0.8-0.2,8.3-2.6,8.3-9.2v-9.3c0-0.9,0.6-1.7,1.5-2c0.5-0.2,5-1.5,8.5,1.1c2.2,1.6,3.4,4.4,3.4,8.2v7.5h10.7  C88.7,25.9,92.4,29.6,92.4,34.1z M48.6,32.6h-7.1v23.6h7.1V32.6z M88.1,34c-0.1-2.1-1.8-3.8-4-3.8H71.3c-1.2,0-2.1-1-2.1-2.1v-9.6  c0-2.3-0.5-3.9-1.6-4.7c-0.9-0.7-2.2-0.8-3.2-0.7v7.6c0,10-10.9,13.1-11.4,13.3c0,0,0,0,0,0v19.9c0,2.2,1.8,4,4,4h22.8  c4.9,0,5.3-3.2,5.4-4.2c0,0,0,0,0-0.1L88.1,34z"/>
										</svg>
										<span class="ms-3 whitespace-nowrap font-bold text-lg">
										Leave your Feedback !
										</span>
									</a>
								</div>								
							</div>
							<div class="flex flex-col md:flex-row justify-center md:justify-between w-full px-4 lg:px-60">
								<a
								  v-if="classes[locale][active].file2 && !refreshing"
								  type="button"
								  class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
								  href="https://t.me/+nMGg7KtO3CIzMGM0"
								>
								  <svg
									class="w-7 h-7 transition duration-200 text-[#000032] group-hover:fill-white"
									hover-white
									xmlns="http://www.w3.org/2000/svg"
									width="100"
									viewBox="0 0 32 32"
								  >
								    <path d="m16 .5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zm7.613 10.619-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"/>

								  </svg>
								  <span class="ms-3 whitespace-nowrap font-bold text-lg">
									Join Our Channel !
								  </span>
								</a>
								<a
								  v-if="classes[locale][active].file3 && !refreshing"
								  type="button"
								  class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
								  href="https://t.me/+PgNlgIDqXAs0ZGE0"
								>
								    <svg
										class="w-7 h-7 transition duration-200 text-[#000032] group-hover:text-white"
										xmlns="http://www.w3.org/2000/svg"
										width="100"
										viewBox="0 0 24 24"
																					
							        >
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447Z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M12 9c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 9Zm1.5 5h-3a2.5 2.5 0 0 0-2.495 2.336L8 16.5v.5a1 1 0 0 0 1.993.117L10 17v-.5a.5.5 0 0 1 .41-.492L10.5 16h3a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L16 17v-.5a2.5 2.5 0 0 0-2.336-2.495L13.5 14Z"
											class="duoicon-primary-layer"
										></path>
							        </svg>
								  <span class="ms-3 whitespace-nowrap font-bold text-lg">
									Join Our Community !
								  </span>
								</a>
							</div>
						</div>

						<div class="p-5 border-b">
							<div class="flex-row gap-4 flex justify-start items-center">
								<div class="flex-shrink-0">
									<a href="#" class="relative block">
										<img
											alt="profil"
											:src="classes.profile"
											class="mx-auto object-cover rounded-full h-16 w-16"
										/>
									</a>
								</div>
								<div class="flex flex-col">
									<span class="text-lg font-medium text-gray-600">
										{{ classes.author }}
									</span>
									<span class="text-xs text-gray-400">
										{{ classes.position }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="items-center justify-center rounded background-course"
			v-show="toc"
		>
			<div
				class="mt-2 relative px-4 pb-4 pt-2 shadow-sm sm:mx-auto sm:max-w-screen-2xl sm:rounded-lg"
			>
				<div class="mx-auto w-full">
					<!-- Container -->
					<div class="py-2">
						<!-- Start of lines -->
						<div class="flex justify-between pb-4 font-bold text-black">
							<div class="text-md lg:text-md xl:text-xl">
								{{ $t('classes') }}
							</div>
							<div class="text-end">
								{{ classes.length }} {{ $t('lessons') }}
							</div>
						</div>
						<div class="relative">
							<div class="group" v-for="(item, index) in displayedClasses">
								<a
									class="flex justify-between rounded-md p-2 text-black space-x-2 group-hover:bg-[#000032]/80 group-hover:text-white scroll-smooth"
									:class="{
										'bg-[#000032] text-white ': active == index,
										'rounded-b-lg': index == classes.length - 1,
									}"
									@click="setActive(index)"
									:href="'#video-' + index"
								>
									<div class="flex space-x-2 xl:space-x-4">
										<svg
											v-if="!item.locked"
											class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
											:class="{ 'fill-white': active == index }"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 89 89"
										>
										    <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 62.251 46.633 L 37.789 60.756 c -1.258 0.726 -2.829 -0.181 -2.829 -1.633 V 30.877 c 0 -1.452 1.572 -2.36 2.829 -1.634 l 24.461 14.123 C 63.508 44.092 63.508 45.907 62.251 46.633 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />

										</svg>
										<svg
											v-else
											class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
											:class="{ '  fill-white': active == index }"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 89 89"
										>
										    <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 62.251 46.633 L 37.789 60.756 c -1.258 0.726 -2.829 -0.181 -2.829 -1.633 V 30.877 c 0 -1.452 1.572 -2.36 2.829 -1.634 l 24.461 14.123 C 63.508 44.092 63.508 45.907 62.251 46.633 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />

										</svg>
										<p>{{ index + 1 }} . {{ item.title }}</p>
									</div>
									<p>{{ item.duration }}</p>
								</a>
							</div>
							<!-- gradient -->
							<div
								v-if="!showAll"
								class="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#fafcff] via-[#fafcff]/80 to-transparent"
							></div>
						</div>

						<div class="mx-auto flex w-fit space-x-2" @click="toggleShowAll">
							<p class="font-bold text-black">
								{{ showAll ? 'Show Less' : 'Show All Lessons' }}
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
</template>


<script setup>
import { ref } from 'vue';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

const { locale, setLocale, locales } = useI18n();
const refreshing = ref(false);
const user = useSupabaseUser();

const existingPdfUrl =
"https://dl.dropbox.com/scl/fi/w9niruccezcskgog1obeb/Certificat-Fluently.pdf?rlkey=jqq7flfr80hp9w04yg6v2q7d5&st=grof9tjd&dl=1";
const fontPath = '/Italianno-Regular.ttf';

const loadFont = async (fontPath) => {
	const fontResponse = await fetch(fontPath);
	const fontBytes = await fontResponse.arrayBuffer();
	return fontBytes;
};

const getTextWidth = (text, fontSize) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${fontSize}px sans-serif`;
    return context.measureText(text).width;
};

const insertCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
    return currentDate.replace(/\//g, ' / '); // Format as "DD / MM / YYYY"
};

const editAndDownloadPDF = async () => {
	refreshing.value = true;
	try {
		const existingPdfBytes = await fetch(existingPdfUrl).then((res) =>
			res.arrayBuffer()
		);

		const pdfDoc = await PDFDocument.load(existingPdfBytes);

		pdfDoc.registerFontkit(fontkit);

		const fontBytes = await loadFont(fontPath);
		const newAmsterdamFont = await pdfDoc.embedFont(fontBytes);

		const pages = pdfDoc.getPages();
		const firstPage = pages[0];

		const userName = user.value?.user_metadata?.first_name;
		const userName2 = user.value?.user_metadata?.last_name;
		const text = `${userName} ${userName2}`;

		const { width, height } = firstPage.getSize();

		const textSize = 45;
		const textWidth = newAmsterdamFont.widthOfTextAtSize(text, textSize);
		const textHeight = newAmsterdamFont.heightAtSize(textSize);

		const x = (width - textWidth) / 2;
		const y = (height - textHeight) / 1.8;

		firstPage.drawText(text, {
			x,
			y,
			size: textSize,
			font: newAmsterdamFont,
			color: rgb(0.00784, 0.05490, 0.18039),
		});  

		const dateText = insertCurrentDate();
		const dateTextSize = 15; 
		const dateTextWidth = getTextWidth(dateText, dateTextSize);
		
		const dateX = (width - textWidth) / 1.4;
		const dateY = (height - textHeight) / 2.02;
		
		firstPage.drawText(dateText, {
			x: dateX,
			y: dateY,
			size: dateTextSize,
			font: newAmsterdamFont,
			color: rgb(0.00784, 0.05490, 0.18039),
		});  


		const pdfBytes = await pdfDoc.save();

		const blob = new Blob([pdfBytes], { type: 'application/pdf' });
		const link = document.createElement('a');

		link.href = URL.createObjectURL(blob);
		link.download = 'Fluently_Certificate.pdf';

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		console.log('PDF downloaded successfully!');
		refreshing.value = false;
	} catch (error) {
		console.error('Error editing and downloading PDF:', error);
		refreshing.value = false;
	}
};
</script>
t>



<script>
export default {
	props: {
		actived: {
			type: Number,
			required: false,
		},
		toc: {
			type: Boolean,
			default: true,
		},
		showdetails: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		displayedClasses() {
			const locale = this.$i18n.locale;
			return this.showAll
				? this.classes[locale]
				: this.classes[locale].slice(0, 6);
		},
	},
	methods: {
		async setActive(index) {
			this.active = index;
		},
		toggleShowAll() {
			this.showAll = !this.showAll;
		},
		toggleShowAllDesc() {
			this.showAllDesc = !this.showAllDesc;
		},
		desc(description) {
			if (this.showAllDesc) {
				return description;
			} else {
				let truncatedDescription = description.slice(0, 380);
				let lastSpaceIndex = truncatedDescription.lastIndexOf(' ');

				if (lastSpaceIndex === -1) {
					return truncatedDescription + '...';
				} else {
					return truncatedDescription.slice(0, lastSpaceIndex) + '...';
				}
			}
		},
	},

	data() {
		return {
			showAll: false,
			showAllDesc: false,
			active: this.actived ? this.actived : 0,
			classes: {
				author: 'Aithamou Younes',
				profile: 'https://i.ibb.co/sHrxS43/16-B2-A239-B91-C-40-A-A9-B-69632-D67-F.png',
				position: 'Founder & English Instructor',
				en: [
					{
						title: 'Introduction video',
						locked: false,
						duration: '1:28',
						file2: true,
						file3: true,
						video:
							'https://player.vimeo.com/video/981598083?h=14b90b3de2&title=0&byline=0&portrait=0',

						description:
							'Welcome to the Grammar Masterclass! This introductory video will outline the structure of the course, key learning objectives, and how you can make the most of the lessons.',
					},
					{
						title: '5 mistakes I made while learning English',
						locked: true,
						duration: '16:10',
						video:
							'https://player.vimeo.com/video/982105400?h=00324489fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'The best study program for learning English',
						locked: true,
						duration: '7:42',
						video:
							'https://player.vimeo.com/video/982046123?h=46bb8b7633&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'Consonants and vowels',
						locked: true,
						duration: '6:41',
						video:
							'https://player.vimeo.com/video/982052557?h=325bec6ff6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
						{
						title: 'A / An nouns',
						locked: true,
						duration: '6:05',
						video:
							'https://player.vimeo.com/video/982059796?h=1534ac9577&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Understand when and how to use the articles "a" and "an" with nouns. This lesson will help you grasp the nuances of article usage in different contexts.',
					},
					{
						title: 'Singular + Plural nouns',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/981610823?h=fa0536b736&title=0&byline=0&portrait=0',

						description:
							'Master the rules for transforming singular nouns into their plural forms, including regular and irregular nouns, to enhance your grammatical accuracy',
					},
					{
						title: ' Subjective pronouns',
						locked: true,
						duration: '7:02',
						video:
							'https://player.vimeo.com/video/981605556?h=b877e3fd7a ',

						description:
							'Learn about subjective pronouns, their usage, and their importance in sentence structure. Enhance your ability to identify and correctly use them in sentences.',
					},
					{
						title: 'Subjective pronouns + Be verb',
						locked: true,
						duration: '6:38',
						video:
							' https://player.vimeo.com/video/981607289?h=aa1e5383e3',

						description:
							'Combine subjective pronouns with the verb "to be" to form simple yet essential sentences. This lesson focuses on present tense constructions',
					},
					{
						title: 'Subjective pronouns + Be verb + Not',
						locked: true,
						duration: '2:48',
						video:
							'https://player.vimeo.com/video/982213752?h=26ef8c6361&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Expand your knowledge by adding negation to sentences with subjective pronouns and the verb "to be." Practice forming negative statements effectively.',
					},
					{
						title: 'Be Verb questions',
						locked: true,
						duration: '6:48',
						video:
							' https://player.vimeo.com/video/982056599?h=b1956c63b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Develop your skills in forming questions using the verb "to be." Learn how to structure and use these questions in various conversational contexts.',
					},
					{
						title: 'Grammar check up #1',
						locked: true,
						duration: '5:43',
						video:
							'https://player.vimeo.com/video/981613725?h=45bade44f2 ',

						description:
							"Review and reinforce what you've learned so far with a comprehensive grammar check-up. This will help solidify your understanding and identify areas for improvement.",
					},
					{
						title: 'What + Be questions',
						locked: true,
						duration: '3:59',
						video:
							'https://player.vimeo.com/video/981624197?h=46ab132062&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Explore how to ask questions using "what" combined with the verb "to be." This lesson will enhance your ability to seek information and clarify meaning',
					},
					{
						title: 'This / That',
						locked: true,
						duration: '2:14',
						video:
							' https://player.vimeo.com/video/981627036?h=5210598758&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Differentiate between \"this\" and \"that\" to accurately refer to objects or people near or far. Practice using these demonstrative pronouns in context.",
					},
					{
						title: 'These / Those',
						locked: true,
						duration: '4:30',
						video:
							'https://player.vimeo.com/video/981630446?h=32d32d7f4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Similar to the previous lesson, but focused on the plural forms \"these\" and \"those.\" Gain confidence in referring to multiple items correctly.",
					},
					{
						title: 'Possessive Adjectives',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/982088744?h=cb6226e298&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn to use possessive adjectives to show ownership and relationships. This lesson covers words like \"my,\" \"your,\" \"his,\" \"her,\" \"our,\" and \"their.\"",
					},
					{
						title: 'Possessive Pronouns',
						locked: true,
						duration: '6:02',
						video:
							' https://player.vimeo.com/video/982085552?h=6e4306293c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Delve into possessive pronouns and their usage to replace nouns. Understand how to correctly use \"mine,\" \"yours,\" \"his,\" \"hers,\" \"ours,\" and \"theirs.\"",
					},
					{
						title: 'Grammar check up #2',
						locked: true,
						duration: '6:58',
						video:
							'https://player.vimeo.com/video/981615450?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							' Another opportunity to review and assess your progress. This check-up will focus on the lessons covered since the first check-up.',
					},
					{
						title: 'Articles + nouns',
						locked: true,
						duration: '5:14',
						video:
							'https://player.vimeo.com/video/982063152?h=7ff98db830&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							' Expand your understanding of article usage with various nouns. This lesson will cover definite and indefinite articles in greater detail.',
					},
					{
						title: 'Prepositions of place',
						locked: true,
						duration: '4:52',
						video:
							' https://player.vimeo.com/video/982048785?h=9c70d760d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn to use prepositions of place such as \"in,\" \"on,\" \"at,\" \"under,\" and more. Enhance your ability to describe locations accurately.",
					},
					{
						title: 'Prepositions of time',
						locked: true,
						duration: '4:26',
						video:
							'https://player.vimeo.com/video/982050747?h=477d3c77b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Master prepositions of time like \"before,\" \"after,\" \"during,\" and \"until.\" Improve your ability to discuss events and schedules clearly.",
					},
					{
						title: 'Adjective (beginner level)',
						locked: true,
						duration: '3:34',
						video:
							' https://player.vimeo.com/video/982066344?h=cd04cfdb38&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the basics of using adjectives to describe nouns. This lesson will cover common adjectives and their correct placement in sentences',
					},
					{
						title: 'Grammar check up #3',
						locked: true,
						duration: '6:22',
						video:
							' https://player.vimeo.com/video/981618412?h=72be30d16a&title=0&byline=0&portrait=0',

						description:
							' Conduct another review session to reinforce your learning and identify any areas needing additional practice',
					},
					{
						title: 'Have / Has',
						locked: true,
						duration: "4:06",
						video:
							' https://player.vimeo.com/video/982100610?h=a2267cabc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Understand the correct usage of \"have\" and \"has\" in sentences. Learn to form both positive and negative statements using these verbs.",
					},
					{
						title: 'Do / Does have questions',
						locked: true,
						duration: '4:13',
						video:
							'https://player.vimeo.com/video/982074997?h=8120af2222&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Focus on forming affirmative questions with \"do\" and \"does have.\" Improve your ability to seek information effectively.",
					},
					{
						title: 'Grammar check up #4',
						locked: true,
						duration: '4:16',
						video:
							' https://player.vimeo.com/video/981617335?h=b0b00502d3',

						description:
							"Another comprehensive review to solidify your understanding and ensure you're on track with the course material.",
					},
					{
						title: 'Many / Much',
						locked: true,
						duration: '4:04',
						video:
							'https://player.vimeo.com/video/982078382?h=0c7daf098d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn the difference between \"Many\" and \"Much\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Few / Less',
						locked: true,
						duration: '1:20',
						video:
							'https://player.vimeo.com/video/982111976?h=eb7fba6ce3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn the difference between \"Few\" and \"Less\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Present simple',
						locked: true,
						duration: '4:56',
						video:
							' https://player.vimeo.com/video/981630719?h=60035056e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Master the present simple tense to describe habitual actions, general truths, and routines. Practice forming and using this tense effectively',
					},
					{
						title: 'Past simple',
						locked: true,
						duration: '5:24',
						video:
							'https://player.vimeo.com/video/982041988?h=e2bd10c669&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Learn to use the past simple tense to talk about completed actions and events in the past. Understand regular and irregular verb forms.',
					},
					{
						title: 'Future simple',
						locked: true,
						duration: '2:37',
						video:
							' https://player.vimeo.com/video/982069813?h=90fc8c0a2b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover how to express future intentions, predictions, and plans using the future simple tense. Practice forming sentences in this tense',
					},
					{
						title: 'Final Quiz',
						locked: true,
						duration: '1:01',
						video:
							'https://player.vimeo.com/video/982071933?h=e260b08490&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							'Test your overall understanding of the course material with a comprehensive final quiz. This will help you evaluate your progress and readiness.',
					},
					{
						title: 'Ending Course',
						locked: true,
						duration: '1:33',
						file: true,
						file1b: true,
						video:
							' https://player.vimeo.com/video/982073247?h=461a7897c4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Conclude the Grammar Masterclass with a summary of key takeaways and additional resources for continued learning. Celebrate your achievements and plan your next steps.',
					},
				],
				ar: [
					{
						title: 'Introduction video',
						locked: false,
						duration: '1:28',
						file2: true,
						file3: true,
						video:
							'https://player.vimeo.com/video/981598083?h=14b90b3de2&title=0&byline=0&portrait=0',

						description:
							'Welcome to the Grammar Masterclass! This introductory video will outline the structure of the course, key learning objectives, and how you can make the most of the lessons.',
					},
					{
						title: '5 mistakes I made while learning English',
						locked: true,
						duration: '16:10',
						video:
							'https://player.vimeo.com/video/982105400?h=00324489fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'The best study program for learning English',
						locked: true,
						duration: '7:42',
						video:
							'https://player.vimeo.com/video/982046123?h=46bb8b7633&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'Consonants and vowels',
						locked: true,
						duration: '6:41',
						video:
							'https://player.vimeo.com/video/982052557?h=325bec6ff6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
						{
						title: 'A / An nouns',
						locked: true,
						duration: '6:05',
						video:
							'https://player.vimeo.com/video/982059796?h=1534ac9577&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Understand when and how to use the articles "a" and "an" with nouns. This lesson will help you grasp the nuances of article usage in different contexts.',
					},
					{
						title: 'Singular + Plural nouns',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/981610823?h=fa0536b736&title=0&byline=0&portrait=0',

						description:
							'Master the rules for transforming singular nouns into their plural forms, including regular and irregular nouns, to enhance your grammatical accuracy',
					},
					{
						title: ' Subjective pronouns',
						locked: true,
						duration: '7:02',
						video:
							'https://player.vimeo.com/video/981605556?h=b877e3fd7a ',

						description:
							'Learn about subjective pronouns, their usage, and their importance in sentence structure. Enhance your ability to identify and correctly use them in sentences.',
					},
					{
						title: 'Subjective pronouns + Be verb',
						locked: true,
						duration: '6:38',
						video:
							' https://player.vimeo.com/video/981607289?h=aa1e5383e3',

						description:
							'Combine subjective pronouns with the verb "to be" to form simple yet essential sentences. This lesson focuses on present tense constructions',
					},
					{
						title: 'Subjective pronouns + Be verb + Not',
						locked: true,
						duration: '2:48',
						video:
							'https://player.vimeo.com/video/982213752?h=26ef8c6361&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Expand your knowledge by adding negation to sentences with subjective pronouns and the verb "to be." Practice forming negative statements effectively.',
					},
					{
						title: 'Be Verb questions',
						locked: true,
						duration: '6:48',
						video:
							' https://player.vimeo.com/video/982056599?h=b1956c63b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Develop your skills in forming questions using the verb "to be." Learn how to structure and use these questions in various conversational contexts.',
					},
					{
						title: 'Grammar check up #1',
						locked: true,
						duration: '5:43',
						video:
							'https://player.vimeo.com/video/981613725?h=45bade44f2 ',

						description:
							"Review and reinforce what you've learned so far with a comprehensive grammar check-up. This will help solidify your understanding and identify areas for improvement.",
					},
					{
						title: 'What + Be questions',
						locked: true,
						duration: '3:59',
						video:
							'https://player.vimeo.com/video/981624197?h=46ab132062&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Explore how to ask questions using "what" combined with the verb "to be." This lesson will enhance your ability to seek information and clarify meaning',
					},
					{
						title: 'This / That',
						locked: true,
						duration: '2:14',
						video:
							' https://player.vimeo.com/video/981627036?h=5210598758&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Differentiate between \"this\" and \"that\" to accurately refer to objects or people near or far. Practice using these demonstrative pronouns in context.",
					},
					{
						title: 'These / Those',
						locked: true,
						duration: '4:30',
						video:
							'https://player.vimeo.com/video/981630446?h=32d32d7f4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Similar to the previous lesson, but focused on the plural forms \"these\" and \"those.\" Gain confidence in referring to multiple items correctly.",
					},
					{
						title: 'Possessive Adjectives',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/982088744?h=cb6226e298&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn to use possessive adjectives to show ownership and relationships. This lesson covers words like \"my,\" \"your,\" \"his,\" \"her,\" \"our,\" and \"their.\"",
					},
					{
						title: 'Possessive Pronouns',
						locked: true,
						duration: '6:02',
						video:
							' https://player.vimeo.com/video/982085552?h=6e4306293c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Delve into possessive pronouns and their usage to replace nouns. Understand how to correctly use \"mine,\" \"yours,\" \"his,\" \"hers,\" \"ours,\" and \"theirs.\"",
					},
					{
						title: 'Grammar check up #2',
						locked: true,
						duration: '6:58',
						video:
							'https://player.vimeo.com/video/981615450?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							' Another opportunity to review and assess your progress. This check-up will focus on the lessons covered since the first check-up.',
					},
					{
						title: 'Articles + nouns',
						locked: true,
						duration: '5:14',
						video:
							'https://player.vimeo.com/video/982063152?h=7ff98db830&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							' Expand your understanding of article usage with various nouns. This lesson will cover definite and indefinite articles in greater detail.',
					},
					{
						title: 'Prepositions of place',
						locked: true,
						duration: '4:52',
						video:
							' https://player.vimeo.com/video/982048785?h=9c70d760d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn to use prepositions of place such as \"in,\" \"on,\" \"at,\" \"under,\" and more. Enhance your ability to describe locations accurately.",
					},
					{
						title: 'Prepositions of time',
						locked: true,
						duration: '4:26',
						video:
							'https://player.vimeo.com/video/982050747?h=477d3c77b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Master prepositions of time like \"before,\" \"after,\" \"during,\" and \"until.\" Improve your ability to discuss events and schedules clearly.",
					},
					{
						title: 'Adjective (beginner level)',
						locked: true,
						duration: '3:34',
						video:
							' https://player.vimeo.com/video/982066344?h=cd04cfdb38&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the basics of using adjectives to describe nouns. This lesson will cover common adjectives and their correct placement in sentences',
					},
					{
						title: 'Grammar check up #3',
						locked: true,
						duration: '6:22',
						video:
							' https://player.vimeo.com/video/981618412?h=72be30d16a&title=0&byline=0&portrait=0',

						description:
							' Conduct another review session to reinforce your learning and identify any areas needing additional practice',
					},
					{
						title: 'Have / Has',
						locked: true,
						duration: "4:06",
						video:
							' https://player.vimeo.com/video/982100610?h=a2267cabc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Understand the correct usage of \"have\" and \"has\" in sentences. Learn to form both positive and negative statements using these verbs.",
					},
					{
						title: 'Do / Does have questions',
						locked: true,
						duration: '4:13',
						video:
							'https://player.vimeo.com/video/982074997?h=8120af2222&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Focus on forming affirmative questions with \"do\" and \"does have.\" Improve your ability to seek information effectively.",
					},
					{
						title: 'Grammar check up #4',
						locked: true,
						duration: '4:16',
						video:
							' https://player.vimeo.com/video/981617335?h=b0b00502d3',

						description:
							"Another comprehensive review to solidify your understanding and ensure you're on track with the course material.",
					},
					{
						title: 'Many / Much',
						locked: true,
						duration: '4:04',
						video:
							'https://player.vimeo.com/video/982078382?h=0c7daf098d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn the difference between \"Many\" and \"Much\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Few / Less',
						locked: true,
						duration: '1:20',
						video:
							'https://player.vimeo.com/video/982111976?h=eb7fba6ce3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn the difference between \"Few\" and \"Less\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Present simple',
						locked: true,
						duration: '4:56',
						video:
							' https://player.vimeo.com/video/981630719?h=60035056e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Master the present simple tense to describe habitual actions, general truths, and routines. Practice forming and using this tense effectively',
					},
					{
						title: 'Past simple',
						locked: true,
						duration: '5:24',
						video:
							'https://player.vimeo.com/video/982041988?h=e2bd10c669&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Learn to use the past simple tense to talk about completed actions and events in the past. Understand regular and irregular verb forms.',
					},
					{
						title: 'Future simple',
						locked: true,
						duration: '2:37',
						video:
							' https://player.vimeo.com/video/982069813?h=90fc8c0a2b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover how to express future intentions, predictions, and plans using the future simple tense. Practice forming sentences in this tense',
					},
					{
						title: 'Final Quiz',
						locked: true,
						duration: '1:01',
						video:
							'https://player.vimeo.com/video/982071933?h=e260b08490&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							'Test your overall understanding of the course material with a comprehensive final quiz. This will help you evaluate your progress and readiness.',
					},
					{
						title: 'Ending Course',
						locked: true,
						duration: '1:33',
						file: true,
						file1b: true,
						video:
							' https://player.vimeo.com/video/982073247?h=461a7897c4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Conclude the Grammar Masterclass with a summary of key takeaways and additional resources for continued learning. Celebrate your achievements and plan your next steps.',
					},
				],
				fr: [
					{
						title: 'Introduction video',
						locked: false,
						duration: '1:28',
						file2: true,
						file3: true,
						video:
							'https://player.vimeo.com/video/981598083?h=14b90b3de2&title=0&byline=0&portrait=0',

						description:
							'Welcome to the Grammar Masterclass! This introductory video will outline the structure of the course, key learning objectives, and how you can make the most of the lessons.',
					},
					{
						title: '5 mistakes I made while learning English',
						locked: true,
						duration: '16:10',
						video:
							'https://player.vimeo.com/video/982105400?h=00324489fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'The best study program for learning English',
						locked: true,
						duration: '7:42',
						video:
							'https://player.vimeo.com/video/982046123?h=46bb8b7633&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
					{
						title: 'Consonants and vowels',
						locked: true,
						duration: '6:41',
						video:
							'https://player.vimeo.com/video/982052557?h=325bec6ff6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the fundamental building blocks of English pronunciation. Learn to distinguish between consonants and vowels and understand their roles in word formation.',
					},
						{
						title: 'A / An nouns',
						locked: true,
						duration: '6:05',
						video:
							'https://player.vimeo.com/video/982059796?h=1534ac9577&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Understand when and how to use the articles "a" and "an" with nouns. This lesson will help you grasp the nuances of article usage in different contexts.',
					},
					{
						title: 'Singular + Plural nouns',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/981610823?h=fa0536b736&title=0&byline=0&portrait=0',

						description:
							'Master the rules for transforming singular nouns into their plural forms, including regular and irregular nouns, to enhance your grammatical accuracy',
					},
					{
						title: ' Subjective pronouns',
						locked: true,
						duration: '7:02',
						video:
							'https://player.vimeo.com/video/981605556?h=b877e3fd7a ',

						description:
							'Learn about subjective pronouns, their usage, and their importance in sentence structure. Enhance your ability to identify and correctly use them in sentences.',
					},
					{
						title: 'Subjective pronouns + Be verb',
						locked: true,
						duration: '6:38',
						video:
							' https://player.vimeo.com/video/981607289?h=aa1e5383e3',

						description:
							'Combine subjective pronouns with the verb "to be" to form simple yet essential sentences. This lesson focuses on present tense constructions',
					},
					{
						title: 'Subjective pronouns + Be verb + Not',
						locked: true,
						duration: '2:48',
						video:
							'https://player.vimeo.com/video/982213752?h=26ef8c6361&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Expand your knowledge by adding negation to sentences with subjective pronouns and the verb "to be." Practice forming negative statements effectively.',
					},
					{
						title: 'Be Verb questions',
						locked: true,
						duration: '6:48',
						video:
							' https://player.vimeo.com/video/982056599?h=b1956c63b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Develop your skills in forming questions using the verb "to be." Learn how to structure and use these questions in various conversational contexts.',
					},
					{
						title: 'Grammar check up #1',
						locked: true,
						duration: '5:43',
						video:
							'https://player.vimeo.com/video/981613725?h=45bade44f2 ',

						description:
							"Review and reinforce what you've learned so far with a comprehensive grammar check-up. This will help solidify your understanding and identify areas for improvement.",
					},
					{
						title: 'What + Be questions',
						locked: true,
						duration: '3:59',
						video:
							'https://player.vimeo.com/video/981624197?h=46ab132062&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Explore how to ask questions using "what" combined with the verb "to be." This lesson will enhance your ability to seek information and clarify meaning',
					},
					{
						title: 'This / That',
						locked: true,
						duration: '2:14',
						video:
							' https://player.vimeo.com/video/981627036?h=5210598758&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Differentiate between \"this\" and \"that\" to accurately refer to objects or people near or far. Practice using these demonstrative pronouns in context.",
					},
					{
						title: 'These / Those',
						locked: true,
						duration: '4:30',
						video:
							'https://player.vimeo.com/video/981630446?h=32d32d7f4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Similar to the previous lesson, but focused on the plural forms \"these\" and \"those.\" Gain confidence in referring to multiple items correctly.",
					},
					{
						title: 'Possessive Adjectives',
						locked: true,
						duration: '6:33',
						video:
							'https://player.vimeo.com/video/982088744?h=cb6226e298&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn to use possessive adjectives to show ownership and relationships. This lesson covers words like \"my,\" \"your,\" \"his,\" \"her,\" \"our,\" and \"their.\"",
					},
					{
						title: 'Possessive Pronouns',
						locked: true,
						duration: '6:02',
						video:
							' https://player.vimeo.com/video/982085552?h=6e4306293c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Delve into possessive pronouns and their usage to replace nouns. Understand how to correctly use \"mine,\" \"yours,\" \"his,\" \"hers,\" \"ours,\" and \"theirs.\"",
					},
					{
						title: 'Grammar check up #2',
						locked: true,
						duration: '6:58',
						video:
							'https://player.vimeo.com/video/981615450?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							' Another opportunity to review and assess your progress. This check-up will focus on the lessons covered since the first check-up.',
					},
					{
						title: 'Articles + nouns',
						locked: true,
						duration: '5:14',
						video:
							'https://player.vimeo.com/video/982063152?h=7ff98db830&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							' Expand your understanding of article usage with various nouns. This lesson will cover definite and indefinite articles in greater detail.',
					},
					{
						title: 'Prepositions of place',
						locked: true,
						duration: '4:52',
						video:
							' https://player.vimeo.com/video/982048785?h=9c70d760d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn to use prepositions of place such as \"in,\" \"on,\" \"at,\" \"under,\" and more. Enhance your ability to describe locations accurately.",
					},
					{
						title: 'Prepositions of time',
						locked: true,
						duration: '4:26',
						video:
							'https://player.vimeo.com/video/982050747?h=477d3c77b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Master prepositions of time like \"before,\" \"after,\" \"during,\" and \"until.\" Improve your ability to discuss events and schedules clearly.",
					},
					{
						title: 'Adjective (beginner level)',
						locked: true,
						duration: '3:34',
						video:
							' https://player.vimeo.com/video/982066344?h=cd04cfdb38&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover the basics of using adjectives to describe nouns. This lesson will cover common adjectives and their correct placement in sentences',
					},
					{
						title: 'Grammar check up #3',
						locked: true,
						duration: '6:22',
						video:
							' https://player.vimeo.com/video/981618412?h=72be30d16a&title=0&byline=0&portrait=0',

						description:
							' Conduct another review session to reinforce your learning and identify any areas needing additional practice',
					},
					{
						title: 'Have / Has',
						locked: true,
						duration: "4:06",
						video:
							' https://player.vimeo.com/video/982100610?h=a2267cabc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Understand the correct usage of \"have\" and \"has\" in sentences. Learn to form both positive and negative statements using these verbs.",
					},
					{
						title: 'Do / Does have questions',
						locked: true,
						duration: '4:13',
						video:
							'https://player.vimeo.com/video/982074997?h=8120af2222&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Focus on forming affirmative questions with \"do\" and \"does have.\" Improve your ability to seek information effectively.",
					},
					{
						title: 'Grammar check up #4',
						locked: true,
						duration: '4:16',
						video:
							' https://player.vimeo.com/video/981617335?h=b0b00502d3',

						description:
							"Another comprehensive review to solidify your understanding and ensure you're on track with the course material.",
					},
					{
						title: 'Many / Much',
						locked: true,
						duration: '4:04',
						video:
							'https://player.vimeo.com/video/982078382?h=0c7daf098d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							"Learn the difference between \"Many\" and \"Much\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Few / Less',
						locked: true,
						duration: '1:20',
						video:
							'https://player.vimeo.com/video/982111976?h=eb7fba6ce3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							"Learn the difference between \"Few\" and \"Less\" and when to use each. This lesson will help you describe quantities more accurately.",
					},
					{
						title: 'Present simple',
						locked: true,
						duration: '4:56',
						video:
							' https://player.vimeo.com/video/981630719?h=60035056e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Master the present simple tense to describe habitual actions, general truths, and routines. Practice forming and using this tense effectively',
					},
					{
						title: 'Past simple',
						locked: true,
						duration: '5:24',
						video:
							'https://player.vimeo.com/video/982041988?h=e2bd10c669&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Learn to use the past simple tense to talk about completed actions and events in the past. Understand regular and irregular verb forms.',
					},
					{
						title: 'Future simple',
						locked: true,
						duration: '2:37',
						video:
							' https://player.vimeo.com/video/982069813?h=90fc8c0a2b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Discover how to express future intentions, predictions, and plans using the future simple tense. Practice forming sentences in this tense',
					},
					{
						title: 'Final Quiz',
						locked: true,
						duration: '1:01',
						video:
							'https://player.vimeo.com/video/982071933?h=e260b08490&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ',

						description:
							'Test your overall understanding of the course material with a comprehensive final quiz. This will help you evaluate your progress and readiness.',
					},
					{
						title: 'Ending Course',
						locked: true,
						duration: '1:33',
						file: true,
						file1b: true,
						video:
							' https://player.vimeo.com/video/982073247?h=461a7897c4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

						description:
							'Conclude the Grammar Masterclass with a summary of key takeaways and additional resources for continued learning. Celebrate your achievements and plan your next steps.',
					},
				],
			},
		};
	},
};
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
.glow {
	-webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
	-moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
	box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
}
</style>
