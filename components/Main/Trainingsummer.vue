<template>
  <div class="bg-[#000032]">
    <div class="hero lg:-mt-24 background-faq" id="Training">
      <div
        class="px-6 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
      >
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-white sm:text-5xl md:mx-auto"
          >
            <span class="text-[#28b0ff]"> The Perfect</span>
            Summer Camp to Master English & French Fluently
          </h2>
        </div>
        <div
          class="grid gap-4 gap-y-8 text-white md:grid-cols-2 xl:gap-16 mb-4"
        >
          <a
            aria-label="Course"
            :href="localePath('/course/english-summer-s192snsxwq')"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/RTTzmkJh/4.png"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969] mt-2">
                All Levels
              </div>
              <h2 class="card-title text-white">
                {{ $t("coursetitlespeengsummer") }}
              </h2>
              <p class="text-white">
                {{ $t("coursedescspeengsummertr") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  @click="signup2"
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            :href="localePath('/course/french-summer')"
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/ynXNkKf1/3.png"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969]">
                All Levels
              </div>
              <h2 class="card-title text-white">
                {{ $t("coursetitlespefrsummer") }}
              </h2>

              <p class="text-white">
                {{ $t("coursedescspefrsummertr") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-14 flex justify-center"></div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes animateBackgroundtrain {
  0% {
    background-position: 99% 50%, 1% 10%;
  }
  50% {
    background-position: 90% 45%, 10% 60%;
  }
  100% {
    background-position: 99% 50%, 1% 50%;
  }
}
@media only screen and (max-width: 600px) {
  .background-train {
    background-color: #fafcff;
    background-image: radial-gradient(
        at 99% 50%,
        rgba(69, 112, 255, 0.4) 0,
        transparent 65%
      ),
      radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    animation: animateBackgroundtrain 5s infinite;
  }
}
</style>

<script setup>
const { locale } = useI18n();

const localePath = useLocalePath();
</script>

<script>
export default {
  methods: {
    signup2(event) {
      track("learn");
      // ... other logic
    },
  },
};
</script>
