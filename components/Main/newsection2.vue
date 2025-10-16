<template>
  <section class="bg-[#f7faff] py-16 text-center overflow-hidden">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Toujours hésitant ? <br />
      <span class="text-blue-500">Découvrez nos contenus gratuits</span>
    </h2>

    <p class="max-w-3xl mx-auto text-gray-500 mb-12 px-4">
      Nos épisodes FluentlyTalk gratuits vous inspireront à travers les histoires
      de réussite, les parcours atypiques et les conseils pratiques de jeunes
      algériens ambitieux.
    </p>

    <div class="slider-container relative w-full max-w-7xl mx-auto">
      <div class="slider-track flex gap-6 sm:gap-8">
        <div
          v-for="(video, index) in [...videos, ...videos]" 
          :key="index"
          class="card bg-white rounded-2xl shadow-md flex flex-col justify-between w-64 sm:w-72 md:w-80 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
    </div>
  </section>
</template>

<script setup>
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
</script>

<style scoped>
.slider-container {
  overflow: hidden;
}

.slider-track {
  animation: scroll 35s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
