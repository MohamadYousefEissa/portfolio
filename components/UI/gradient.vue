<template>
  <canvas
    :style="{ isolation: 'isolate', height: '100%', width: '100%' }"
    class="position-fixed z-n1"
    ref="canvasRef"
  ></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NeatGradient } from "@firecms/neat";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gradientRef = ref<NeatGradient | null>(null);

onMounted(() => {
  if (!canvasRef.value) return;

  gradientRef.value = new NeatGradient({
    ref: canvasRef.value,
    colors: [
      {
        color: "#18181b",
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
    colorBrightness: 0.5,
    colorSaturation: 0,
    colorBlending: 10,
    backgroundColor: "#18181b",
    backgroundAlpha: 1,
    resolution: 1,
  });
});
</script>
