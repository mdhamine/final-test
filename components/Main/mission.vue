
<template>
	<div id="start" class="hero background-mission -mt-8">
		<HumbleScroll animation="fade up">
			<div class="flex-col-reverse my-4 lg:flex-row hero-content">
				<div class="grid grid-cols-1 gap-2 lg:w-1/2 test p-4">
					<img
						class="object-cover rounded-lg h-full w-full"
						alt=""
						loading="lazy"
						src="https://i.ibb.co/RCHwyLX/20944999.jpg"
					/>
				</div>
				<div class="w-full py-6 lg:w-1/3 lg:pl-20">
					<h1
						class="pb-6 md:text-5xl text-4xl text-center lg:text-start font-semibold text-white"
					>
						{{ $t('our') }}
						<span class="text-[#28CCFF]">{{ $t('mission') }}</span>
					</h1>
					<p class="font-normal text-md text-white">
						{{ $t('mission_desc') }}
					</p>
				</div>
			</div>
		</HumbleScroll>
	</div>
</template>

<style>
.background-mission {
	background-color: #000032;
}

.test {
	position: relative;
}

.test:after {
	position: absolute;
	bottom: 0;
	height: 100%;
	width: 100%;
	content: '';
	background: linear-gradient(
		to top,
		rgb(0, 0, 50) 20%,
		rgba(255, 255, 255, 0) 100%
	);
	pointer-events: none; /* so the text is still selectable */
}
</style>