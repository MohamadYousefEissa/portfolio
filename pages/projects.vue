<script setup lang="ts">
import projects from "~/store/projects";
</script>
<template>
  <div class="container mx-auto px-5 md:px-[2rem] mt-10">
    <h1 class="text-[40px] md:text-[60px] text-center mb-[6rem] font-bold">
      My Projects
    </h1>
    <div class="flex flex-wrap justify-center gap-10">
      <CardBorder
        v-for="project in projects"
        :key="project.label"
        :label="project.label"
        :img-src="project.imgSrc"
        :to="project.to"
      />
    </div>
  </div>
</template>
