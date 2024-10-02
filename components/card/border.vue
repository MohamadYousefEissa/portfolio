<script setup lang="ts">
defineProps<{
  label: string;
  imgSrc: string;
  to: string;
}>();
</script>

<template>
  <CardContainer>
    <NuxtLink :to="to">
      <div
        class="flex flex-col flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl sm:p-6 dark:bg-gray-900/50"
      >
        <div>
          <p class="text-base font-bold text-gray-900 truncate dark:text-white">
            {{ label }}
          </p>
          <div>
            <NuxtImg
              :src="imgSrc"
              format="webp"
              sizes="560px"
              width="304"
              height="171"
              quality="100"
              class="rounded-md mt-4"
            />
          </div>
        </div>
      </div>
    </NuxtLink>
  </CardContainer>
</template>
