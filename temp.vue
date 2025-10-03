<template>
  <div class="grid grid-rows-1 gap-0 h-full">
    <div
      class="items-strech justify-center rounded mt-16 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16"
    >
      <div class="grid grid-cols-1 gap-4 h-full">
        <iframe
          ref="example"
          :src="classes[locale][active].video"
          :id="'video-' + active"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          :title="classes[locale][active].title"
          class="mx-auto my-auto 3xl:w-[1600px] 3xl:h-[900px] 2xl:w-[1334px] 2xl:h-[660px] xl:w-[966px] xl:h-[543px] lg:w-[640px] lg:h-[360px] md:w-[538px] md:h-[302px] sm:w-[510px] sm:h-[287px] w-[284px] h-[160px] medium:w-[392px] medium:h-[221px] smoll:h-[194px] smoll:w-[345px] rounded-lg"
          width="100%"
          height="100%"
        ></iframe>

        <div
          class="flex flex-col justify-between group-hover:scale-105 w-full h-max"
          v-show="showdetails"
        >
          <div class="border-gray-400 border-b p-5 pb-0">
            <ul
              class="flex flex-nowrap justify-between md:justify-center -mb-px text-sm font-medium text-center text-white"
            >
              <li class="me-2">
                <a
                  :href="localePath(`/courses/1`)"
                  class="inline-flex items-center justify-center py-2 md:p-4 text-white border-b-2 border-white rounded-t-lg active group"
                  aria-current="page"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">{{
                    $t("home")
                  }}</span>
                </a>
              </li>
              <li class="me-2">
                <a
                  :href="localePath(`/courses/1/games?id=${active + 1}`)"
                  class="inline-flex items-center justify-center py-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white/40 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.9979 5C18.8639 5 21.9979 8.13401 21.9979 12C21.9979 15.7855 18.9931 18.8691 15.2385 18.9959L14.9979 19H9.00211C5.13611 19 2.00211 15.866 2.00211 12C2.00211 8.21455 5.00689 5.1309 8.76146 5.00406L9.00211 5H14.9979ZM14.75 12.5C14.0596 12.5 13.5 13.0596 13.5 13.75C13.5 14.4404 14.0596 15 14.75 15C15.4403 15 16 14.4404 16 13.75C16 13.0596 15.4403 12.5 14.75 12.5ZM7.99999 9C7.62029 9 7.3065 9.28215 7.25684 9.64823L7.24999 9.75V11.248L5.74999 11.2487C5.33578 11.2487 4.99999 11.5845 4.99999 11.9987C4.99999 12.3784 5.28214 12.6922 5.64822 12.7419L5.74999 12.7487L7.24999 12.748V14.25C7.24999 14.6642 7.58578 15 7.99999 15C8.37969 15 8.69348 14.7178 8.74314 14.3518L8.74999 14.25V12.748L10.25 12.7487C10.6642 12.7487 11 12.413 11 11.9987C11 11.6191 10.7178 11.3053 10.3518 11.2556L10.25 11.2487L8.74999 11.248V9.75C8.74999 9.33579 8.4142 9 7.99999 9ZM16.75 9C16.0596 9 15.5 9.55964 15.5 10.25C15.5 10.9404 16.0596 11.5 16.75 11.5C17.4403 11.5 18 10.9404 18 10.25C18 9.55964 17.4403 9 16.75 9Z"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">{{
                    $t("games")
                  }}</span>
                </a>
              </li>
              <li class="me-2">
                <a
                  :href="localePath(`/courses/1/quiz?id=${active + 1}`)"
                  class="inline-flex items-center justify-center py-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 transition duration-75 text-white/40 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">{{
                    $t("quiz")
                  }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="background-course">
            <div class="overflow-auto border-b p-5 pt-12">
              <h6 class="mb-2 font-semibold leading-5 text-black text-2xl py-4">
                {{ classes[locale][active].title }}
              </h6>
              <div class="relative">
                <p class="mb-3 text-md text-black p-4 rounded-md">
                  {{ desc(classes[locale][active].description) }}
                </p>
              </div>
              <div
                class="flex justify-end items-end mb-4 pr-4 px-5"
                @click="toggleShowAllDesc"
              >
                <p class="font-bold text-blue-800 cursor-pointer">
                  {{ showAllDesc ? "Show Less" : "Show All" }}
                </p>
              </div>
            </div>

            <div class="p-5 border-b">
              <div class="flex-row gap-4 flex justify-start items-center">
                <div class="flex-shrink-0">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      :src="classes.profile"
                      class="mx-auto object-cover rounded-full h-16 w-16"
                    />
                  </a>
                </div>
                <div class="flex flex-col">
                  <span class="text-lg font-medium text-gray-600">
                    {{ classes.author }}
                  </span>
                  <span class="text-xs text-gray-400">
                    {{ classes.position }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="items-center justify-center rounded background-course"
      v-show="toc"
    >
      <div
        class="mt-2 relative px-4 pb-4 pt-2 shadow-sm sm:mx-auto sm:max-w-screen-2xl sm:rounded-lg"
      >
        <div class="mx-auto w-full">
          <!-- Container -->
          <div class="py-2">
            <!-- Start of lines -->
            <div class="flex justify-between pb-4 font-bold text-black">
              <div class="text-md lg:text-md xl:text-xl">
                {{ $t("classes") }}
              </div>
              <div class="text-end">
                {{ classes.length }} {{ $t("lessons") }}
              </div>
            </div>
            <div class="relative">
              <div class="group" v-for="(item, index) in displayedClasses">
                <a
                  class="flex justify-between rounded-md p-2 text-black space-x-2 group-hover:bg-[#303030] group-hover:text-white"
                  :class="{
                    'bg-[#03070e] text-white ': active == index,
                    'rounded-b-lg': index == classes.length - 1,
                  }"
                  @click="setActive(index)"
                  :href="'#video-' + index"
                >
                  <div class="flex space-x-2 xl:space-x-4">
                    <svg
                      v-if="!item.locked"
                      class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
                      :class="{ 'fill-white': active == index }"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"
                      />
                    </svg>
                    <svg
                      v-else
                      class="flex-shrink-0 w-5 h-5 transition duration-75 text-black/40 group-hover:text-white"
                      :class="{ '  fill-white': active == index }"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p>{{ index + 1 }} {{ item.title }}</p>
                  </div>
                  <p>{{ item.duration }}</p>
                </a>
              </div>
              <!-- gradient -->
              <div
                v-if="!showAll"
                class="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#fafcff] via-[#fafcff]/80 to-transparent"
              ></div>
            </div>

            <div class="mx-auto flex w-fit space-x-2" @click="toggleShowAll">
              <p class="font-bold text-black">
                {{ showAll ? "Show Less" : "Show All Lessons" }}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-black"
                :class="{ 'rotate-180': showAll }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { logo } from "~/globalVariables.js";
const { locale, setLocale, locales } = useI18n();

const localePath = useLocalePath();
</script>

<script>
export default {
  props: {
    active: {
      type: Number,
      required: false,
      default: 0,
    },
    toc: {
      type: Boolean,
      default: true,
    },
    showdetails: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    displayedClasses() {
      const locale = this.$i18n.locale;
      return this.showAll
        ? this.classes[locale]
        : this.classes[locale].slice(0, 6);
    },
  },
  methods: {
    async setActive(index) {
      this.active = index;
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    toggleShowAllDesc() {
      this.showAllDesc = !this.showAllDesc;
    },
    desc(description) {
      if (this.showAllDesc) {
        return description;
      } else {
        let truncatedDescription = description.slice(0, 380);
        let lastSpaceIndex = truncatedDescription.lastIndexOf(" ");

        if (lastSpaceIndex === -1) {
          return truncatedDescription + "...";
        } else {
          return truncatedDescription.slice(0, lastSpaceIndex) + "...";
        }
      }
    },
  },

  data() {
    return {
      showAll: false,
      showAllDesc: false,
      classes: {
        author: "yumi denzel",
        profile: "https://i.ibb.co/749BcsH/image-1.jpg",
        position: "Foutor",
        en: [
          {
            title: ". Introduction video",
            locked: false,
            duration: "1:20",
            video:
              "https://player.vimeo.com/video/942028100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ",

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec quam a diam tristique suscipit non sed quam. Phasellus aliquet iaculis tempor. Aliquam elementum, eros consequat vestibulum bibendum, elit mauris feugiat purus, non mattis nisl lorem sit amet erat. Mauris sit amet porta lorem, a consectetur dui. Maecenas consectetur ipsum sit amet bibendum hendrerit. Mauris egestas nibh quam, consequat eleifend leo lacinia sit amet. Phasellus mollis eget sem eget dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          },
        ],
        ar: [
          {
            title: "- artitle1",
            locked: false,
            duration: "1:20",
            video:
              "https://player.vimeo.com/video/942028100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ",

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec quam a diam tristique suscipit non sed quam. Phasellus aliquet iaculis tempor. Aliquam elementum, eros consequat vestibulum bibendum, elit mauris feugiat purus, non mattis nisl lorem sit amet erat. Mauris sit amet porta lorem, a consectetur dui. Maecenas consectetur ipsum sit amet bibendum hendrerit. Mauris egestas nibh quam, consequat eleifend leo lacinia sit amet. Phasellus mollis eget sem eget dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          },
        ],
        fr: [
          {
            title: "frtitle1",
            locked: false,
            duration: "1:20",
            video:
              "https://player.vimeo.com/video/942028100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 ",

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec quam a diam tristique suscipit non sed quam. Phasellus aliquet iaculis tempor. Aliquam elementum, eros consequat vestibulum bibendum, elit mauris feugiat purus, non mattis nisl lorem sit amet erat. Mauris sit amet porta lorem, a consectetur dui. Maecenas consectetur ipsum sit amet bibendum hendrerit. Mauris egestas nibh quam, consequat eleifend leo lacinia sit amet. Phasellus mollis eget sem eget dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.background-wow {
  background-color: #000032;
  background-image: radial-gradient(
      circle at 99% 20%,
      rgba(69, 112, 255, 0.3) 0,
      transparent 15%
    ),
    radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 15%);
}

.background-course {
  background-color: #fafcff;
  animation: animateBackgroundtrain 5s infinite;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.glow {
  -webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
  -moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
  box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 0.5);
}
</style>
