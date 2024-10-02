<template>
  <section>
    <div class="flex flex-col items-center text-center p-1">
      <h1 class="tracking-tight leading-tight w-full lg:w-10/12">
        Hello I'am Mohamad Yousef Eissa Front&minus;End Web Devoloper
      </h1>
      <p
        class="w-full lg:w-8/12 xl:w-6/12 my-5 text-stone-700 dark:text-stone-400"
      >
        My journey in web development is driven by creativity and a keen eye for
        detail, ensuring every project I work on is both functional and
        beautiful.
      </p>
      <div class="mt-5 flex gap-5">
        <NuxtLink to="/projects"><button>My Projects</button></NuxtLink>
        <NuxtLink to="/skills"><button>My Skills</button></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 10rem;
}
h1 {
  font-size: clamp(45px, 8vw, 72px);
  font-weight: bold;
}

button {
  width: 110px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--sec-clr);
  color: var(--sec-clr);
  transition: all 0.2s;
  &:hover {
    color: #000;
    background-color: var(--sec-clr);
    font-weight: 600;
  }
}

@media screen and (max-width: 1024px) {
  section {
    margin-top: 6rem;
  }
}
@media screen and (max-width: 480px) {
  section {
    margin-top: 3rem;
  }
  p {
    font-size: 14px;
  }
}
</style>
