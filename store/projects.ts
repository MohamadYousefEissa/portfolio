export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: projects,
  }),
});

const projects = [
  {
    label: "Codesmos",
    imgSrc: "/codesmos.jpg",
    to: "https://codesmos.netlify.app",
  },
  {
    label: "Imdb clone",
    imgSrc: "/imdb.jpg",
    to: "https://imdb3.netlify.app",
  },
  {
    label: "Aljadaan Stables New",
    imgSrc: "/aljadaan-new.jpg",
    to: "https://mohamadyousefeissa.github.io/Aljadaan-Stables-New",
  },
  {
    label: "Aljadaan Stables",
    imgSrc: "/aljadaan-old.jpg",
    to: "https://mohamadyousefeissa.github.io/Aljadaan-Stables",
  },
  {
    label: "Dallah Media",
    imgSrc: "/dallah-media.jpg",
    to: "https://mohamadyousefeissa.github.io/Dallah-Media",
  },
  {
    label: "North Oil Company",
    imgSrc: "/north-oil.jpg",
    to: "https://mohamadyousefeissa.github.io/north-oil-project",
  },
  {
    label: "Old Doha Port",
    imgSrc: "/old-doha-port.jpg",
    to: "https://mohamadyousefeissa.github.io/old-doha-port",
  },
  {
    label: "Observer Animation",
    imgSrc: "/observer.jpg",
    to: "https://mohamadyousefeissa.github.io/observer-animation",
  },
  {
    label: "Simple E-Commerce",
    imgSrc: "/shop.jpg",
    to: "https://mohamadyousefeissa.github.io/bwp401-hw",
  },
  {
    label: "Quiz Game",
    imgSrc: "/quiz-game.jpg",
    to: "https://sort-the-word.netlify.app",
  },
  {
    label: "Password Generator",
    imgSrc: "/password-generator.jpg",
    to: "https://password-generator-mye.netlify.app",
  },
];
