<template>
  <div class="bg-[#000032]">
    <div class="hero lg:-mt-24 background-faq" id="Training">
      <div
        class="px-6 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
      >
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-white sm:text-5xl md:mx-auto"
          >
            <span class="text-[#28b0ff]"> {{ $t("training") }} </span>
            {{ $t("training2") }}
          </h2>
        </div>
        <div
          class="grid gap-4 gap-y-8 text-white md:grid-cols-2 xl:gap-16 mb-4"
        >
          <a
            aria-label="Course"
            :href="localePath('/course/1')"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/jZy2Pfx/Photo-younes-Anglais-copy.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969] mt-2">
                {{ $t("training_badge1site") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title1") }}</h2>
              <p class="text-white">
                {{ $t("training_desc1") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  @click="signup2"
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            :href="localePath('/course/2')"
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/5MMpms9/and-then-when-it-comes.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge2") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title2") }}</h2>

              <p class="text-white">
                {{ $t("training_desc2") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            :href="localePath('/course/6')"
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/LNPrr8v/PHOTO-BADIS-MAIN-PAGE.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title2") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc6") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/10')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/W4vSKmGy/c1-C2.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge3") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title2") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc12") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            :href="localePath('')"
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/jHZJy1X/ENGLISH-KIDS-MAIN.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badgekid") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_title2kid") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desckid") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmoresoon") }}
                </button>
              </div>
            </div>
          </a>
          <a
            :href="localePath('')"
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/3kSHH0k/ONE-TO-ONE.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badgeone") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_titleone") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_descone") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmoresoon") }}
                </button>
              </div>
            </div>
          </a>

          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/3')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/9nNZGR0/highest-quality-1.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title3") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc3") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/4')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/khnYRCt/sdlmqjfmlkjsdf.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge4") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title4") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc4") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/french-b')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/3d8qyQd/FRENCH-IMAGE.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge2") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title4") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc4int") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/french-C')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/QFRqbRQ5/NADA.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge3") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title4") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc4adv") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>

          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/french-spe')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/44SDJND/SPEAKING-FRENCH.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_title2spefr") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc2spefr") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/french-spe-b')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/db2Pbsp/MAROUA-B1-B2.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge2") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_title2spefr") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc2spefr") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/5')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/4mqWmRP/DSMQLJFMLSKJDFLKJSDF.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div
                class="relative lg:absolute lg:top-2 lg:right-2 top-0 right-0"
              ></div>
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge4") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title5") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc5") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/chinese')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/L9dCQJ1/PHOTO-CHINOIS.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title7") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc7") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/8')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/KxNmpDD/dslmkjfljksdf.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title8") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc8") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/korean')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/Qv8MVF1/KOREAN-PICTURE-1.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">{{ $t("training_title9") }}</h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc9") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/japanese')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/Y3qRCJy/japanese-1.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_title10") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc10") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/turkish')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/6H7GzZb/TURKISH.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_title11") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_desc11") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
          <a
            aria-label="Course"
            class="group card mx-auto w-[100%] bg-[#2885ff]/20 xl:card-side xl:h-full"
            data-aos="zoom-in-up"
            data-aos-duration="600"
            :href="localePath('/course/russian')"
          >
            <figure
              class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2"
            >
              <img
                class="w-full h-full overflow-visible object-cover h-auto"
                loading="lazy"
                src="https://i.ibb.co/s1TVjYV/PHOTO-RUSSIAN-MAIN-PAGE.jpg"
                alt="Album"
              />
            </figure>
            <div
              class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
            >
              <div class="badge bg-white font-bold text-[#020969]">
                {{ $t("training_badge1") }}
              </div>
              <h2 class="card-title text-white">
                {{ $t("training_titleruss") }}
              </h2>

              <p class="text-white" :class="{ 'text-sm': locale == 'fr' }">
                {{ $t("training_descruss") }}
              </p>
              <div class="card-actions justify-start lg:justify-end">
                <button
                  class="shine text-md rounded-full border border-[#2894ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
                >
                  {{ $t("training_learnmore") }}
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-14 flex justify-center">
          <a
            href="/listings"
            class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-6 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-12 lg:py-2"
          >
            Explore All Courses
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes animateBackgroundtrain {
  0% {
    background-position: 99% 50%, 1% 10%;
  }
  50% {
    background-position: 90% 45%, 10% 60%;
  }
  100% {
    background-position: 99% 50%, 1% 50%;
  }
}
@media only screen and (max-width: 600px) {
  .background-train {
    background-color: #fafcff;
    background-image: radial-gradient(
        at 99% 50%,
        rgba(69, 112, 255, 0.4) 0,
        transparent 65%
      ),
      radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.4) 0, transparent 65%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    animation: animateBackgroundtrain 5s infinite;
  }
}
</style>

<script setup>
const { locale } = useI18n();

const localePath = useLocalePath();
</script>

<script>
export default {
  methods: {
    signup2(event) {
      track("learn");
      // ... other logic
    },
  },
};
</script>
