<template>
	<div class="background w-full"></div>
	<div>
		<div class="min-h-screen heroo bg-[#000032] w-screen mt-12">
			<div
				class="lg:flex-row flex-col heroo-content place-content-between content-between justify-between lg:gap-48 w-full"
			>
				<div
					class="text-start xl:pr-24 lg:px-24 md:px-12 w-full lg:w-2/3 pt-16 md:pt-auto"
				>
					<h1
						class="md:text-5xl text-4xl px-8 md:px-0 font-semibold text-white text-start"
					>
						{{ $t('rectitle') }}
					</h1>
					<p
						class="py-6 text-white px-8 md:px-0 lg:w-4/5 text-start text-align"
					>
						{{ $t('recdesc') }}
					</p>
				</div>
				<div
					class="xl:p-0 p-8 flex items-center justify-center min-h-full max-w-screen-2xl w-full"
				>
					<NuxtImg
						preload
						loading="lazy"
						src="https://i.ibb.co/Q63qfn1/image.png"
						format="webp"
						alt=""
						class="w-full lg:w-full rounded-md lg:rounded-e-none lg:rounded-s-[25px]"
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
