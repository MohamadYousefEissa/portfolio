<template>
  <section>
    <div class="flex flex-col items-center text-center p-1">
      <h1 class="tracking-tight leading-tight w-full lg:w-10/12">
        Hello I'am Mohamad Yousef Eissa Front&minus;End Web Devoloper
      </h1>
      <p class="w-full lg:w-8/12 xl:w-6/12 my-5">
        My journey in web development is driven by creativity and a keen eye for
        detail, ensuring every project I work on is both functional and
        beautiful.
      </p>
      <div class="mt-5">
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
p {
  color: hsl(from var(--main-clr) h s l / 0.6);
}
span {
}
button {
  all: unset;
  padding: 10px 10px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.2s;
}
a:nth-of-type(1) button {
  background-color: var(--sec-clr);
  color: #000;
  &:hover {
    background-color: hsl(from var(--sec-clr) h s l / 0.8);
  }
}
a:nth-of-type(2) button {
  &:hover {
    background-color: #111;
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
