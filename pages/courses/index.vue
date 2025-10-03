<template>
    <div class="flex flex-col w-screen min-h-screen">
        <MainNavbar />
        <div class="mt-16 xl:mt-0"></div>
        <CoursesAllCourses />
    </div>
</template>

<script setup>
useHead({
	title: 'Courses',
});
</script>