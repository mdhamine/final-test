<script setup>
import { ref, onMounted } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const loggedIn = ref(false);
const courses = ref([]);
const courseMap = {
  1: {
    tag: "training_badge1",
    title: "training_title1",
    description: "training_desc1",
    imageUrl: "https://i.ibb.co/jZy2Pfx/Photo-younes-Anglais-copy.jpg",
  },
  2: {
    tag: "training_badge2",
    title: "training_title2",
    description: "training_desc2",
    imageUrl: "https://i.ibb.co/5MMpms9/and-then-when-it-comes.jpg",
  },
  3: {
    tag: "training_badge1",
    title: "training_title3",
    description: "training_desc3",
    imageUrl: "https://i.ibb.co/9nNZGR0/highest-quality-1.jpg",
  },
  4: {
    tag: "training_badge4",
    title: "training_title4",
    description: "training_desc4",
    imageUrl: "https://i.ibb.co/khnYRCt/sdlmqjfmlkjsdf.jpg",
  },
  5: {
    tag: "training_badge4",
    title: "training_title5",
    description: "training_desc5",
    imageUrl: "https://i.ibb.co/4mqWmRP/DSMQLJFMLSKJDFLKJSDF.jpgÒ",
  },
  6: {
    tag: "training_badge1",
    title: "training_title2",
    description: "training_desc6",
    imageUrl: "https://i.ibb.co/LNPrr8v/PHOTO-BADIS-MAIN-PAGE.jpg",
  },
  7: {
    tag: "training_badge1",
    title: "training_title7",
    description: "training_desc7",
    imageUrl: "https://i.ibb.co/L9dCQJ1/PHOTO-CHINOIS.jpg",
  },
  8: {
    tag: "training_badge1",
    title: "training_title8",
    description: "training_desc8",
    imageUrl: "https://i.ibb.co/KxNmpDD/dslmkjfljksdf.jpg",
  },
  9: {
    tag: "training_badge1",
    title: "training_title9",
    description: "training_desc9",
    imageUrl: "https://i.ibb.co/Qv8MVF1/KOREAN-PICTURE-1.jpg",
  },
  10: {
    tag: "training_badge2",
    title: "training_title4",
    description: "training_desc4",
    imageUrl: "https://i.ibb.co/3d8qyQd/FRENCH-IMAGE.jpg",
  },
  11: {
    tag: "training_badge2",
    title: "training_title4",
    description: "training_desc4",
    imageUrl: "https://i.ibb.co/44SDJND/SPEAKING-FRENCH.jpg",
  },
  12: {
    tag: "training_badge1",
    title: "training_title11",
    description: "training_desc11",
    imageUrl: "https://i.ibb.co/6H7GzZb/TURKISH.jpg",
  },
  13: {
    tag: "training_badge1",
    title: "training_title2",
    description: "training_desc12",
    imageUrl: "https://i.ibb.co/qrPPQWt/HABIB-ELLAH.jpg",
  },
  14: {
    tag: "training_badge1",
    title: "training_title10",
    description: "training_desc10",
    imageUrl: "https://i.ibb.co/Y3qRCJy/japanese-1.jpg",
  },
  15: {
    tag: "training_badge2",
    title: "training_title4",
    description: "training_desc4",
    imageUrl: "https://i.ibb.co/db2Pbsp/MAROUA-B1-B2.jpg",
  },
  16: {
    tag: "training_badge1",
    title: "training_title4",
    description: "training_desc4",
    imageUrl: "https://i.ibb.co/s1TVjYV/PHOTO-RUSSIAN-MAIN-PAGE.jpg",
  },
  17: {
    tag: "training_badge3",
    title: "training_title4",
    description: "training_desc4adv",
    imageUrl: "https://i.ibb.co/QFRqbRQ5/NADA.jpg",
  },
};

async function getUserCourses() {
  if (user.value) {
    const { data, error } = await supabase
      .from("courses")
      .select("courses")
      .eq("userid", user.value.id);

    if (error) {
      console.error("Error fetching user courses:", error.message);
    } else if (data && data.length > 0) {
      courses.value = data[0].courses || [];
    }
  }
}

onMounted(async () => {
  await getUserCourses();
  loggedIn.value = !!user.value;
});
</script>

<template>
  <div
    class="grow flex gap-4 items-center justify-center w-full h-full background-wow bg-white p-8"
  >
    <div
      v-if="!loggedIn"
      class="text-6xl font-bold text-white mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16"
    >
      <NuxtLink
        href="/login"
        class="text-center flex items-center justify-center w-64 h-32"
      >
        Login to continue
      </NuxtLink>
    </div>
    <div
      v-else-if="courses.length === 0"
      class="flex flex-col items-center gap-8 mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16"
    >
      <div class="text-6xl font-bold text-white text-center">
        Hello
        <span class="text-sky-400">{{ user.user_metadata.first_name }}</span
        >, looks like you don't have any courses yet!
      </div>
    </div>
    <div
      v-else
      class="flex flex-col gap-16 mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16"
    >
      <div class="text-center xl:text-6xl text-5xl font-bold text-white">
        {{ $t("hellolog") }}
        <span class="text-sky-400">{{ user.user_metadata.first_name }}</span
        >,{{ $t("chooselog") }}
      </div>

      <div
        class="flex items-center justify-center w-full h-full flex-wrap gap-16"
      >
        <NuxtLink v-for="id in courses" :key="id" :href="`/courses/${id}`">
          <CourseCard v-bind="courseMap[id]" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-wow {
  background-color: #000032;
  background-image: radial-gradient(
      at 99% 50%,
      rgba(69, 112, 255, 0.7) 0,
      transparent 65%
    ),
    radial-gradient(at 1% 1%, rgba(40, 204, 255, 0.7) 0, transparent 65%);
}
</style>
