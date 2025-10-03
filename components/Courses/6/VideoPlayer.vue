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
								  v-if="classes[locale][active].file3 && !refreshing"
								  type="button"
								  class="flex flex-col items-center justify-center text-[#000032] bg-transparent hover:bg-[#000032] hover:text-white px-4 py-2 m-2 w-full md:w-1/3 btn btn-outline group rounded-3xl"
								  href="https://t.me/+om5t3NG67qlmYTQ0"
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
"https://dl.dropbox.com/scl/fi/99hvvmjs6wkuahkwz32xv/Certificate-Vintage-Academic-1.pdf?rlkey=56e14xid60rcw367vo5vyvxrt&st=vax8syms&dl=1";
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

		const textSize = 30;
		const textWidth = newAmsterdamFont.widthOfTextAtSize(text, textSize);
		const textHeight = newAmsterdamFont.heightAtSize(textSize);

		const x = (width - textWidth) / 2;
		const y = (height - textHeight) / 1.74;

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
		const dateX = (width - dateTextWidth) / 1.35;
	
		const dateY = y / 1.23; 
		

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
				author: 'Badis Amroune',
				profile: 'https://i.ibb.co/yN00vH1/Badis-photo.jpg',
				position: 'English Instructor',
				en: [
                    {
        title: 'Session 1',
        locked: false,
        duration: '',
        file2: true,
        file3: true,
        file: true,
        file1b: true,
        video: '',
        description: '',
    },
    {
        title: 'Session 2',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 3',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 4',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 5',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 6',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 7',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 8',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 9',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 10',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 11',
        locked: true,
        duration: '',
        video: '',
        description: '',
    },
    {
        title: 'Session 12',
        locked: true,
        duration: '',
        video: '',
        description: '',
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
