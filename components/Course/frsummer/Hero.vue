<template>
  <div class="background w-full"></div>
  <div class="bg-[#000032]">
    <div class="min-h-screen hero">
      <div class="flex-col hero-content lg:flex-row max-w-full mt-20 lg:mt-4">
        <div
          class="sm:mx-auto text-center md:text-start xl:pr-24 md:px-12 basis-1/2"
        >
          <h1
            class="md:text-5xl text-4xl sm:px-4 md:px-0 font-semibold text-white"
          >
            {{ $t("coursetitlespefrsummer") }}
          </h1>
          <p class="py-6 text-white px-8 md:px-0">
            {{ $t("coursedescspefrsummer") }}
          </p>
          <div
            class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 mb-6 md:justify-items-start justify-items-center xl:pr-24 md:px-0 px-12 mx-auto md:mx-32 lg:mx-auto"
          >
            <a
              aria-label="Sign Up"
              href="#SignUp"
              type="button"
              class="flex items-center justify-center w-auto max-w-full h-full px-6 py-4 lg:px-20 lg:py-2 xl:py-4 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/80 whitespace-nowrap"
            >
              <span class="px-6 text-center">{{ $t("joincourse") }}</span>
            </a>

            <button
              class="bg-transparent h-[60px] w-full flex items-center justify-center px-6 py-3 md:px-12 md:py-2 font-medium text-center text-white rounded-full hover:underline underline-offset-4 decoration-2 text-md decoration-[#2893ff]/30"
              aria-label="Play"
              @click="playVideo"
            >
              <span class="whitespace-nowrap">{{ $t("seevid") }} ></span>
            </button>
          </div>
        </div>
        <div class="flex items-end justify-end min-h-full bg-transparent">
          <iframe
            ref="example"
            src="https://player.vimeo.com/video/1087233242?badge=0&amp;autopause=1&loop=1&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Super"
            class="bg-transparent 2xl:w-[760px] 2xl:h-[440px] xl:w-[590px] xl:h-[332.16px] lg:w-[470px] lg:h-[264px] md:w-[730px] md:h-[410px] sm:w-[510px] sm:h-[287px] medium:w-[392px] medium:h-[221px] smoll:h-[194px] smoll:w-[345px] w-[248px] h-[147px] rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="relative flex-col lg:-mt-52 -mt-10 mx-auto">
      <section class="text-white">
        <div
          class="max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto"
        >
          <div
            class="mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-4 items-center lg:gap-5 justify-evenly"
          >
            <div
              class="flex flex-col items-center gap-1 py-4"
              data-aos="zoom-in-up"
              data-aos-duration="200"
            >
              <span
                class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-blue-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </span>
              <h2 class="text-lg font-semibold">5 Sessions</h2>
              <p class="text-lg">Per Week</p>
            </div>
            <div
              class="flex flex-col items-center gap-1 py-4"
              data-aos="zoom-in-up"
              data-aos-duration="400"
            >
              <span
                class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="w-10 h-10 text-blue-100"
                  fill="currentColor"
                >
                  <path
                    d="M8.26667 10C7.56711 10 7 10.6396 7 11.4286V18.3571C7 20.369 8.44612 22 10.23 22L17.7333 21.9286C18.4329 21.9286 19 21.289 19 20.5V13.5C19 11.4881 17.2839 10 15.5 10L8.26667 10Z"
                  />
                  <path
                    d="M20.7122 12.7276C20.2596 13.1752 20 13.8211 20 14.5V17.3993C20 18.0782 20.2596 18.7242 20.7122 19.1717L23.5288 21.6525C24.1019 22.2191 25 21.7601 25 20.9005V11.1352C25 10.2755 24.1019 9.81654 23.5288 10.3832L20.7122 12.7276Z"
                  />
                </svg>
              </span>
              <div
                class="lg:border-l-2 lg:border-r-2 lg:border-blue-300/50 lg:px-10 text-center"
              >
                <h2 class="text-md font-semibold">
                  {{ $t("coursefeat2spe") }}
                </h2>
                <p class="text-lg">{{ $t("coursefeat2subspe") }}</p>
              </div>
            </div>
            <div
              class="flex flex-col items-center gap-1 py-4"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              <span
                class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="w-8 h-8 text-blue-100"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                  <!-- Dollar sign -->
                  <path
                    d="M13.5 7H11a2.5 2.5 0 000 5h2a2.5 2.5 0 110 5H10.5M12 5v14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div
                class="lg:border-r-2 lg:border-blue-300/50 lg:px-10 text-center"
              >
                <h2 class="text-md font-semibold">Cash Reward</h2>
                <p class="text-md">For Winners</p>
              </div>
            </div>
            <div
              class="flex flex-col items-center gap-1 py-4"
              data-aos="zoom-in-up"
              data-aos-duration="200"
            >
              <span
                class="shrink-0 rounded-lg bg-[#252c42]/30 border-blue-100/15 border-[0.1px] glowsuper p-4 my-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-blue-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14.25a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
                  />

                  <!-- Ribbon left -->
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 14.25L8.25 20.25l3-2.25 3 2.25-1.5-6"
                  />
                </svg>
              </span>
              <h2 class="text-lg font-semibold">Certificate</h2>
              <p class="text-lg">At the End</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.background {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  background-image: radial-gradient(
      circle at 99% 50%,
      rgba(69, 112, 255, 0.6) 0,
      transparent 25%
    ),
    radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 35%);
  animation: animateBackground 5s infinite;
}

@keyframes animateBackground {
  0% {
    background-position: 99% 50%, 1% 10%;
    opacity: 1;
  }
  25% {
    background-position: 99% 50%, 1% 10%;
    opacity: 1;
  }
  50% {
    background-position: 80% 40%, 50% 30%;
    opacity: 0.5;
  }
  75% {
    background-position: 99% 50%, 1% 10%;
    opacity: 1;
  }
  100% {
    background-position: 99% 50%, 1% 10%;
    opacity: 1;
  }
}

.glowsuper {
  -webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
  -moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
  box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.4);
}
</style>

<script>
import Player from "@vimeo/player";

export default {
  mounted() {
    this.example = new Player(this.$refs.example);
  },
  methods: {
    async playVideo() {
      try {
        await this.example.play();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    },
  },
};
</script>
