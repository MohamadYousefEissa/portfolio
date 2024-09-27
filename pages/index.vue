<template>
  <section>
    <div class="text-center">
      <h1>
        Hello I'am Mohamad&nbsp;Yousef&nbsp;Eissa <br />Front-End Web Devoloper
      </h1>
      <p>
        My journey in web development is driven by creativity and a keen eye for
        detail, <br />
        ensuring every project I work on is both functional and beautiful.
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
  margin-top: 15rem;
}
h1 {
  font-size: clamp(20px, 7vw, 72px);
  font-weight: bold;
}
p {
  opacity: 0.7;
}
button {
  all: unset;
  padding: 10px 10px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.2s;
}
a:nth-of-type(1) button {
  background-color: var(--sec-clr);
  &:hover {
    background-color: hsl(from var(--sec-clr) h s l / 0.8);
  }
  a {
    color: #000;
  }
}
a:nth-of-type(2) button {
  &:hover {
    background-color: #111;
  }
}
@media screen and (max-width: 768px) {
  section {
    margin-top: 10rem;
  }
}
@media screen and (max-width: 480px) {
  section {
    margin-top: 6rem;
  }
  p {
    font-size: 10px;
    padding: 1rem;
  }
}
</style>
