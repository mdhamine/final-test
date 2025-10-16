<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Toujours hésitant ? <br />
      <span class="text-blue-500">Découvrez nos contenus gratuits</span>
    </h2>

    <p class="max-w-3xl mx-auto text-gray-500 mb-12 px-4">
      Nos épisodes FluentlyTalk gratuits vous inspireront à travers les histoires
      de réussite, les parcours atypiques et les conseils pratiques de jeunes
      algériens ambitieux.
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
              :src="video.thumbnail"
              :alt="video.title"
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
              Regarder sur YouTube
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation buttons (hidden on mobile) -->
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

const videos = ref([
  {
    title: "FluentlyTalk Ep 01 — Omar Rahmoun",
    desc: "Why Omar wakes up at 4 AM to chase his dreams — a talk about discipline and mindset.",
    thumbnail: "https://i.ytimg.com/vi/BaUdOKGuA40/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=BaUdOKGuA40",
  },
  {
    title: "FluentlyTalk Ep 02 — Oussama Hamouche",
    desc: "An Algerian millionaire shares how he built his business empire from the ground up.",
    thumbnail: "https://i.ytimg.com/vi/X8OqdwWqWso/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=X8OqdwWqWso",
  },
  {
    title: "FluentlyTalk Ep 03 — Idris Smati",
    desc: "Why Idris left university to work in Qatar and how that decision changed his life.",
    thumbnail: "https://i.ytimg.com/vi/1T68O4Jzfv4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=1T68O4Jzfv4",
  },
  {
    title: "FluentlyTalk Ep 04 — Yassine Abdeldjebbar",
    desc: "From Algeria to the U.S.: Yassine’s inspiring journey to becoming a researcher abroad.",
    thumbnail: "https://i.ytimg.com/vi/sSCa9LimxzQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=sSCa9LimxzQ",
  },
  {
    title: "FluentlyTalk Ep 05 — ROC DZ",
    desc: "Is it really possible to start from zero in Algeria? ROC DZ gives his raw perspective.",
    thumbnail: "https://i.ytimg.com/vi/iv66rGFWMmI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=iv66rGFWMmI",
  },
  {
    title: "FluentlyTalk Ep 06 — Belkadi Manel",
    desc: "How Manel scored 18+ in the Algerian Baccalaureate — strategies for excellence.",
    thumbnail: "https://i.ytimg.com/vi/8asdkghlcpA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=8asdkghlcpA",
  },
  {
    title: "FluentlyTalk Ep 07 — Ladjali Raouf",
    desc: "Has medicine become a business in Algeria? Raouf shares his honest opinion.",
    thumbnail: "https://i.ytimg.com/vi/35Tjrg4KJYc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=35Tjrg4KJYc",
  },
]);

// Duplicate videos for smooth infinite effect
const displayedVideos = ref([...videos.value, ...videos.value]);

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
  interval = setInterval(scrollRight, 3500);
};

const pauseAutoscroll = () => clearInterval(interval);
const resumeAutoscroll = () => startAutoscroll();

onMounted(startAutoscroll);
onBeforeUnmount(pauseAutoscroll);
</script>

<style>
/* Hide scrollbar for a clean horizontal scroll */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
