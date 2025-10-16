<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Toujours hésitant ? <br />
      <span class="text-blue-500">Découvrez nos contenus gratuits</span>
    </h2>

    <p class="max-w-3xl mx-auto text-gray-500 mb-12 px-4">
      Nos mini formations gratuites vous aideront à développer des fondations
      solides dans les domaines du développement personnel, du business en
      ligne, de l’entrepreneuriat et de l’investissement.
    </p>

    <div class="relative w-full max-w-6xl mx-auto">
      <div
        class="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-0"
        @mouseenter="pauseAutoscroll"
        @mouseleave="resumeAutoscroll"
      >
        <div
          v-for="(video, index) in displayedVideos"
          :key="index"
          class="bg-white shadow-md rounded-2xl flex flex-col justify-between flex-shrink-0 w-64 sm:w-72 md:w-80 transition-transform duration-500"
        >
          <div>
            <img
              :src="video.img"
              alt="Video thumbnail"
              class="rounded-t-2xl w-full h-40 sm:h-44 object-cover"
            />
            <div class="p-4 flex flex-col h-[200px] sm:h-[220px]">
              <h3 class="text-base sm:text-lg font-semibold mb-2">
                {{ video.title }}
              </h3>
              <p class="text-gray-500 text-sm flex-grow">{{ video.desc }}</p>
            </div>
          </div>
          <div class="p-4 pt-0">
            <a
              :href="video.link"
              target="_blank"
              class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 inline-block w-full text-center text-sm sm:text-base"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons (hidden on mobile) -->
      <button
        @click="scrollLeft"
        class="hidden sm:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
      >
        ◀
      </button>
      <button
        @click="scrollRight"
        class="hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
      >
        ▶
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const videos = [
  {
    title: "How to Start Your Business",
    desc: "Learn how to launch your online business effectively with simple steps.",
    img: "https://img.youtube.com/vi/Hw2eCvD2HOM/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=Hw2eCvD2HOM",
  },
  {
    title: "Build Self Discipline",
    desc: "Master your habits to stay consistent and reach your goals.",
    img: "https://img.youtube.com/vi/xp2Pdm2DqTQ/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=xp2Pdm2DqTQ",
  },
  {
    title: "Invest Smartly",
    desc: "Understand the basics of investing and managing your money wisely.",
    img: "https://img.youtube.com/vi/UKkzvY9P-nw/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=UKkzvY9P-nw",
  },
  {
    title: "Time Management",
    desc: "Practical tips to manage your day and boost productivity.",
    img: "https://img.youtube.com/vi/nWbZjq4gC7A/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=nWbZjq4gC7A",
  },
  {
    title: "Overcome Fear of Failure",
    desc: "Shift your mindset and see failure as a learning opportunity.",
    img: "https://img.youtube.com/vi/0deYETmQw08/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=0deYETmQw08",
  },
  {
    title: "Personal Branding 101",
    desc: "Learn how to build a strong personal brand that stands out.",
    img: "https://img.youtube.com/vi/Upbm-9xsrnQ/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=Upbm-9xsrnQ",
  },
  {
    title: "Entrepreneur Mindset",
    desc: "Develop the right mentality to grow and adapt as an entrepreneur.",
    img: "https://img.youtube.com/vi/YRkW0v7oBtY/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=YRkW0v7oBtY",
  },
  {
    title: "Create Multiple Income Streams",
    desc: "Discover practical ways to diversify your income sources.",
    img: "https://img.youtube.com/vi/5zXAlx4J4wQ/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=5zXAlx4J4wQ",
  },
];

const displayedVideos = ref([...videos, ...videos]); // duplicate for infinite loop
let interval;

const scrollRight = () => {
  const first = displayedVideos.value.shift();
  displayedVideos.value.push(first);
};

const scrollLeft = () => {
  const last = displayedVideos.value.pop();
  displayedVideos.value.unshift(last);
};

const startAutoscroll = () => {
  interval = setInterval(scrollRight, 3000);
};

const pauseAutoscroll = () => clearInterval(interval);
const resumeAutoscroll = () => startAutoscroll();

onMounted(startAutoscroll);
onBeforeUnmount(pauseAutoscroll);
</script>

<style>
/* Hide scrollbar on mobile for a cleaner look */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
