<template>
  <div class="relative w-full overflow-hidden">
    <h2 class="text-2xl font-bold text-center mb-6">
      🎥 Fluently Academy Episodes
    </h2>

    <!-- Slider -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="w-full flex-shrink-0 px-4"
      >
        <div
          class="bg-white shadow-lg rounded-2xl p-4 flex flex-col justify-between h-[360px] text-center"
        >
          <div>
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-40 object-cover rounded-xl mb-3"
            />
            <h3 class="text-lg font-semibold mb-2">{{ video.title }}</h3>
            <p class="text-gray-600 text-sm">{{ video.desc }}</p>
          </div>
          <a
            :href="video.link"
            target="_blank"
            class="mt-4 text-blue-600 font-medium hover:underline"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <button
      @click="prev"
      class="absolute top-1/2 -translate-y-1/2 left-3 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
    >
      ‹
    </button>
    <button
      @click="next"
      class="absolute top-1/2 -translate-y-1/2 right-3 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
    >
      ›
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const videos = [
  {
    title: "FluentlyTalk Ep 08 with Ahmed Bouzid",
    desc: "Ahmed Bouzid shares how he asked for 6 billion centimes to kickstart his project.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
  },
  {
    title: "FluentlyTalk Ep 07 with Ladjali Raouf",
    desc: "Is the medical field becoming a business in Algeria? Raouf shares his thoughts.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
  },
  {
    title: "FluentlyTalk Ep 06 with Belkadi Manel",
    desc: "How to aim for a perfect 18 or 19 in the Algerian baccalaureate — Manel explains.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
  {
    title: "FluentlyTalk Ep 05 with ROC DZ",
    desc: "Can you really start from zero in Algeria? ROC DZ gives his honest answer.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_4",
  },
  {
    title: "FluentlyTalk Ep 04 with Yassine Abdeldjebbar",
    desc: "From an Algerian student to a researcher in the U.S. — Yassine’s inspiring journey.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_5/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_5",
  },
  {
    title: "FluentlyTalk Ep 03 with Idris Smati",
    desc: "Why did Idris leave his studies to work in Qatar? He shares his full story.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_6/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_6",
  },
  {
    title: "FluentlyTalk Ep 02 with Oussama Hamouche",
    desc: "An Algerian millionaire reveals how he started, struggled, and succeeded.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_7/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_7",
  },
  {
    title: "FluentlyTalk Ep 01 with Omar Rahmoun",
    desc: "Why Omar wakes up at 4 AM to work on his dreams — discipline and passion.",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_8/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_8",
  },
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length;
};
</script>

<style scoped>
/* Hide scrollbar if horizontal overflow happens */
::-webkit-scrollbar {
  display: none;
}
</style>
