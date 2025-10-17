<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Toujours hésitant ? <br />
      <span class="text-blue-500">Découvrez nos contenus gratuits</span>
    </h2>
    <p class="max-w-3xl mx-auto text-gray-500 mb-12">
      Nos mini formations gratuites vous aideront à développer des fondations solides dans les domaines du
      développement personnel, du business en ligne, de l’entrepreneuriat et de l’investissement.
    </p>

    <div class="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        class="flex gap-6 transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }"
      >
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="bg-white shadow-md rounded-2xl flex flex-col justify-between w-72 flex-shrink-0"
        >
          <div>
            <img
              :src="video.img"
              alt="Video thumbnail"
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

      <!-- Left arrow -->
      <button
        @click="scrollLeft"
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
      >
        ◀
      </button>

      <!-- Right arrow -->
      <button
        @click="scrollRight"
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
      >
        ▶
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videos = [
  {
    title: 'How to Start Your Business',
    desc: 'Learn how to launch your online business effectively with simple steps.',
    img: 'https://img.youtube.com/vi/Hw2eCvD2HOM/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=Hw2eCvD2HOM',
  },
  {
    title: 'Build Self Discipline',
    desc: 'Master your habits to stay consistent and reach your goals.',
    img: 'https://img.youtube.com/vi/xp2Pdm2DqTQ/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=xp2Pdm2DqTQ',
  },
  {
    title: 'Invest Smartly',
    desc: 'Understand the basics of investing and managing your money wisely.',
    img: 'https://img.youtube.com/vi/UKkzvY9P-nw/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=UKkzvY9P-nw',
  },
  {
    title: 'Time Management',
    desc: 'Practical tips to manage your day and boost productivity.',
    img: 'https://img.youtube.com/vi/nWbZjq4gC7A/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=nWbZjq4gC7A',
  },
  {
    title: 'Overcome Fear of Failure',
    desc: 'Shift your mindset and see failure as a learning opportunity.',
    img: 'https://img.youtube.com/vi/0deYETmQw08/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=0deYETmQw08',
  },
  {
    title: 'Personal Branding 101',
    desc: 'Learn how to build a strong personal brand that stands out.',
    img: 'https://img.youtube.com/vi/Upbm-9xsrnQ/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=Upbm-9xsrnQ',
  },
  {
    title: 'Entrepreneur Mindset',
    desc: 'Develop the right mentality to grow and adapt as an entrepreneur.',
    img: 'https://img.youtube.com/vi/YRkW0v7oBtY/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=YRkW0v7oBtY',
  },
  {
    title: 'Create Multiple Income Streams',
    desc: 'Discover practical ways to diversify your income sources.',
    img: 'https://img.youtube.com/vi/5zXAlx4J4wQ/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=5zXAlx4J4wQ',
  },
]

const currentIndex = ref(0)
const visibleCards = 3 // number of cards visible at once
const cardWidth = 288 // 18rem = 72 * 4px
const gap = 24 // Tailwind gap-6 = 1.5rem = 24px

const scrollRight = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.length
}

const scrollLeft = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length
}
</script>
