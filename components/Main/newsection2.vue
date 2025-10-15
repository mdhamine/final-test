<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      🎙️ Discover <span class="text-blue-500">FluentlyTalk</span> Episodes
    </h2>
    <p class="max-w-3xl mx-auto text-gray-500 mb-12 leading-relaxed">
      Toujours hésitant ? <br />
      Découvrez nos contenus gratuits. <br />
      Nos mini formations gratuites vous aideront à développer des fondations
      solides dans les domaines du développement personnel, du business en
      ligne, de l’entrepreneuriat et de l’investissement.
    </p>

    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Left arrow -->
      <button
        @click="prev"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100 z-10"
      >
        <span class="text-xl">‹</span>
      </button>

      <!-- Slider -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }"
        >
          <div
            v-for="(video, index) in loopedVideos"
            :key="index"
            class="w-full md:w-1/3 px-4 flex-shrink-0"
          >
            <div
              class="bg-white shadow-lg rounded-2xl p-6 text-left h-[420px] flex flex-col justify-between hover:border-2 hover:border-blue-400 transition-all duration-300"
            >
              <div>
                <img
                  :src="video.thumbnail"
                  :alt="video.title"
                  class="rounded-xl mb-4 w-full h-48 object-cover"
                />
                <h3 class="text-xl font-bold mb-2 line-clamp-2">
                  {{ video.title }}
                </h3>
                <p class="text-gray-500 mb-4 line-clamp-3">{{ video.desc }}</p>
              </div>
              <a
                :href="video.link"
                target="_blank"
                class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-center transition"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        @click="next"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100 z-10"
      >
        <span class="text-xl">›</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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
  {
    title: "FluentlyTalk Ep 08 — Ahmed Bouzid",
    desc: "Ahmed Bouzid reveals how he asked for 6 billion centimes to start his project.",
    thumbnail: "https://i.ytimg.com/vi/2uq8LwmDQ6Q/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=2uq8LwmDQ6Q",
  },
]);

// Number of visible cards
const visibleCards = 3;

// Duplicate videos array to create infinite loop effect
const loopedVideos = computed(() => [...videos.value, ...videos.value]);

const currentIndex = ref(0);

function next() {
  currentIndex.value++;
  if (currentIndex.value >= videos.value.length) {
    // Reset smoothly to start
    setTimeout(() => {
      currentIndex.value = 0;
    }, 700);
  }
}

function prev() {
  if (currentIndex.value === 0) {
    currentIndex.value = videos.value.length - 1;
  } else {
    currentIndex.value--;
  }
}
</script>

<style scoped>
section {
  border-radius: 1.5rem;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
