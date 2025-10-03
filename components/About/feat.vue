<template>
	<section class="py-16 bg-[rgb(242,247,255)]">
		<section class="m-4 md:m-8">
			<div class="container mx-auto p-4 my-6 space-y-2 text-center">
				<p class="text-5xl font-semibold text-[#000032]">{{ $t('values') }}</p>
			</div>
			<div
				class="container mx-auto grid justify-center gap-x-6 gap-y-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 max-w-screen-xl"
			>
				<div class="flex flex-col items-start p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="size-14 my-2 text-blue-300"
					>
						<path
							fill-rule="evenodd"
							d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
							clip-rule="evenodd"
						></path>
					</svg>
					<h3 class="my-3 text-3xl font-medium text-[#000032]">
						{{ $t('freedom') }}
					</h3>
					<div class="space-y-1 text-black w-full lg:w-3/4">
						<p>
							{{ $t('freedomdesc') }}
						</p>
					</div>
				</div>
				<div class="flex flex-col items-start p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-14 my-2 text-blue-300"
					>
						<path
							fill-rule="evenodd"
							d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
							clip-rule="evenodd"
						/>
					</svg>

					<h3 class="my-3 text-3xl font-medium text-[#000032]">
						{{ $t('improvement') }}
					</h3>
					<div class="space-y-1 text-black w-full lg:w-3/4">
						<p>
							{{ $t('improvementdesc') }}
						</p>
					</div>
				</div>
				<div class="flex flex-col items-start p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-14 my-2 text-blue-300"
					>
						<path
							d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"
						/>
						<path
							fill-rule="evenodd"
							d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
							clip-rule="evenodd"
						/>
					</svg>

					<h3 class="my-3 text-3xl font-medium text-[#000032]">
						{{ $t('inspiration') }}
					</h3>
					<div class="space-y-1 text-black w-full lg:w-3/4">
						<p>
							{{ $t('inspirationdesc') }}
						</p>
					</div>
				</div>
				<div class="flex flex-col items-start p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-14 my-2 text-blue-300"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
							clip-rule="evenodd"
						/>
					</svg>

					<h3 class="my-3 text-3xl font-medium text-[#000032]">
						{{ $t('fun') }}
					</h3>
					<div class="space-y-1 text-black w-full lg:w-3/4">
						<p>
							{{ $t('fundesc') }}
						</p>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>
