<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="bg-white p-8 rounded-lg shadow-lg text-center">
			<div
				class="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#dc2626"
					class="size-10 text-red-600"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<h1 class="text-2xl font-bold text-gray-800 mb-4">Payment Failed</h1>
			<p class="text-gray-600 mb-6">
				Your payment Failed. Please Try again.
			</p>
			<button
				@click="redirectToCourses"
				class="px-6 py-4 md:px-12 md:py-3 font-medium text-center shine text-black bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md md:text-lg hover:bg-[#2893ff]/80"
			>
				Home
			</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		redirectToCourses() {
			this.$router.push('/');
		},
	},
};
</script>