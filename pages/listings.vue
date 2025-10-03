<template>
    <main>
      <MainNavbar />
      <div class=" py-2 bg-[#000032]">
      
        <div class="relative text-white py-44 text-center background"> 
          <h1 class="text-4xl font-bold mb-2">{{$t('listingtitle')}}</h1>
           <div class="mx-4 pt-5  lg:mx-64">
            <p class="text-lg text-center">{{$t('listingdesc')}}</p>
          </div>
          
        </div>
      
      
  
      
        <div class=" hero bg-[#000032] ">
        <div class="flex flex-col lg:flex-row w-full lg:w-11/12 mx-auto pb-12 lg:gap-14 ">
  
  
          <aside
            :class="{
              'fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center': showSidebar,
              'w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-12': !showSidebar
            } + ' bg-[#2885ff]/20 h-full border-1 border-[#2885ff] p-6 mx-6 text-white rounded-3xl transition-all duration-300 lg:sticky lg:top-16'"
            style="overflow-auto"
          >
            <div class="flex justify-between items-center lg:hidden">
           
              <button @click="toggleSidebar" class="text-2xl text-white"></button>
            </div>
  
            <div>
              <h3 class="text-lg font-bold mb-4 text-[#28CCFF]">Filter by language</h3>
              <div class="mb-6" v-for="language in languages" :key="language">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :value="language"
                    v-model="filters.languages"
                    class="form-checkbox rounded-md bg-[#2893ff]/40 text-[#28CCFF]"
                  />
                  <span class="ml-2">{{ capitalize(language) }}</span>
                </label>
              </div>
  
              <h3 class="text-lg font-bold mb-4 text-[#28CCFF]">Filter by level</h3>
              <div class="mb-6" v-for="level in levels" :key="level">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :value="level"
                    v-model="filters.levels"
                    class="form-checkbox rounded-md bg-[#2893ff]/40 text-[#28CCFF] appearance-none"
                  />
                  <span class="ml-2">{{ capitalize(level) }}</span>
                </label>
              </div>
  
              <h3 class="text-lg font-bold mb-4 text-[#28CCFF]">Filter by type</h3>
              <div class="mb-6" v-for="type in types" :key="type">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="filters.types"
                    class="form-checkbox rounded-md bg-[#2893ff]/40 text-[#28CCFF]"
                  />
                  <span class="ml-2">{{ capitalize(type) }}</span>
                </label>
              </div>
  
              <h3 class="text-lg font-bold mb-4 text-[#28CCFF]">Filter by availability</h3>
              <div class="mb-6" v-for="availability in availabilities" :key="availability">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :value="availability"
                    v-model="filters.availability"
                    class="form-checkbox rounded-md bg-[#2893ff]/40 text-[#28CCFF]"
                  />
                  <span class="ml-2">{{ capitalize(availability) }}</span>
                </label>
              </div>
  
              <button
                @click="resetFilters"
                class="w-full mt-4 px-3 font-medium text-center shine text-white bg-[#2893ff]/40 border border-[#2893ff] rounded-full text-md hover:bg-[#2893ff]/80"
              >
                Show All
              </button>
            </div>
          </aside>
  
          <section class="w-full lg:w-3/4">
            <div class="flex items-center justify-center mt-7 font-bold text-3xl text-white" v-if="filteredCourses.length === 0">  Coming Soon ! </div>
            <div class="grid gap-4 gap-y-8 text-white sm:grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
              <a
                v-for="course in filteredCourses"
                :key="course.id"
                :href="localePath(course.link)"
                class="group card mx-auto bg-[#2885ff]/20 xl:card-side xl:h-auto p-1  mt-6 sm:w-11/12 md:w-11/12 lg:w-full" 
                data-aos="zoom-in-up"
                data-aos-duration="600"
              >
                <figure
                  class="w-full rounded-t-xl border-x-2 border-t-2 border-[#45E8FF] xl:w-1/2 xl:scale-105 xl:rounded-xl xl:border-2" 
         
                >
                  <img
                    :src="course.image"
                    class="w-full h-full" 
                    loading="lazy"
                  />
                </figure>
                <div
                  class="card-body rounded-b-xl border-x-2 border-b-2 border-[#45E8FF] text-gray-400 ring-[#28CCFF] group-hover:bg-[#2885ff]/60 group-hover:ring-2 xl:w-2/3 xl:rounded-e-xl xl:rounded-s-none xl:border-0"
                >
                  <div class="badge bg-white font-bold text-[#020969]">{{$t(course.badge)}}</div>
                  
                  <h2 class="card-title text-white text-sm">{{$t(course.title)}}</h2> 
                  
                  <p class="text-white text-xs">{{$t(course.description)}}</p> 
                  <div class="card-actions justify-start lg:justify-end">
                    <button
                      @click="signup2"
                      class="shine text-md rounded-full border border-[#2893ff] bg-[#2893ff]/40 px-2 py-1 text-center font-medium text-white hover:bg-[#2893ff]/80 lg:px-4 lg:py-1"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
       </div>      
      </div>
      <MainFooter />
    </main>
  </template>
  
  <script>
  import courses from './listing'; 
  
  export default {
    data() {
      return {
        filters: {
          languages: [],
          levels: [],
          types: [],
          availability: [],
        },
        showSidebar: false,
        languages: ['english', 'french', 'german', 'spanish', 'italian', 'chinese', 'japanese', 'korean', 'turkish', 'russian'],
        levels: ['beginner', 'intermediate', 'advanced'],
        types: ['on-site', 'zoom'],
        availabilities: ['open', 'close'],
        courses, 
        showis: false,
      };
    },
    computed: {
      filteredCourses() {
        return this.courses.filter((course) => {
          const matchLanguage = this.filters.languages.length === 0 || this.filters.languages.includes(course.language);
          const matchLevel = this.filters.levels.length === 0 || this.filters.levels.includes(course.level);
          const matchType = this.filters.types.length === 0 || this.filters.types.includes(course.type);
          const matchAvailability = this.filters.availability.length === 0 || this.filters.availability.includes(course.availability);
          return matchLanguage && matchLevel && matchType && matchAvailability;
        });
      },
    },
    methods: {
      show(){
      if (this.showis == false) {
        this.showis = true;
      }else{
      this.showis =  false;
      }
      },
      resetFilters() {

        this.filters.languages = [];
        this.filters.levels = [];
        this.filters.types = [];
        this.filters.availability = [];
    
      },
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    },
  };
  </script>
  
  
  <style>
  .background {
    position: relative;
    width: 100%;
    height: 100%; 
    background-image: radial-gradient(
            circle at 99% 50%,
            rgba(69, 112, 255, 0.6) 0,
            transparent 8% /* Further decreased radius */
        ),
        radial-gradient(circle at 1% 10%, rgba(40, 204, 255, 1) 0, transparent 13% /* Further decreased radius */);
    background-size: 200% 200%; /* Adjust to control the size of the gradients */
    animation: animateBackground 7s infinite;
    border-radius: 8px; /* Optional, to give the div rounded corners */
  }
  
  
  @keyframes animateBackground {
      0% {
          background-position: 99% 50%, 1% 10%;
          opacity: 1;
      }
      25% {
          background-position: 99% 50%, 1% 10%;
          opacity: 1;
      }
      50% {
          background-position: 80% 40%, 50% 30%;
          opacity: 0.5;
      }
      75% {
          background-position: 99% 50%, 1% 10%;
          opacity: 1;
      }
      100% {
          background-position: 99% 50%, 1% 10%;
          opacity: 1;
      }
  }
  
  .glow {
      -webkit-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
      -moz-box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
      box-shadow: 0px 0px 116px 2px rgba(33, 213, 249, 1);
  }
  </style>
