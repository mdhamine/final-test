<template>
	<main>
		<Course1Navbar />
		<Course1Hero />
		<LazyCourse1Join />
		<LazyCourse1Feat />
		<LazyCourse1Feedback />
		<LazyCourse1JoinNow />
		
		<LazyCourse1SignUp />
		<LazyCourse1FAQ />
		<LazyCourse1Footer />
	</main>
</template>

<style>
* {
	transition: all 0.25s ease-out;
	-webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
	width: 15px;
}

::-webkit-scrollbar-track {
	background-color: rgba(0, 0, 0, 0.05);
	-webkit-border-radius: 20px;
	border-radius: 20px;
}

::-webkit-scrollbar-thumb {
	-webkit-border-radius: 20px;
	border-radius: 20px;
	background: rgb(54, 49, 49);
}
</style>

<script setup lang="ts">
useHead({
	title: 'Course - 1',
});
</script>