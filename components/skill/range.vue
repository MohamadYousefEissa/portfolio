<script setup lang="ts">
defineProps<{ percentValue: number }>();
</script>
<template>
  <div class="outer w-[50vw] md:w-[250px]">
    <div class="inner" :style="{ width: percentValue + '%' }"></div>
  </div>
  <p>{{ percentValue }}%</p>
</template>

<style scoped>
.outer,
.inner {
  border-radius: 20px;
}
.outer {
  border: 1px solid rgb(44, 44, 44);
  height: 15px;
  padding: 3px;
}
.inner {
  height: 100%;
  background-color: var(--sec-clr);
}
p {
  color: gray;
  font-size: 14px;
  text-align: end;
}
</style>
