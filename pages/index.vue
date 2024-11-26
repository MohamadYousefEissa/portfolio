<template>
  <section class="mt-[4rem] md:mt-[6rem] xl:mt-[10rem]">
    <div class="flex flex-col items-center text-center p-1">
      <h1 class="tracking-tight leading-tight w-full lg:w-10/12">
        Hello I'am Mohamad Yousef Eissa Front&minus;End Devoloper
      </h1>
      <p
        class="w-11/12 text-sm md:text-base lg:w-8/12 xl:w-6/12 my-5 text-stone-700 dark:text-stone-400"
      >
        My journey in software development is driven by creativity and a keen
        eye for detail, ensuring every project I work on is both functional and
        beautiful.
      </p>
      <div class="mt-5 flex gap-5">
        <NuxtLink to="/projects"><UIButton>My Projects</UIButton></NuxtLink>
        <NuxtLink to="/skills"><UIButton>My skills</UIButton></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: clamp(45px, 8vw, 72px);
  font-weight: bold;
}
</style>
