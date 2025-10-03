<template>
  <section
    class="bg-gradient-to-b from-[#1a2a6c] via-[#162245] to-[#0a0a2a] py-16 px-4"
  >
    <div class="max-w-6xl mx-auto text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-white">
        Ils ont atteint leurs <span class="text-blue-400">objectifs</span>
      </h2>
      <p class="mt-2 text-gray-300 font-medium">
        <span class="text-white">Excellent</span> · 4.5 sur 5 ·
        <span class="text-green-400">★ Trustpilot</span>
      </p>
    </div>

    <!-- Testimonials -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="(t, i) in visibleTestimonials"
        :key="i"
        class="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 text-left"
      >
        <div class="flex items-center gap-2 mb-2">
          <span class="font-bold">{{ t.name }}</span>
          <span class="text-sm text-gray-500">{{ t.date }}</span>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ t.text }}
        </p>
      </div>
    </div>

    <!-- Button -->
    <div class="flex justify-center mt-12">
      <button
        @click="showAll = !showAll"
        class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-white font-medium py-3 px-6 rounded-full shadow-lg"
      >
        {{
          showAll
            ? "Afficher moins de témoignages"
            : "Afficher plus de témoignages"
        }}
      </button>
    </div>

    <!-- Disclaimer -->
    <p class="text-center text-gray-300 mt-8">
      Tous ces résultats ne sont pas des promesses de gains
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const testimonials = ref([
  {
    name: "Marvin",
    date: "05/05/2023 20:31",
    text: "J’ai d’ailleurs reçu les fruits de mon travail aujourd’hui ! Tunnel de vente, copy, graphisme, automatisations.",
  },
  {
    name: "Carlos",
    date: "11/07/2023 12:27",
    text: "Petit témoignage de remerciement à l’équipe Business Pro. Premier mois en solo CA à 6k, premier dans une équipe à 25k.",
  },
  {
    name: "jules88",
    date: "08/08/2023 15:56",
    text: "En 15 ans, je n’ai pas touché un seul euro, mais aujourd’hui ça y est. Preuve que cette formation peut tout changer 💪.",
  },
  {
    name: "Geoffrey",
    date: "20:04",
    text: "Avant tout, MERCI ANAS ! Formation incroyable avec des résultats concrets.",
  },
  {
    name: "fabris04",
    date: "26/05/2023 21:16",
    text: "Merci à toute l’équipe Mindeo pour ce monument pédagogique.",
  },
]);

const showAll = ref(false);

const visibleTestimonials = computed(() => {
  return showAll.value ? testimonials.value : testimonials.value.slice(0, 3);
});
</script>
