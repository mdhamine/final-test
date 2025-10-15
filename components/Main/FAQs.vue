<template>
  <div class="bg-[#000032]">
    <div
      class="from-[#dae6ff] to-90% via-30% via-[#fafcff] from-10% to-[#dae6ff] bg-gradient-to-b rounded-t-[50px] background-train"
    >
      <div class="px-4 py-16 mx-auto md:px-6 lg:px-12 lg:py-20" id="form">
        <div class="max-w-6xl sm:mx-auto lg:max-w-6xl px-4">
          <div class="flex flex-col mb-6 sm:text-center">
            <div class="max-w-xl md:mx-auto text-center lg:max-w-5xl">
              <h4
                class="max-w-lg font-sans text-md leading-none tracking-tight text-black md:mx-auto"
              ></h4>
              <h2
                class="max-w-lg my-1 py-4 font-sans text-4xl font-semibold leading-none tracking-tight text-black sm:text-5xl md:mx-auto"
              >
                {{ $t("discover") }}
                <span class="text-[#28CCFF]">{{ $t("free") }}</span>
              </h2>
              <h2
                class="max-w-lg font-normal text-lg leading-none tracking-tight text-black/80 md:mx-auto"
              >
                {{ $t("hesistantdesc") }}
              </h2>
            </div>
          </div>
          <CalendlyInlineWidget
            v-bind="options"
            style="
              overflow: hidden !important;
              background-color: #00000000 !important;
              min-width: 200px;
            "
            class="mb-12 lg:mb-32 bg-transparent h-full max-h-[700px] min-w-[200px] sm:min-w-[300px]"
          />
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mx-auto px-4 py-6"
          >
            <!-- Left Column -->
            <div
              class="flex flex-col items-stretch justify-stretch w-full space-y-4"
            >
              <div
                class="group"
                v-for="(item, i) in items[locale].slice(0, 2)"
                :key="i"
              >
                <button
                  @click="toggle(i)"
                  type="button"
                  aria-label="Open item"
                  title="Open item"
                  class="flex flex-col items-center justify-between w-full p-4 rounded-[25px] bg-white border-[3px]"
                  :class="{
                    'border-[#5998ff]': active.includes(i),
                    'border-blue-200': !active.includes(i),
                  }"
                >
                  <div
                    class="flex flex-row items-center w-full justify-between"
                  >
                    <div class="flex-grow flex items-center w-full">
                      <div class="px-3 py-2">
                        <MainSVGS :type="i + 1" class="size-12 my-auto" />
                      </div>
                      <p
                        class="flex items-center justify-between text-xl md:text-2xl font-medium text-start text-center justify-self-start text-[#1c8eff]"
                      >
                        {{ item.title }}
                      </p>
                    </div>
                    <div
                      class="flex items-center justify-center size-10 m-1 p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-16 transition-transform duration-200 stroke-2"
                        :class="
                          active.includes(i)
                            ? 'transform rotate-180 text-[#5998ff]'
                            : 'text-blue-200'
                        "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <transition name="accordion-transition">
                    <div
                      v-show="active.includes(i)"
                      class="p-1 pt-0 accordion-content rounded-b-[25px] bg-white text-black"
                    >
                      <p
                        :class="{
                          'zoom-in': active.includes(i),
                          'zoom-out': !active.includes(i),
                        }"
                        class="text-start"
                      >
                        {{ item.content }}
                      </p>
                    </div>
                  </transition>
                </button>
              </div>
            </div>

            <!-- Right Column -->
            <div
              class="flex flex-col items-stretch justify-stretch w-full space-y-4"
            >
              <div
                class="group"
                v-for="(item, i) in items[locale].slice(2, 4)"
                :key="i"
              >
                <button
                  @click="toggle(i + 2)"
                  type="button"
                  aria-label="Open item"
                  title="Open item"
                  class="flex flex-col items-center justify-between w-full p-4 rounded-[25px] bg-white border-[3px] transition-transform duration-300"
                  :class="{
                    'border-[#5998ff]': active.includes(i + 2),
                    'border-blue-200': !active.includes(i + 2),
                  }"
                >
                  <div
                    class="flex flex-row items-center w-full justify-between"
                  >
                    <div class="flex-grow flex items-center w-full">
                      <div class="px-3 py-2">
                        <MainSVGS :type="i + 3" class="size-12 my-auto" />
                      </div>
                      <p
                        class="text-xl md:text-2xl font-medium text-start text-[#1c8eff] flex items-center justify-center"
                      >
                        {{ item.title }}
                      </p>
                    </div>
                    <div
                      class="flex items-center justify-center size-10 m-1 p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-16 transition-transform duration-200 stroke-2"
                        :class="
                          active.includes(i + 2)
                            ? 'transform rotate-180 text-[#5998ff]'
                            : 'text-blue-200'
                        "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <transition name="accordion-transition">
                    <div
                      v-show="active.includes(i + 2)"
                      class="p-1 pt-0 accordion-content rounded-b-[25px] bg-white text-black"
                    >
                      <p
                        :class="{
                          'zoom-in': active.includes(i + 2),
                          'zoom-out': !active.includes(i + 2),
                        }"
                        class="text-start"
                      >
                        {{ item.content }}
                      </p>
                    </div>
                  </transition>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
<script>
export default {
  data() {
    return {
      options: {
        url: "https://calendly.com/fluentlymeeting/15min?hide_gdpr_banner=1&primary_color=28ccff/",
      },
      active: [],
      items: {
        en: [
          {
            title: "What is it ?",
            content:
              "Fluently is a comprehensive program designed to make language learning accessible, engaging, and effective for everyone, regardless of your background, knowledge, or starting skills.",
          },
          {
            title: "Why choose it ?",
            content:
              "The goal of Fluently is to provide the keys to anyone determined to benefit from the revolution in language learning 2.0 and master a new language, with the aim of enriching their personal and professional skills, or even opening up new career opportunities.",
          },

          {
            title: "Who's it for ?",
            content:
              "This training is aimed at two types of people: beginners who have no knowledge of a language, and experts who want to improve their level.",
          },
          {
            title: "How do you follow it ?",
            content:
              "The program is 100% online and designed to be completed in 6 weeks. However, you can follow it at your own pace and start whenever you want. Your access is unlimited and valid for life",
          },
        ],
        ar: [
          {
            title: "ما هذا ؟",
            content:
              "هو برنامج شامل مصمم لجعل عملية تعلم اللغات متاحة وجذابة وفعالة للجميع، بغض النظر عن خلفيتك، معرفتك، أو المهارات التي تبدأ بها ",
          },
          {
            title: "لماذا تختاره ؟",
            content:
              "الهدف هو توفير المفاتيح لأي شخص عازم على الاستفادة من ثورة تعلم اللغات 2.0 وإتقان لغة جديدة، بهدف إثراء مهاراتهم الشخصية والمهنية، أو حتى فتح فرص مهنية جديدة لهم",
          },

          {
            title: "لمن تم تصميمه ؟",
            content:
              "هذا التدريب موجه لنوعين من الأشخاص: المبتدئين الذين ليس لديهم أي معرفة باللغة، والخبراء الذين يرغبون في تحسين مستواهم",
          },
          {
            title: "كيف تتبعه ؟",
            content:
              "البرنامج متاح بنسبة 100% عبر الإنترنت ومصمم للانتهاء منه في مدة 6 أسابيع. ومع ذلك، يمكنك متابعته بالسرعة التي تناسبك والبدء في أي وقت تشاء. لديك إمكانية الوصول غير المحدودة وصالحة مدى الحياة",
          },
        ],
        fr: [
          {
            title: "Qu’est-ce que c’est ?",
            content:
              " Fluently est un programme complet conçu pour rendre l'apprentissage des langues accessible, engageant et efficace pour tous, quels que soient votre parcours, vos connaissances ou vos compétences de départ.",
          },
          {
            title: "Pourquoi la choisir ?",
            content:
              "Le but de Fluently est de donner les clés à toute personne déterminée pour profiter de la révolution de l'apprentissage des langues 2.0 et maîtriser une nouvelle langue, dans le but d'enrichir ses compétences personnelles et professionnelles, voire d'ouvrir de nouvelles opportunités de carrière.",
          },

          {
            title: "À qui elle s’adresse ?",
            content:
              "Cette formation s’adresse à 2 types de personnes: les débutants qui n’ont aucune connaissance dans une langue et ainsi que les experts qui veulent améliorer leurs niveau.",
          },
          {
            title: "Comment la suivre ?",
            content:
              "Le programme est 100% en ligne et conçu pour être suivi en 6 semaines. Cependant, vous pouvez le suivre à votre rythme et le commencer quand vous voulez. Vos accès sont illimités et valables à vie.",
          },
        ],
      },
    };
  },
  methods: {
    toggle(i) {
      const index = this.active.indexOf(i);
      if (index > -1) {
        this.active.splice(index, 1);
      } else {
        this.active.push(i);
      }
    },
  },
};
</script>

<style scoped>
.accordion-transition-enter-active,
.accordion-transition-leave-active {
  transition: max-height 0.6s ease-out, opacity 0.6s ease-out;
}

.accordion-transition-enter-from,
.accordion-transition-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-transition-enter-to,
.accordion-transition-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.background-faq {
  background-color: #000032;
  background-image: radial-gradient(
      at 99% 50%,
      rgba(69, 112, 255, 0.4) 0,
      transparent 65%
    ),
    radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
  animation: animateBackgroundtrain 5s infinite;
}

.zoom-in {
  animation: zoomIn 0.5s ease-in-out;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.zoom-out {
  animation: zoomOut 0.6s ease-in-out;
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.5);
  }
}
</style>
