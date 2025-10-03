<template>
	<div >
		<LoginNavbar />
		<LazyCourseJapanPayment />
		<MainFooter style="background-color: #030324;" />
	</div>
</template>

<script setup>
useHead({
	title: 'Course - 1 | Payment',
});
</script>

<style>
.background-train {
	background-color: #fafcff;
	background-image: radial-gradient(
			at 99% 50%,
			rgba(69, 112, 255, 0.4) 0,
			transparent 65%
		),
		radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
	animation: animateBackgroundtrain 5s infinite;
}

.background-womp {
	background-color: #000032;
	background-image: radial-gradient(
			circle at 99% 50%,
			rgba(69, 112, 255, 0.6) 0,
			transparent 35%
		),
		radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 35%);
	animation: animateBackgroundtrain 5s infinite;
}
</style>