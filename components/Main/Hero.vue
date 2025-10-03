<template>
	<div class="background w-full"></div>
	<div>
		<div class="min-h-screen hero bg-[#000032]">
			<div class="flex-col hero-content lg:flex-row max-w-full">
				<div
					class="text-center md:text-start mt-16 sm:mx-16 lg:mx-auto lg:mt-0 xl:pr-24 md:px-10"
				>
					<h1
						class="md:text-5xl text-4xl sm:px-4 md:px-0 font-semibold text-white"
					>
						{{ $t('title') }}
						<span class="text-[#28CCFF]">{{ $t('title2') }}</span>
					</h1>
					<p class="py-6 text-white px-8 md:px-0">
						{{ $t('desc') }}
					</p>

					<div
						class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 mb-6 md:justify-items-start justify-items-center xl:pr-24 md:px-0 px-12 mx-auto lg:mx-auto"
					>
						<a
							aria-label="Training"
							href="#Training"
							type="button"
							class="flex items-center justify-center h-[60px] px-8 py-4 sm:px-10 lg:px-20 lg:py-4 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/8"
						>
							<span>{{ $t('explore') }}</span>
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
				<div class="flex items-center justify-center min-h-full bg-transparent">
					<iframe
						ref="example"
						src="https://player.vimeo.com/video/974370707?badge=0&amp;autopause=1&amp;player_id=0&amp;app_id=58479&loop=1"
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
						title="Super"
						class="bg-transparent 2xl:w-[760px] 2xl:h-[440px] xl:w-[590px] xl:h-[332.16px] lg:w-[470px] lg:h-[264px] md:w-[730px] md:h-[410px] sm:w-[510px] sm:h-[287px] medium:w-[392px] medium:h-[221px] smoll:h-[194px] smoll:w-[345px] w-[247px] h-[139px] rounded-lg"
					></iframe>
				</div>
			</div>
		</div>
		<div class="relative flex-col hidden 2xl:flex -mt-52">
			<hr
				class="w-6 h-1 mx-auto my-4 mt-16 border-0 rounded gradient-bar thin-section glow md:my-10"
			/>
			<div class="relative p-8 overflow-auto rounded-xl">
				<div class="flex justify-center">
					<a
						aria-label="Start"
						href="#start"
						class="flex items-center justify-center w-10 h-10 p-2 rounded-full shadow-lg animate-bounce bg-slate-800 ring-1 ring-slate-200/20"
					>
						<svg
							class="w-6 h-6 text-sky-500"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
						</svg>
					</a>
				</div>
			</div>
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

.glow {
	-webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
	-moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
	box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
}

.btn-hover {
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 600;
	color: #fff;
	cursor: pointer;
	height: 55px;
	text-align: center;
	border: none;
	background-size: 300% 100%;

	border-radius: 50px;
	moz-transition: all 0.4s ease-in-out;
	-o-transition: all 0.4s ease-in-out;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
	background-position: 99% 0;
	moz-transition: all 0.4s ease-in-out;
	-o-transition: all 0.4s ease-in-out;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
	outline: none;
}

.btn-hover.color-2 {
	background-image: linear-gradient(
		to right,
		#25aae1,
		#4481eb,
		#21d5f9,
		#3f86ed
	);
	box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}

.thin-section {
	width: 100%;
	background-image: radial-gradient(
		circle,
		#21d5f9,
		#21d5f9 33%,
		rgba(0, 107, 255, 0)
	);
	padding-top: 1px;
	padding-bottom: 1px;
	overflow: hidden;
}

.thin-section.not-as-thin {
	background-image: none;
	padding-top: 35px;
	padding-bottom: 35px;
}

.thin-section.no-space {
	width: 100%;
	max-width: 100%;
	display: flex;
}

.thin-section.gradient-bar {
	width: 100%;
	max-width: 100%;
	align-items: center;
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