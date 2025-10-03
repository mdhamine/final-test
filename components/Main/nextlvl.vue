<template>
  <div class="hero background-mission lg:-mt-24">
    <HumbleScroll animation="fade up">
      <div
        class="flex-col-reverse mb-4 lg:flex-row-reverse hero-content background-womps"
      >
        <div
          class="grid w-1/2 grid-cols-1 place-content-center place-items-center mx-6"
        >
          <img
            class="object-cover rounded-lg md:h-1/2"
            alt=""
            loading="lazy"
            src="https://i.ibb.co/Xp9xnY9/mediamodifier-image-3.png"
          />
        </div>
        <div class="w-full py md:pr-20">
          <h1
            class="pb-6 md:text-5xl text-4xl font-semibold text-white md:w-2/3 text-center lg:text-start"
          >
            {{ $t("nxtlvl_head") }}
            <span class="text-[#28CCFF]"> {{ $t("nxtlvl_success") }}</span>
          </h1>
          <p class="font-normal text-md text-white">
            {{ $t("nxtlvl_desc") }}
          </p>
          <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          >
            <div
              class="grid grid-cols-1 gap-cols-8 gap-16 md:grid-cols-3 place-content-center"
              ref="animatedValue"
            >
              <div class="text-center md:text-start">
                <h6
                  class="text-5xl font-bold text-white lg:text-4xl xl:text-5xl"
                >
                  +<span id="experts" ref="expertsValue">0</span>
                </h6>
                <div class="pl-2 mt-2 md:border-l border-sky-500">
                  <p
                    class="font-semibold tracking-widest text-white uppercase text-md lg:text-base"
                  >
                    {{ $t("nxtlvl_experts") }}
                  </p>
                  <p
                    class="text-sm font-medium tracking-widest text-gray-400 uppercase text-whitelg:text-md"
                  >
                    {{ $t("nxtlvl_experts_desc") }}
                  </p>
                </div>
              </div>
              <div class="py-6 text-center md:text-start md:py-0">
                <h6
                  class="text-5xl font-bold text-white lg:text-4xl xl:text-5xl"
                >
                  +<span id="hours" ref="hoursValue">0</span>
                </h6>

                <div class="pl-2 mt-2 md:border-l border-sky-500">
                  <p
                    class="font-semibold tracking-widest text-white uppercase text-md lg:text-base"
                  >
                    {{ $t("nxtlvl_hours") }}
                  </p>
                  <p
                    class="text-sm font-medium tracking-widest text-gray-400 uppercase text-whitelg:text-md"
                  >
                    {{ $t("nxtlvl_hours_desc") }}
                  </p>
                </div>
              </div>
              <div class="text-center md:text-start">
                <h6
                  class="text-5xl font-bold text-white lg:text-4xl xl:text-5xl"
                >
                  +<span id="generated" ref="generatedValue">0</span>
                </h6>
                <div class="pl-2 mt-2 md:border-l border-sky-500">
                  <p
                    class="font-semibold tracking-widest text-white uppercase text-md lg:text-base"
                  >
                    {{ $t("nxtlvl_generated") }}
                  </p>
                  <p
                    class="text-sm font-medium tracking-widest text-gray-400 uppercase text-whitelg:text-md"
                  >
                    {{ $t("nxtlvl_generated_desc") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></HumbleScroll
    >
  </div>
</template>

<style>
@media only screen and (max-width: 600px) {
  .background-womps {
    background-color: #000032;
    background-image: radial-gradient(
        at 99% 50%,
        rgba(69, 112, 255, 0.4) 0,
        transparent 65%
      ),
      radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
    animation: animateBackgroundtrain 5s infinite;
  }
}

.background-mission {
  background-color: #000032;
}
</style>
<script>
export default {
  data() {
    return {
      animationPlayed: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    observer.observe(this.$refs.expertsValue);
    observer.observe(this.$refs.hoursValue);
    observer.observe(this.$refs.generatedValue);
  },
  methods: {
    animateValue(id, start, end, duration) {
      if (start === end) return;
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting && !this.animationPlayed) {
        this.animateValue("experts", 0, 1000, 3000);
        this.animateValue("hours", 1000, 10000, 500);
        this.animateValue("generated", 0, 10, 3000);

        this.animationPlayed = true;
      }
    },
  },
};
</script>
