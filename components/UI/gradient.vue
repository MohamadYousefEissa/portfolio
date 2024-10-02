<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup lang="ts">
import { NeatGradient } from "@firecms/neat";
import { useTheme } from "~/store/theme";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gradientRef = ref<NeatGradient | null>(null);
const theme = useTheme();
const gradientBackground = computed(() => {
  if (theme.value === "dark") return "#111";
  return "#fff";
});
const generateGradient = (bgColor: string) => {
  if (!canvasRef.value) return;
  gradientRef.value = new NeatGradient({
    ref: canvasRef.value,
    colors: [
      {
        color: bgColor,
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
};
watch(theme, () => {
  gradientRef.value?.destroy();
  if (theme.value === "dark") generateGradient("#111");
  else generateGradient("#fff");
});
onMounted(() => {
  generateGradient(gradientBackground.value);
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
