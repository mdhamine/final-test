<template>
  <section class="bg-[#000032] py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Outer Box -->
      <div class="bg-blue-900/50 backdrop-blur-md rounded-3xl shadow-xl p-10">
        <!-- Title -->
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Ils ont atteint leurs <span class="text-blue-400">objectifs</span>
          </h2>
          <p class="mt-2 text-gray-300 font-medium">
            <span class="text-white">Excellent</span> · 4.5 sur 5 ·
            <span class="text-green-400">★ Trustpilot</span>
          </p>
        </div>

        <!-- Images Grid -->
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="(img, i) in visibleImages"
            :key="i"
            class="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              :src="img"
              alt="review image"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Button -->
        <div class="flex justify-center mt-12">
          <button
            @click="showAll = !showAll"
            class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-white font-medium py-3 px-6 rounded-full shadow-lg"
          >
            {{ showAll ? "Afficher moins" : "Afficher plus" }}
          </button>
        </div>

        <!-- Disclaimer -->
        <p class="text-center text-gray-300 mt-8">
          Tous ces résultats ne sont pas des promesses de gains
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const images = ref([

  "https://i.ibb.co/bjXXfyFk/IMG-0275.jpg",
  "https://i.ibb.co/BHKRjfyz/IMG-0274.jpg",
  "https://i.ibb.co/PzZ52YnY/IMG-0268.jpg",
  "https://i.ibb.co/BKLds0L0/IMG-0269.jpg",
  "https://i.ibb.co/w2GMr2H/IMG-0270.jpg",
  "https://i.ibb.co/KjR5WY1D/IMG-0267.jpg",
  "https://i.ibb.co/9HtLjLXw/IMG-0282.jpg",
  "https://i.ibb.co/hRtQmRxf/IMG-0281.jpg",
  "https://i.ibb.co/m5KyCyfM/IMG-0271.jpg",
  "https://i.ibb.co/zTryMrqC/IMG-0272.jpg",
    "https://i.ibb.co/p7XcYXk/IMG-0291.jpg",
  "https://i.ibb.co/ZzyX9Cr1/IMG-0290.jpg",
  "https://i.ibb.co/pvxQWtK2/IMG-0289.jpg",


  "https://i.ibb.co/B2LrphXh/IMG-0286.jpg",

  "https://i.ibb.co/gLJqGD7g/IMG-0284.jpg"
]);

const showAll = ref(false);

const visibleImages = computed(() => {
  return showAll.value ? images.value : images.value.slice(0, 6);
});
</script>
