<script setup lang="ts">
import { useSkillsStore } from "~/store/skills";

const skillStore = useSkillsStore();
const inputValue = ref<string>("");
const timeout = ref();

watch(inputValue, () => {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    skillStore.filterSkills(inputValue.value);
  }, 300);
});
</script>
<template>
  <div
    class="flex justify-center md:justify-start lg:ms-[4rem] xl:ms-[1rem] 2xl:ms-[4rem] pb-8"
  >
    <label
      class="flex relative items-center border-2 dark:border rounded-md pe-6 w-10/12 md:w-[325px]"
      for="search-input"
      aria-label="search-icon"
    >
      <Icon
        name="material-symbols:search"
        class="ms-2 text-xl select-none"
        :class="{
          'text-stone-600 dark:text-stone-400': inputValue.length === 0,
          'text-[var(--main-clr)]': inputValue.length > 0,
        }"
      />
      <input
        type="text"
        id="search-input"
        placeholder="Search for skills"
        autocomplete="off"
        v-model.trim="inputValue"
      />
      <Icon
        name="material-symbols:close"
        class="absolute right-2 cursor-pointer"
        v-if="inputValue.length > 0"
        @click="inputValue = ''"
      />
    </label>
  </div>
</template>

<style scoped>
label {
  border-color: hsl(from var(--sec-clr) h s l / 0.6);
}
html.light label {
  border-color: var(--sec-clr);
}
input {
  background-color: transparent;
  padding: 5px 10px;
  text-align: start;
  width: 100%;
  cursor: default;
  outline: 0;
}
input::placeholder {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.7px;
}
html.light input::placeholder {
  color: #000000c8;
  font-weight: 400;
}
</style>
