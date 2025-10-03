<template>
	<div class="bg-[#000032] -mt-32">
		<div
			class="from-[#dae6ff] from-5% to-[#fafcff] bg-gradient-to-t rounded-b-[50px]"
		>
			<div
				class="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
			>
				<div
					class="flex flex-col mb-6 lg:flex-row md:mb-10 mx-auto place-content-center"
				>
					<div class="lg:w-1/2">
						<h2
							class="mx-auto max-w-md text-center mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none xl:max-w-lg"
						>
							{{ $t('coursefeattitlejap') }}
						</h2>
					</div>
				</div>
				<div
					class="grid gap-y-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr pb-6 place-content-center mx-auto place-items-center leading-relaxed"
				>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="400"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="duoicon duoicon-rocket w-12 h-12"
										style="color: rgb(59, 130, 246)"
									>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="m18.165 2.765.255.032c.674.093 1.566.218 2.071.724.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426-.424 2.613-1.815 5.731-5.308 8.145-.019.188-.02.378-.016.568l.01.284c.016.437.032.873-.09 1.298-.19.66-.867 1.095-1.5 1.407l-.31.147-.4.176c-.748.318-1.758.644-2.391.01-.38-.379-.536-.935-.663-1.488l-.047-.207a7.643 7.643 0 0 0-.2-.774c-.05-.146-.104-.295-.162-.445a3.323 3.323 0 0 1-.203.225c-.345.345-.86.586-1.284.755-.463.183-.987.343-1.472.475l-.249.066-.477.119-.432.1-.517.11-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431.154-.698.124-.51.094-.36c.132-.484.292-1.008.476-1.47.168-.425.409-.94.754-1.285l.08-.077-.064-.026a7.926 7.926 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898-.56-.559-.371-1.41-.101-2.118l.11-.274.177-.4.147-.31c.312-.632.747-1.309 1.407-1.499.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006 2.414-3.494 5.532-4.885 8.145-5.309a11.777 11.777 0 0 1 3.171-.088Z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M15.536 8.466c-1.088-1.089-2.948-.591-3.346.896a2 2 0 0 0 .517 1.932c1.088 1.089 2.948.591 3.346-.896a2 2 0 0 0-.517-1.932ZM8.353 15.44a1 1 0 0 0-1.1-.06l-.11.074-.093.083-.125.158c-.26.376-.408.896-.523 1.382l-.108.468-.051.213.191-.046.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094-.024-.023-.094-.08Z"
											class="duoicon-primary-layer"
										></path>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat1titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat1descjap') }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="600"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="w-12 h-12 duoicon duoicon-smartphone-vibration"
										style="color: rgb(59, 130, 246)"
									>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="m15.535 2.808 5.657 5.656a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-5.657-5.658a2 2 0 0 1 0-2.828l9.9-9.9a2 2 0 0 1 2.828 0v.001Z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M8.464 2.808a1 1 0 0 1 0 1.414L4.222 8.464A1 1 0 1 1 2.807 7.05L7.05 2.808a1 1 0 0 1 1.414 0Zm.354 10.96-.707.707a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0Zm12.374 1.768a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 1 1-1.415-1.414l4.243-4.242a1 1 0 0 1 1.414 0Z"
											class="duoicon-primary-layer"
										></path>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat2titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat2descjap') }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="800"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="duoicon duoicon-fire duoicon-primary:text-blue-500 w-12 h-12"
									>
										<path
											fill="currentColor"
											d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
											class="duoicon-primary-layer"
										></path>
										<path
											fill="currentColor"
											d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat3titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat3descjap') }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="800"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="duoicon duoicon-smartwatch w-12 h-12"
										style="color: rgb(59, 130, 246)"
									>
										<path
											fill="currentColor"
											d="M9.5 2a2 2 0 0 0-2 2v1.29C7.963 5.104 8.47 5 9 5h6a4 4 0 0 1 1.5.29V4a2 2 0 0 0-2-2h-5ZM9 19a4 4 0 0 1-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29A4 4 0 0 1 15 19H9Z"
											class="duoicon-primary-layer"
										></path>
										<path
											fill="currentColor"
											d="M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1V9a3 3 0 0 0-3-3H9Z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat4titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat4descjap') }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="800"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="duoicon duoicon-user-cardd w-12 h-12"
										style="color: rgb(59, 130, 246)"
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
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat5titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat5descjap') }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="group mx-8 flex flex-col min-h-[380px] cardd"
						data-aos="zoom-in-up"
						data-aos-duration="800"
					>
						<div
							class="cardd-content flex flex-col justify-between p-5 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-blue-400 sm:w-[325px] w-[280px] sm:h-[385px]"
						>
							<div>
								<div class="flex items-start justify-start py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="duoicon duoicon-approved w-12 h-12"
										style="color: rgb(59, 130, 246)"
									>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127 1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686l1.9-1.9Z"
											class="duoicon-secondary-layer"
											opacity=".3"
										></path>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="m15.079 8.983-4.244 4.244-1.768-1.768a1 1 0 1 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414Z"
											class="duoicon-primary-layer"
										></path>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-black text-xl pb-4"
								>
									{{ $t('coursefeat6titlejap') }}
								</h6>
								<p class="mb-3 text-md text-black">
									{{ $t('coursefeat6descjap') }}
								</p>
							</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.cardd {
	min-height: 380px;
}

.cardd-content {
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-radius: 1.5rem;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	width: 325px;
	height: 385px;
	transition: transform 0.3s, box-shadow 0.3s;
	@apply ring ring-blue-200;
}

.group-hover\:ring-blue-400:hover {
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
		var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0
		calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
		var(--tw-shadow, 0 0 #0000);
	--tw-ring-opacity: 1;
	--tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity)) /* #76a9fa */;
	transform: scale(1.05);
}

@media (max-width: 640px) {
	.cardd-content {
		width: 280px;
	}
}

.bg-border {
	border-bottom-left-radius: 50px;
	border-bottom-right-radius: 50px;
	border-bottom: 50px;
}

.duoicon .duoicon-primary-layer {
	color: #3b82f6;
}

.duoicon .duoicon-secondary-layer {
	opacity: 1;
	color: #b0c9f2;
}
</style>