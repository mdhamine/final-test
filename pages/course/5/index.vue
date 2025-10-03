<template>
	<main>
		<Course5Navbar />
		<Course5Hero />
		<Course5Join />
		<Course5Feat />
		<LazyCourse5Feedback />
		<Course5JoinNow />
		<Course5FAQ />
		<Course5Footer />
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