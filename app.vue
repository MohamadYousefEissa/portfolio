<script setup lang="ts">
import { useTheme } from "./store/theme";

onBeforeMount(() => {
  const theme = useTheme();
  theme.value = localStorage.getItem("theme") || "dark";
  document.documentElement.classList.add(theme.value);
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
