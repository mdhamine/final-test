<template>
	<div
		class="hero min-h-screen background-joinnow border-b-2 border-sky-300/50 flex flex-col items-center justify-center"
		id="SignUp"
	>
		<h1 class="text-5xl font-bold my-10 text-white">
			<span class="text-[#f2f3f5]">{{ $t('still') }}</span>
		</h1>
		<div class="hero-content flex-col text-center max-w-6xl py-6">
			<div class="group px-2">
				<div
					class="max-w-lg bg-[#000032] text-white rounded-2xl ring-2 ring-[#2893ff] shadow-lg p-6 group-hover:scale-105"
				>
					<h2 class="text-2xl font-bold text-center mt-10">
						{{ $t('training_title8') }}
					</h2>
					<p class="mt-2 text-center w-2/3 mx-auto">
						{{ $t('training_desc8') }}
					</p>
					<div class="flex justify-center my-12">
						<img
							src="https://i.ibb.co/py4QdkS/Italian-2.jpg" 
							alt="none"
							class="w-full lg:w-full rounded-[25px]"
						/>
					</div>
					<br>
					<div
						class="text-center text-2xl text-[#28CCFF] mt-2 font-semibold"
					    
					>
						<span>{{ $t('4') }}</span>
						
					</div>
					<br>
					<br>
					<div
						class="text-center text-lg font-medium text-[#2893ff] mt-4"
					>
						
					</div>
					<div class="text-center text-3xl font-bold">4800DZD</div>
					<div class="my-4 flex justify-center mb-10">
						<a
							v-if="courseis ===  'closed'"
							class="px-16 py-3 md:px-20 md:py-3 font-medium mx-auto block text-center shine text-white bg-[#000032] border-2 border-[#2893ff] rounded-full text-md"
							@click="signup"
							
						>
					Closed
						</a>
						<a
						v-if="courseis === 'open'"
						href="8/form"
						class="px-16 py-3 md:px-20 md:py-3 font-medium mx-auto block text-center shine text-white bg-[#000032] border-2 border-[#2893ff] rounded-full text-md"
						@click="signup"
					>
						Join The Training !
					</a>
					</div>
				</div>
			</div>
			<div
				class="text-center text-2xl font-medium mb-3 mx-auto my-7 text-white"
			>   
			    <div class="hidden"
				  v-if="useLocalePath('ar')"
				>
			    <span class="text-white"> {{ $t('validfor') }}  </span>
				<span class="text-[#2893ff] text-3xl"
					> </span
				>
			</div>
			<div
			class="text-center text-2xl font-medium mb-3 mx-auto my-7 text-white"
		    >   
			<div 
			  v-if="useLocalePath('ar')"
			>
			<span class="text-[#2893ff] text-3xl"
				>  </span>
			<span class="text-white"></span>
			
		    </div>
			</div>
			<div
				class="text-center text-2xl font-medium mb-4 mx-auto my-7 text-white"
			>
	
				<span class="text-[#2893ff] text-3xl"
					></span
				>
				
			</div>
		</div>
	</div>
</div>
</template>

<style>
.disable-arrows::-webkit-outer-spin-button,
.disable-arrows::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.disable-arrows[type='number'] {
	-moz-appearance: textfield;
}

.background-joinnow {
	background-color: #030324;
	background-image: radial-gradient(
			at 99% 50%,
			rgba(69, 112, 255, 0.2) 0,
			transparent 65%
		),
		radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.2) 0, transparent 65%);
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const targetDate = new Date('2024-07-30T23:59:59').getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateTimer = () => {
	const now = new Date().getTime();
	const distance = targetDate - now;

	days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
	hours.value = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
	updateTimer();
	setInterval(updateTimer, 4000);
});
</script>

<script>
  export default {
	data() {
		return {
			courseis: "closed",
		}
	},
    methods: {
      signup(event) {
        track('Signup');
        // ... other logic
      },
    },
  };
</script>
