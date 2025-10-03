<template>
	<div class="hero min-h-screen background-train">
		<LoginNavbar />
		<div class="hero-content text-center">
			<div class="max-w-screen-2xl">
				<h1 class="text-5xl font-bold text-black pb-10 mt-16">
					{{ $t('hello') }}  <span class="text-[#28CCFF]">{{ username }}, &nbsp;</span>
					&nbsp; {{ $t('choosecourse') }}
				</h1> 
				<div
					class="grid gap-4 gap-y-8 text-white md:grid-cols-2 xl:gap-16"
				>
					<a
						aria-label="Course"
						:href="localePath('/courses/1')"
						class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
						data-aos="zoom-in-up"
						data-aos-duration="600"
					>
						<figure
							class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
						>
							<img
								class="w-full h-full overflow-visible object-cover h-auto"
								loading="lazy"
								src="https://i.ibb.co/jZy2Pfx/Photo-younes-Anglais-copy.jpg"
								alt="Album"
							/>
						</figure>
						<div
							class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
						>
							<div class="badge bg-white font-thin text-[#28CCFF]">
								{{ $t('training_badge1') }}
							</div>
							<h2 class="card-title text-white">{{ $t('training_title1') }}</h2>
							<p class="text-white">
								{{ $t('training_desc1') }}
							</p>
							<div class="card-actions justify-start lg:justify-end">
								<button
									class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
								>
									{{ $t('training_learnmore') }}
								</button>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { locale, setLocale, locales } = useI18n();

const localePath = useLocalePath();
</script>

<script>
export default {
	data() {
		return { username: 'dumb' };
	},
};
</script>

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
</style>