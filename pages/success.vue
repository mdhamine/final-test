<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="bg-white p-8 rounded-lg shadow-lg text-center">
			<!-- Check Mark Icon -->
			<div
				class="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#16a34a"
					class="size-10"
				>
					<path
						fill-rule="evenodd"
						d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<h1 class="text-2xl font-bold text-gray-800 mb-4">Payment Successful</h1>
			<p class="text-gray-600 mb-6">
				Thank you for your payment. Your transaction has been completed.
			</p>
			<button
				@click="redirectToCourses"
				class="px-6 py-4 md:px-12 md:py-3 font-medium text-center shine text-black bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md md:text-lg hover:bg-[#2893ff]/80"
				>
				Go to Courses
			</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		redirectToCourses() {
			this.$router.push('/courses');
		},
	},
};
</script>