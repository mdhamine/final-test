<template>
	<div class="background w-full"></div>
	<div class="bg-[#000032]">
		<div class="min-h-screen hero">
			<div class="flex-col hero-content lg:flex-row max-w-full mt-20 lg:mt-4">
				<div
					class="sm:mx-auto text-center md:text-start xl:pr-24 md:px-12 basis-1/2"
				>
					<h1
						class="md:text-5xl text-4xl sm:px-4 md:px-0 font-semibold text-white"
					>
						{{ $t('coursetitlefr') }}
					</h1>
					<p class="py-6 text-white px-8 md:px-0">
						{{ $t('coursedescfr') }}
					</p>
					<div
						class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 mb-6 md:justify-items-start justify-items-center xl:pr-24 md:px-0 px-12 mx-auto md:mx-32 lg:mx-auto"
					>
						<a
							aria-label="Sign Up"
							href="#SignUp"
							type="button"
							class="flex items-center justify-center w-auto max-w-full h-full px-6 py-4 lg:px-20 lg:py-2 xl:py-4 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/80 whitespace-nowrap"
						>
							<span class="px-6 text-center">{{ $t('joincourse') }}</span>
						</a>

						<button
							class="bg-transparent h-[60px] w-full flex items-center justify-center px-6 py-3 md:px-12 md:py-2 font-medium text-center text-white rounded-full hover:underline underline-offset-4 decoration-2 text-md decoration-[#2893ff]/30"
							aria-label="Play"
							@click="playVideo"
						>
							<span class="whitespace-nowrap">{{ $t('seevid') }} ></span>
						</button>
					</div>
				</div>
				<div class="flex items-end justify-end min-h-full bg-transparent">
					<iframe
						ref="example"
						src="https://player.vimeo.com/video/990219785?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=0&loop=1"
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
						title="Super"
						class="bg-transparent 2xl:w-[760px] 2xl:h-[440px] xl:w-[590px] xl:h-[332.16px] lg:w-[470px] lg:h-[264px] md:w-[730px] md:h-[410px] sm:w-[510px] sm:h-[287px] medium:w-[392px] medium:h-[221px] smoll:h-[194px] smoll:w-[345px] w-[248px] h-[147px] rounded-lg"
					></iframe>
				</div>
			</div>
		</div>
		<div class="relative flex-col  lg:-mt-52 -mt-10 mx-auto">
			<section class="text-white">
				<div
					class="max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto"
				>
					<div
						class="mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3 items-center justify-evenly"
					>
						<div
							class="flex flex-col items-center gap-1 py-4"
							data-aos="zoom-in-up"
							data-aos-duration="200"
						>
							<span
								class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-blue-100"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
									/>
								</svg>
							</span>
							<h2 class="text-lg font-semibold">{{ $t('coursefeat1fr') }}</h2>
							<p class="text-lg">{{ $t('coursefeat1subfr') }}</p>
						</div>
						<div
							class="flex flex-col items-center gap-1 py-4"
							data-aos="zoom-in-up"
							data-aos-duration="400"
						>
							<span
								class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									class="w-8 h-8 text-blue-100"
									fill="currentColor"
								>
									<path
										d="M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"
									/>
								</svg>
							</span>
							<div
								class="lg:border-l-2 lg:border-r-2 lg:border-blue-300/50 lg:px-10 text-center"
							>
								<h2 class="text-lg font-semibold">{{ $t('coursefeat2fr') }}</h2>
								<p class="text-lg">{{ $t('coursefeat2subfr') }}</p>
							</div>
						</div>
						<div
							class="flex flex-col items-center gap-1 py-4"
							data-aos="zoom-in-up"
							data-aos-duration="600"
						>
							<span
								class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-blue-100"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
									/>
								</svg>
							</span>
							<h2 class="text-lg font-semibold">{{ $t('coursefeat3fr') }}</h2>
							<p class="text-lg">{{ $t('coursefeat3subfr') }}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style>
.background {
	position: absolute;
	top: 0;
	height: 100%;
	left: 0;
	background-image: radial-gradient(
			circle at 99% 50%,
			rgba(69, 112, 255, 0.6) 0,
			transparent 25%
		),
		radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 35%);
	animation: animateBackground 5s infinite;
}

@keyframes animateBackground {
	0% {
		background-position: 99% 50%, 1% 10%;
		opacity: 1;
	}
	25% {
		background-position: 99% 50%, 1% 10%;
		opacity: 1;
	}
	50% {
		background-position: 80% 40%, 50% 30%;
		opacity: 0.5;
	}
	75% {
		background-position: 99% 50%, 1% 10%;
		opacity: 1;
	}
	100% {
		background-position: 99% 50%, 1% 10%;
		opacity: 1;
	}
}

.glowsuper {
	-webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
	-moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
	box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
}
</style>

<script>
import Player from '@vimeo/player';

export default {
	mounted() {
		this.example = new Player(this.$refs.example);
	},
	methods: {
		async playVideo() {
			try {
				await this.example.play();
			} catch (error) {
				console.error('Error playing video:', error);
			}
		},
	},
};
</script>
