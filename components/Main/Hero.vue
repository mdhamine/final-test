<template>
  <div class="background w-full"></div>
  <div>
    <div class="min-h-screen hero bg-[#000032]">
      <div class="flex-col hero-content lg:flex-row max-w-full">
        <div
          class="text-center md:text-start mt-16 sm:mx-16 lg:mx-auto lg:mt-0 xl:pr-24 md:px-10"
        >
          <h1
            class="md:text-5xl text-4xl sm:px-4 md:px-0 font-semibold text-white"
          >
            {{ $t("title") }}
            <span class="text-[#28CCFF]">{{ $t("title2") }}</span>
          </h1>
          <p class="py-6 text-white px-8 md:px-0">
            {{ $t("desc") }}
          </p>

          ```
          <div
            class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 mb-6 md:justify-items-start justify-items-center xl:pr-24 md:px-0 px-12 mx-auto lg:mx-auto"
          >
            <a
              aria-label="Training"
              href="#Training"
              type="button"
              class="flex items-center justify-center h-[60px] px-8 py-4 sm:px-10 lg:px-20 lg:py-4 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/8"
            >
              <span>{{ $t("explore") }}</span>
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
        <div class="flex items-center justify-center min-h-full bg-transparent">
          <iframe
            ref="example"
            src="https://player.vimeo.com/video/974370707?badge=0&amp;autopause=1&amp;player_id=0&amp;app_id=58479&loop=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Super"
            class="bg-transparent 2xl:w-[760px] 2xl:h-[440px] xl:w-[590px] xl:h-[332.16px] lg:w-[470px] lg:h-[264px] md:w-[730px] md:h-[410px] sm:w-[510px] sm:h-[287px] medium:w-[392px] medium:h-[221px] smoll:h-[194px] smoll:w-[345px] w-[247px] h-[139px] rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Trusted By Logos Section -->
    <section class="trusted-by">
      <div class="container">
        <h2 class="title">They trust us</h2>

        <ul class="logo-grid" role="list">
          <li v-for="(c, i) in companies" :key="c.id || i" class="logo-item">
            <a
              v-if="c.url"
              :href="c.url"
              target="_blank"
              rel="noopener noreferrer"
              class="logo-link"
              :title="c.name"
            >
              <img
                class="logo"
                :src="c.logo"
                :alt="c.name + ' logo'"
                loading="lazy"
                width="180"
                height="80"
              />
            </a>
            <div v-else class="logo-link">
              <img
                class="logo"
                :src="c.logo"
                :alt="c.name + ' logo'"
                loading="lazy"
                width="180"
                height="80"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="relative flex-col hidden 2xl:flex -mt-52">
      <hr
        class="w-6 h-1 mx-auto my-4 mt-16 border-0 rounded gradient-bar thin-section glow md:my-10"
      />
      <div class="relative p-8 overflow-auto rounded-xl">
        <div class="flex justify-center">
          <a
            aria-label="Start"
            href="#start"
            class="flex items-center justify-center w-10 h-10 p-2 rounded-full shadow-lg animate-bounce bg-slate-800 ring-1 ring-slate-200/20"
          >
            <svg
              class="w-6 h-6 text-sky-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  ```
</template>

<script>
import Player from "@vimeo/player";

export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          name: "Acme Co",
          logo: "https://via.placeholder.com/180x80?text=Acme",
          url: "#",
        },
        {
          id: 2,
          name: "Globex",
          logo: "https://via.placeholder.com/180x80?text=Globex",
          url: "#",
        },
        {
          id: 3,
          name: "Initech",
          logo: "https://via.placeholder.com/180x80?text=Initech",
          url: "#",
        },
        {
          id: 4,
          name: "Umbrella",
          logo: "https://via.placeholder.com/180x80?text=Umbrella",
          url: "#",
        },
        {
          id: 5,
          name: "Wonka",
          logo: "https://via.placeholder.com/180x80?text=Wonka",
          url: "#",
        },
        {
          id: 6,
          name: "Stark",
          logo: "https://via.placeholder.com/180x80?text=Stark",
          url: "#",
        },
      ],
    };
  },
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

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  color: #000032;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1.25rem auto 0;
  align-items: center;
}

@media (min-width: 640px) {
  .logo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .logo-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 56px;
}

.logo {
  max-width: 100%;
  max-height: 64px;
  object-fit: contain;
  transition: transform 180ms ease, filter 180ms ease;
}

.logo:hover {
  transform: translateY(-4px) scale(1.02);
}

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
  0%,
  25%,
  75%,
  100% {
    background-position: 99% 50%, 1% 10%;
    opacity: 1;
  }
  50% {
    background-position: 80% 40%, 50% 30%;
    opacity: 0.5;
  }
}

.glow {
  box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
}
</style>
