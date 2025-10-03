<template>
	<div>
		<img v-if="type === 1" src="https://i.ibb.co/M7LMJzS/question.png" alt=""/>
		<img v-else-if="type === 2" src="https://i.ibb.co/x66Brqn/question-2.png" alt="" />
		<img v-else-if="type === 3" src="https://i.ibb.co/kGm4Hw8/structure.png" alt=""/>
		<img v-else-if="type === 4" src="https://i.ibb.co/9ZpK4TT/clock-2.png" alt=""/>
		<div v-else>Unknown img</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: Number,
			required: true,
		},
	},
};
</script>