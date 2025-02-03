<script setup lang="ts">
import { useThemeStore } from "./store/theme";

const themeStore = useThemeStore();
onBeforeMount(() => {
  themeStore.theme = localStorage.getItem("theme") || "dark";
  document.documentElement.className = themeStore.theme;
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
