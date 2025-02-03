<script setup lang="ts">
defineProps<{ percentValue: number }>();
</script>
<template>
  <div class="outer w-[50vw] md:w-[250px]">
    <div class="inner" :style="{ width: percentValue + '%' }" />
  </div>
  <p>{{ percentValue }}%</p>
</template>

<style scoped>
.outer,
.inner {
  border-radius: 20px;
}
.outer {
  height: 9px;
  border: 1px solid hsl(from var(--sec-clr) h s l / 0.8);
}
html.dark .outer {
  border-color: hsl(from var(--sec-clr) h s l / 0.2);
}
.inner {
  height: 100%;
  background: linear-gradient(
    90deg,
    hsl(from var(--sec-clr) h s l / 0.8),
    var(--sec-clr)
  );
}
p {
  color: var(--sec-clr);
  font-size: 14px;
  text-align: end;
}
</style>
