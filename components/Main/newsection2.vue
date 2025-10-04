<template>
  <section class="bg-[#f7faff] py-16 text-center">
    <p class="text-gray-600 mb-2">Toujours hésitant ?</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      Découvrez nos contenus <span class="text-blue-500">gratuits</span>
    </h2>
    <p class="max-w-3xl mx-auto text-gray-500 mb-12">
      Nos mini formations gratuites vous aideront à développer des fondations
      solides dans les domaines du développement personnel, du business en
      ligne, de l’entrepreneuriat et de l’investissement.
    </p>

    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Left arrow -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100"
      >
        <span class="text-xl">‹</span>
      </button>

      <!-- Cards container -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="min-w-full md:min-w-[33.33%] px-4"
          >
            <div class="bg-white shadow-lg rounded-2xl p-6 text-left">
              <img :src="card.image" class="rounded-xl mb-4 w-full" alt="" />
              <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
              <p class="text-gray-500 mb-6">{{ card.desc }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
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
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100"
      >
        <span class="text-xl">›</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const currentIndex = ref(0);
const cards = ref([
  {
    title: "Le E-Commerce 2.0",
    image: "https://via.placeholder.com/400x200/ccf/000?text=E-Commerce",
    desc: "Découvrez l’E-Commerce 2.0, les bases du business en ligne et comment lancer votre propre boutique.",
  },
  {
    title: "L’Investissement Immobilier",
    image: "https://via.placeholder.com/400x200/cce/000?text=Immobilier",
    desc: "Une formation introductive au milieu de l’investissement immobilier pour bâtir votre patrimoine.",
  },
  {
    title: "Le Business et l'IA",
    image: "https://via.placeholder.com/400x200/ddf/000?text=Business+IA",
    desc: "Apprenez à lancer votre business grâce au pouvoir de l’intelligence artificielle.",
  },
  {
    title: "Le Développement Personnel",
    image: "https://via.placeholder.com/400x200/bdf/000?text=Développement",
    desc: "Renforcez votre mental et vos compétences pour réussir dans tous les domaines de la vie.",
  },
]);

function nextSlide() {
  if (currentIndex.value < cards.value.length - 3) {
    currentIndex.value++;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
</script>

<style scoped>
section {
  border-radius: 1.5rem;
}
</style>
