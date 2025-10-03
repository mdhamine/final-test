<template>
	<div class="background w-full"></div>
	<div>
		<div class="min-h-screen heroo bg-[#000032] w-screen mt-16 pt-16">
			<div
				class="lg:flex-row flex-col heroo-content place-content-between content-between justify-between w-full"
			>
				<div class="text-start px-8 lg:pl-24 md:pr-12 w-full max-w-4xl">
					<h1
						class="md:text-5xl text-4xl px-4 md:px-0 font-semibold text-[#28CCFF]"
					>
					    {{ $t('abouttitle') }}
						<span class="text-white"> {{ $t('academy') }}</span>
					</h1>
					<p class="py-6 text-white text-start px-8 md:px-0">
						{{ $t('about') }}
						<br />
						<br />
						{{ $t('about2') }}
					</p>
				</div>
				<div
					class="md:p-0 p-2 my-2 flex items-center justify-center min-h-full max-w-screen-2xl w-full px-4 md:px-10 medium:px-6"
				>
					<img
						preload
						loading="lazy"
						src="https://i.ibb.co/xgQsTJc/20944989.jpg"
						format="webp"
						alt=""
						class="w-full lg:w-full rounded-[25px]"
					/>
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
.heroo {
	display: grid;
	width: 100%;
	place-items: center;
	background-size: cover;
	background-position: center;
}
.heroo > * {
	grid-column-start: 1;
	grid-row-start: 1;
}
.heroo-content {
	z-index: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
