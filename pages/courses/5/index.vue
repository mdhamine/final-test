<template>
  <Courses5Videos v-if="authorized" />
  <p v-else>You don't have access to this course.</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const courses = ref([]);
const authorized = ref(false);

async function getUserCourses() {
  if (user.value) {
    const { data, error } = await supabase
      .from("courses")
      .select("courses")
      .eq("userid", user.value.id);

    if (!error && data?.length > 0) {
      courses.value = data[0].courses || [];
    }
  }
}

useHead({ title: "Courses - 5" });

onMounted(async () => {
  await getUserCourses();
  const pathSegments = window.location.pathname.split("/");
  const course_id = pathSegments[pathSegments.length - 1];
  authorized.value = courses.value.includes(course_id);
});
</script>
