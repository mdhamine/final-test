<template>
  <section class="bg-[#f7faff] py-16 text-center overflow-hidden">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Toujours hésitant ? <br />
      <span class="text-blue-500">Découvrez nos contenus gratuits</span>
    </h2>
    <p class="max-w-3xl mx-auto text-gray-500 mb-12">
      Nos mini formations gratuites vous aideront à développer des fondations solides dans les domaines du
      développement personnel, du business en ligne, de l’entrepreneuriat et de l’investissement.
    </p>

    <div class="relative max-w-6xl mx-auto">
      <!-- Slider track -->
      <div
        ref="track"
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentTranslate}px)` }"
      >
        <div
          v-for="(video, index) in visibleVideos"
          :key="index"
          class="bg-white rounded-2xl shadow-md flex flex-col justify-between w-72 mx-3 flex-shrink-0"
        >
          <div>
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="rounded-t-2xl w-full h-44 object-cover"
            />
            <div class="p-4 flex flex-col h-[220px]">
              <h3 class="text-lg font-semibold mb-2">{{ video.title }}</h3>
              <p class="text-gray-500 text-sm flex-grow">{{ video.desc }}</p>
            </div>
          </div>
          <div class="p-4 pt-0">
            <a
              :href="video.link"
              target="_blank"
              class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 inline-block w-full text-center"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button
        @click="moveLeft"
        class="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3 hover:bg-blue-100"
      >
        ◀
      </button>

      <button
        @click="moveRight"
        class="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3 hover:bg-blue-100"
      >
        ▶
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const videos = [
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
];

// CONFIG
const cardWidth = 288; // 18rem
const gap = 24; // px (gap-6)
const moveDistance = cardWidth + gap;

// Track current translate position
const currentTranslate = ref(0);

// Create an infinite list by duplicating videos before and after
const visibleVideos = computed(() => [...videos, ...videos, ...videos]);

// Movement functions
const moveRight = () => {
  currentTranslate.value += moveDistance;
  const maxTranslate = moveDistance * videos.length;
  if (currentTranslate.value >= maxTranslate) {
    currentTranslate.value = 0; // reset smoothly to start
  }
};

const moveLeft = () => {
  currentTranslate.value -= moveDistance;
  const maxTranslate = moveDistance * videos.length;
  if (currentTranslate.value < 0) {
    currentTranslate.value = maxTranslate - moveDistance;
  }
};
</script>
