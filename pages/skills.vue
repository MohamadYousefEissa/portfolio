<script setup lang="ts">
import { useSkillsStore } from "~/store/skills";

const skillsStore = useSkillsStore();
</script>
<template>
  <div class="container mx-auto px-5 md:px-[2rem] mt-10">
    <h1 class="text-[40px] md:text-[60px] text-center mb-[6rem] font-bold">
      My Skills
    </h1>
    <div>
      <SkillInput />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-[2rem] md:gap-[5rem]"
    >
      <transition-group name="fade-list">
        <Skill
          v-for="skill in skillsStore.skills"
          :key="skill.label"
          :label="skill.label"
          :icon="skill.icon"
          :percent-value="skill.percentValue"
        />
      </transition-group>
    </div>
    <div
      class="text-center md:text-start lg:ms-[4rem] xl:ms-[1rem] 2xl:ms-[4rem]"
      v-if="skillsStore.skills.length === 0"
    >
      No Skills Found
    </div>
  </div>
</template>

<style scoped>
.fade-list-enter-from,
.fade-list-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.5s;
}
.fade-list-leave-active {
  position: absolute;
}
.fade-list-enter-to,
.fade-list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-list-move {
  transition: all 0.5s;
}
</style>
