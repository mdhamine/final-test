<template>
	<div
		class="h-screen z-50"
		v-if="!selected"
		:class="{ 'background-womp': !selected, 'background-train': selected }"
	>
		<LoginNavbar />
		<div class="h-full flex items-center justify-center flex-col mx-4">
			<div
				class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-12"
			>
				<h2
					class="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-white sm:text-5xl md:mx-auto"
				>
					<span class="text-[#28b0ff]"> {{ $t('training') }} </span>
					{{ $t('space') }}
				</h2>
			</div>
			<form
				class="py-5 px-8 bg-[#000032] ring ring-[#174897] rounded-lg shadow-lg max-w-xl w-full text-white mx-4"
				@submit.prevent="login"
			>
				<h2 class="text-3xl text-white mb-3 font-bold">{{ $t('login') }}</h2>
				<div v-if="authError">
					<div
						id="alert-2"
						class="flex items-center p-4 mb-4 rounded-lg text-red-500"
						role="alert"
					>
						<svg
							class="flex-shrink-0 w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
							/>
						</svg>
						<span class="sr-only">Info</span>
						<div class="ms-3 text-sm font-medium">{{ authError }}</div>
					</div>
				</div>

				<div class="mt-2 mb-6">
					<label
						for="email"
						class="block mb-2 text-sm font-medium text-white"
						>{{ $t('formemail') }}</label
					>
					<div class="relative mb-6">
						<div
							class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
						>
							<svg
								class="w-4 h-4 text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 16"
							>
								<path
									d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
								/>
								<path
									d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="email"
							class="bg-[#1c2450] border border-[#174897] text-white text-sm rounded-lg focus:ring-[#174897] focus:border-[#174897] block w-full ps-10 p-2.5"
							:placeholder="$t('formemail')"
							v-model="email"
						/>
					</div>
					<label
						for="password"
						class="block mb-2 text-sm font-medium text-white"
						>{{ $t('formnum') }}</label
					>
					<div>
						<div class="relative mb-6">
						<div
							class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
						>
							
						</div>
						<input
							v-if="showPassword"
							type="text"
							id="password"
							class="bg-[#1c2450] border border-[#174897] text-white text-sm rounded-l-lg focus:ring-[#174897] focus:border-[#174897] block w-full p-2.5"
							:placeholder="$t('formnum')"
							v-model="password"
						/>
						<input
							v-else
							type="password"
							id="password"
							class="bg-[#1c2450] border border-[#174897] text-white text-sm rounded-l-lg focus:ring-[#174897] focus:border-[#174897] block w-full p-2.5"
							:placeholder="$t('formnum')"
							v-model="password"
						/>
					    </div>
						
					</div>
				</div>
				<button
					:disabled="loading"
					type="submit"
					class="px-16 py-3 md:px-20 md:py-3 font-medium mx-auto block text-center text-white bg-[#000032] border-2 border-[#2893ff] rounded-full text-md"
					:class="{
						shine: !loading,
						'cursor-default': loading,
						'brightness-50': loading,
					}"
				>
					<span v-if="loading">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="animate-spin"
						>
							<path d="M12 2v4" />
							<path d="m16.2 7.8 2.9-2.9" />
							<path d="M18 12h4" />
							<path d="m16.2 16.2 2.9 2.9" />
							<path d="M12 18v4" />
							<path d="m4.9 19.1 2.9-2.9" />
							<path d="M2 12h4" />
							<path d="m4.9 4.9 2.9 2.9" />
						</svg>
					</span>
					<span v-else>{{ $t('login') }}</span>
				</button>
			</form>
		</div>
	</div>
	<LoginSelect v-else />
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useLocalePath } from '#i18n';

useHead({
	title: 'Login',
});

const user = useSupabaseUser();
const loading = ref(false);
const selected = ref(false);
const authError = ref('');
const email = ref('');
const password = ref('');
const client = useSupabaseClient();



watchEffect(async () => {
	if (user.value) {
		await navigateTo('/courses');
	}
});

const login = async () => {
	loading.value = true;
	console.log("Login with:", email.value, password.value);
	const { error } = await client.auth.signInWithPassword({
		email: email.value,
		password: password.value,
	
	});
	if (error) {
		loading.value = false;
		authError.value = 'Invalid login credentials';
		setTimeout(() => {
			authError.value = '';
		}, 5000);
	}
};
</script>

<script>
export default {
	data() {
		return {
			showPassword: true,
		};
	},
	computed: {
		buttonLabel() {
			return this.showPassword ? 'Show' : 'Hide';
		},
	},
	methods: {
		toggleShow() {
			this.showPassword = !this.showPassword;
		},
	},
};
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
