<script setup lang="ts">
defineProps<{
  label: string;
  imgSrc: string;
  to: string;
}>();
</script>

<template>
  <CardContainer>
    <div
      class="flex flex-col flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl sm:p-6 dark:bg-gray-900/50"
    >
      <div>
        <a :href="to" target="_blank" class="focus:outline-none" tabindex="-1"
          ><span class="absolute inset-0"></span
        ></a>

        <p class="text-base font-bold text-gray-900 truncate dark:text-white">
          {{ label }}
        </p>

        <div>
          <NuxtImg
            :src="imgSrc"
            format="webp"
            class="rounded-md mt-4"
            densities="x1"
            :placeholder="[350]"
          />
        </div>
      </div>
    </div>
  </CardContainer>
</template>
