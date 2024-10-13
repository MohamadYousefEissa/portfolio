<script setup lang="ts">
import { themeStore } from "./store/theme";
onBeforeMount(() => {
  const useTheme = themeStore();
  useTheme.theme = localStorage.getItem("theme") || "dark";
  document.documentElement.className = useTheme.theme;
});
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
