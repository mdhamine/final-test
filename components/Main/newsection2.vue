<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <p class="text-gray-600 mb-2">Toujours hésitant ?</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      Découvrez nos contenus <span class="text-blue-500">gratuits</span>
    </h2>
    <p class="max-w-3xl mx-auto text-gray-500 mb-12">
      Nos mini formations et podcasts gratuits vous aideront à développer des
      fondations solides dans le développement personnel, le business en ligne
      et l’entrepreneuriat.
    </p>

    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Left arrow -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100 z-10"
      >
        <span class="text-xl">‹</span>
      </button>

      <!-- Cards container -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(card, index) in displayCards"
            :key="index"
            class="min-w-full md:min-w-[33.33%] px-4"
          >
            <div
              class="bg-white shadow-lg rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-blue-300 hover:shadow-xl hover:border hover:border-blue-400 h-[480px] flex flex-col"
            >
              <img
                :src="card.image"
                class="rounded-xl mb-4 w-full h-48 object-cover"
                alt=""
              />
              <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
              <p class="text-gray-500 flex-grow">{{ card.desc }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mt-6 transition"
              >
                Voir la formation gratuite
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100 z-10"
      >
        <span class="text-xl">›</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const currentIndex = ref(0);

const cards = ref([
  {
    title: "Podcast avec Omar Rahmoun",
    image:
      "https://i.ibb.co/TMWd0BMz/OPTIMIZED-2-MB-Podcast-Omar-rahmoun-2.png",
    desc: "Découvrez le parcours inspirant d’Omar Rahmoun et ses conseils pour réussir dans le business moderne.",
  },
  {
    title: "Podcast Épisode 2",
    image: "https://i.ibb.co/k2jkbJj2/Optimized-2mb-Podcast-EP-2.png",
    desc: "Un nouvel épisode dédié aux stratégies de réussite et à la motivation personnelle.",
  },
  {
    title: "Podcast Épisode 2 (Version Optimisée)",
    image: "https://i.ibb.co/s71YvYd/ep-2-opt.png",
    desc: "Apprenez comment surmonter les blocages mentaux pour atteindre vos objectifs.",
  },
  {
    title: "Podcast Épisode 3",
    image: "https://i.ibb.co/670NwHSy/EP-3-OPT.png",
    desc: "Explorez les secrets de la persévérance et de la discipline dans cet épisode inspirant.",
  },
  {
    title: "Podcast Épisode 4",
    image: "https://i.ibb.co/tMZjb4Nj/EP-4-Version-2-1.png",
    desc: "Les erreurs à éviter lorsqu’on démarre son propre projet entrepreneurial.",
  },
  {
    title: "Podcast Épisode 5",
    image: "https://i.ibb.co/Ndmw1p8S/EP-5-Youtube-OPT-3.png",
    desc: "Découvrez comment bâtir une présence forte en ligne grâce au contenu vidéo.",
  },
  {
    title: "Podcast avec Idriss",
    image: "https://i.ibb.co/tp3zPLpD/OPT-Podcast-idriss2-1.png",
    desc: "Une conversation exclusive sur la réussite personnelle et la gestion du temps.",
  },
  {
    title: "Podcast Spécial Motivation",
    image: "https://i.ibb.co/WNMnnVdn/POD-OPT.png",
    desc: "Un épisode pour booster votre énergie et retrouver la motivation au quotidien.",
  },
]);

// Show only 3 cards at a time
const displayCards = computed(() => {
  // Duplicate start and end for smooth infinite scroll illusion
  return [...cards.value, ...cards.value.slice(0, 3)];
});

function nextSlide() {
  if (currentIndex.value < cards.value.length) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = cards.value.length - 1;
  }
}
</script>

<style scoped>
section {
  border-radius: 1.5rem;
}
</style>
