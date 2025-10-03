<template>
  <div class="bg-[#000032]">
    <div class="background-wow">
      <CoursesNav />
      <div>
        <Courses17VideoPlayer :toc="true" :showdetails="true" color="true" />
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

<script>
export default {
  data() {
    return {
      username: "dumb",
    };
  },
};
</script>
