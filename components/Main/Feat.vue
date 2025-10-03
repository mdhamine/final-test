<template>
	<div class="bg-[#000032] -mt-1">
		<div class="z-10">
			<div
				class="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
			>
				<div class="flex flex-col mb-6 lg:flex-row md:mb-10 mx-auto">
					<div class="lg:w-1/2">
						<h2
							class="lg:text-start text-center max-w-md mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none xl:max-w-lg"
						>
							{{ $t('feattitle') }}
						</h2>
					</div>
				</div>
				<div
					class="grid gap-6 gap-y-10 grid-cols-1 lg:grid-cols-3 auto-rows-fr pb-6 place-content-center mx-auto place-items-center"
				>
					<div class="group mx-8" data-aos="zoom-in-up" data-aos-duration="400">
						<div
							class="flex flex-col justify-between p-5 ring ring-cyan-200 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-cyan-400 h-[400px] md:h-[340px]  lg:h-[390px] xl:h-[340px] w-full max-w-[280px] md:max-w-[326px]"
						>
							<div>
								<div
									class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-200"
								>
									<svg
										class="w-10 h-10 text-[#000032]"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											fill-rule="evenodd"
											d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-white text-2xl py-4"
								>
									{{ $t('feat1') }}
								</h6>
								<p class="mb-3 text-md text-white">
									{{ $t('feat1desc') }}
								</p>
							</div>
						</div>
					</div>
					<div class="group mx-8" data-aos="zoom-in-up" data-aos-duration="600">
						<div
							class="flex flex-col justify-between p-5 ring ring-cyan-200 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-cyan-400 h-[400px] md:h-[340px]  lg:h-[390px] xl:h-[340px] max-w-[280px] md:max-w-[326px]"
						>
							<div>
								<div
									class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-200"
								>
									<svg
										class="w-10 h-10 text-[#000032]"
										stroke="currentColor"
										viewBox="0 0 576 512"
									>
										<path
											d="M384 64c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v96c0 17.7-14.3 32-32 32H320v96c0 17.7-14.3 32-32 32H192v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V320c0-17.7 14.3-32 32-32h96V192c0-17.7 14.3-32 32-32h96V64z"
										/>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-white text-2xl py-4"
								>
									{{ $t('feat2') }}
								</h6>
								<p class="mb-3 text-md text-white">
									{{ $t('feat2desc') }}
								</p>
							</div>
						</div>
					</div>
					<div class="group mx-8" data-aos="zoom-in-up" data-aos-duration="800">
						<div
							class="flex flex-col justify-between p-5 ring ring-cyan-200 rounded-2xl shadow-sm group-hover:scale-105 group-hover:ring-cyan-400 h-[400px] md:h-[340px] lg:h-[390px] xl:h-[340px]  max-w-[280px] md:max-w-[326px]"
						>
							<div>
								<div
									class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-200"
								>
									<svg
										class="w-10 h-10 text-[#000032]"
										stroke="currentColor"
										viewBox="0 0 448 512"
									>
										<path
											d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
										/>
									</svg>
								</div>
								<h6
									class="mb-2 font-semibold leading-5 text-white text-2xl py-4"
								>
									{{ $t('feat3') }}
								</h6>
								<p class="mb-3 text-md text-white">
									{{ $t('feat3desc') }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center my-6">
					<a
						aria-label="Training"
						href="#Training"
						type="button"
						class="px-6 py-1 md:px-12 md:py-2 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/80"
					>
						{{ $t('ourtraining') }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>