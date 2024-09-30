<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon: string;
  percentValue: number;
}>();
const percentValueHandler = computed(() => {
  if (props.percentValue < 0 || props.percentValue > 100) {
    throw createError({
      statusMessage:
        "Percent value in your skills store must be between 0 and 100",
    });
  }
  return props.percentValue;
});
</script>

<template>
  <div class="flex bg-red justify-center items-center flex-1 gap-5 w-[350px]">
    <div>
      <Icon
        :name="icon"
        :mode="'svg'"
        class="text-[15vw] md:text-7xl w-[72px] h-[72px] text-black dark:text-white"
      />
    </div>
    <div class="self-end">
      <div>{{ label }}</div>
      <div><SkillRange :percent-value="percentValueHandler" /></div>
    </div>
  </div>
</template>
