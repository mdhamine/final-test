import { MainTraining } from '#build/components'; import { MainNextlvl } from
'#build/components'; import Mission from '~/components/Main/mission.vue';
<template>
  <main>
    <MainNavbar />
    <MainHero />
    <LazyMainMission />
    <LazyMainNextlvl />

    <LazyMainTraining />
    <LazyMainFeat />
    <LazyMainFAQs />
    <LazyMainNewsection />
    <LazyMainFooter />
  </main>
</template>

<style>
* {
  transition: all 0.25s ease-out;
  -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 20px;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 20px;
  border-radius: 20px;
  background: rgb(54, 49, 49);
}
</style>

<script setup lang="ts">
useHead({
  title: "Home",
});
</script>
