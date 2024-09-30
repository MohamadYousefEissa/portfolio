<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon?: string;
  imgSrc?: string;
  percentValue: number;
}>();
const fixPrecentValue = computed(() => {
  if (props.percentValue < 0) return 0;
  if (props.percentValue > 100) return 100;
  return props.percentValue;
});
</script>

<template>
  <div class="flex bg-red justify-center items-center flex-1 gap-5 w-[350px]">
    <div v-if="icon">
      <Icon :name="icon" class="text-[15vw] md:text-7xl w-[72px] h-[72px]" />
    </div>
    <div v-if="imgSrc">
      <NuxtImg class="w-[72px] h-[72px]" :src="imgSrc" :placeholder="[72]" />
    </div>
    <div class="self-end">
      <div>{{ label }}</div>
      <div><SkillRange :percent-value="fixPrecentValue" /></div>
    </div>
  </div>
</template>
