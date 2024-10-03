<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup lang="ts">
import { NeatGradient } from "@firecms/neat";
import { themeStore } from "~/store/theme";
const canvasRef = ref<HTMLCanvasElement | null>(null);
const gradientRef = ref<NeatGradient | null>(null);
const useTheme = themeStore();
const { theme } = storeToRefs(useTheme);
const bgColor = ref<string>(useTheme.gradientColor);
watch(theme, () => {
  if (useTheme.theme === "dark") bgColor.value = "#111";
  else bgColor.value = "#fff";
  gradientRef.value!.colors = [
    {
      color: bgColor.value,
      enabled: false,
    },
    {
      color: "#38BDF8",
      enabled: true,
    },
  ];
});
onMounted(() => {
  if (!canvasRef.value) return;
  gradientRef.value = new NeatGradient({
    ref: canvasRef.value,
    colors: [
      {
        color: bgColor.value,
        enabled: false,
      },

      {
        color: "#38BDF8",
        enabled: true,
      },
    ],
    speed: 10,
    horizontalPressure: 6,
    verticalPressure: 6,
    waveFrequencyX: 0,
    waveFrequencyY: 0,
    waveAmplitude: 0,
    shadows: 0,
    highlights: 0,
    colorBrightness: 1,
    colorSaturation: -4,
    colorBlending: 10,
    resolution: 1,
  });
});
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  isolation: isolate;
  z-index: -1;
}
</style>
