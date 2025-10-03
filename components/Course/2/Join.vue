

<template>
	<div class="bg-[#000032]">
		<div
			class="hero from-[#dae6ff] to-30% to-[#fafcff] bg-gradient-to-b rounded-t-[50px] py-20 py-20"
		>
			<div
				class="flex-col-reverse mb-6 lg:flex-row-reverse hero-content xl:-mt-32 lg:-mt-14 lg:mx-8 mx-auto xl:mx-auto background-wompity"
			>
				<div
					class="grid w-[75%] grid-cols-1 place-content-center place-items-center"
				>
					<img
						class="object-cover rounded-lg md:h-2/4"
						alt=""
						loading="lazy"
						src="https://i.ibb.co/gjYt3xw/IPHONE-KLHJLKHJ-1.png"
					/>
				</div>
				<div class="w-full py-8 lg:pr-20 lg:pt-6 lg:mt-6">
					<h1
						class="pb-6 pt-8 md:text-5xl mt-6 text-4xl font-semibold text-black md:w-2/3 text-center mx-auto lg:mx-0 lg:text-start"
					>
						{{ $t('coursejoin_headspe') }}
					</h1>
					<p
						class="font-normal text-md text-black text-center lg:text-start mx-auto"
					>
						{{ $t('coursejoin_descspe') }}
					</p>
					<div
						class="py-16 lg:py-20 flex justify-center lg:justify-start mx-auto"
					>
						<a
							aria-label="Sign Up"
							href="#SignUp"
							type="button"
							class="py-3 px-6 md:py-4 font-normal text-center shine text-white bg-[#2893ff]/80 border border-[#2893ff] rounded-full text-lg hover:bg-[#2893ff]/40"
						>
							{{ $t('joincourse') }}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<style>
@media only screen and (max-width: 500px) {
	.background-wompity {
		background-color: #fafcff;
		background-image: radial-gradient(
				at 99% 50%,
				rgba(69, 112, 255, 0.4) 0,
				transparent 65%
			),
			radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
		animation: animateBackgroundtrain 5s infinite;
	}
}

.background-mission {
	background-color: #000032;
}
</style>