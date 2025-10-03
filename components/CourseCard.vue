<script setup lang="ts">
defineProps<{
	tag?: string;
	title: string;
	description: string;
	imageUrl?: string;
}>();
</script>

<template>
	<div
		aria-label="Course"
		class="group card mx-auto md:w-[26rem] md:h-[46rem] px-2"
	>
		<figure
			class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] bg-[#2885ff]/20"
		>
			<img
				v-if="imageUrl"
				class="w-full lg:h-full overflow-visible object-cover h-auto"
				loading="lazy"
				:src="imageUrl"
				alt="Album"
			/>
		</figure>
		<div
			class="bg-[#2885ff]/20 card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2"
		>
			<div class="badge bg-white font-thin text-[#28CCFF]" v-if="tag">
				{{ $t(tag) }}
			</div>
			<h2 class="card-title text-white">{{ $t(title) }}</h2>
			<p class="text-white">{{ $t(description) }}</p>
		</div>
	</div>
</template>