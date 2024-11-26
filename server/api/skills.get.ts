import { type Skill } from "~/interfaces/types";
const skills = [
  {
    label: "Flutter",
    icon: "devicon:flutter",
    percentValue: 95,
  },
  {
    label: "Dart",
    icon: "logos:dart",
    percentValue: 80,
  },
  {
    label: "Nuxt",
    icon: "vscode-icons:file-type-nuxt",
    percentValue: 92,
  },
  {
    label: "Vue",
    icon: "logos:vue",
    percentValue: 97,
  },
  {
    label: "Pinia",
    icon: "logos:pinia",
    percentValue: 99,
  },
  {
    label: "Vuex",
    icon: "icons:vuex",
    percentValue: 99,
  },
  {
    label: "TypeScript",
    icon: "devicon:typescript",
    percentValue: 94,
  },
  {
    label: "JavaScript",
    icon: "logos:javascript",
    percentValue: 96,
  },
  {
    label: "Sass",
    icon: "logos:sass",
    percentValue: 98,
  },
  {
    label: "Tailwind CSS",
    icon: "devicon:tailwindcss",
    percentValue: 96,
  },
  {
    label: "DaisyUI",
    icon: "logos:daisyui-icon",
    percentValue: 95,
  },
  {
    label: "Bootstrap",
    icon: "devicon:bootstrap",
    percentValue: 99,
  },
  {
    label: "CSS",
    icon: "devicon:css3",
    percentValue: 99,
  },
  {
    label: "HTML",
    icon: "devicon:html5",
    percentValue: 100,
  },

  {
    label: "Github",
    icon: "mdi:github",
    percentValue: 75,
  },
  {
    label: "Nodejs",
    icon: "devicon:nodejs",
    percentValue: 40,
  },
  {
    label: "Threejs",
    icon: "skill-icons:threejs-dark",
    percentValue: 35,
  },
  {
    label: "Swiper",
    icon: "icons:swiper-logo",
    percentValue: 95,
  },
  {
    label: "GSAP",
    icon: "icons:gsap-logo",
    percentValue: 90,
  },
  {
    label: "Firebase",
    icon: "logos:firebase",
    percentValue: 70,
  },
  {
    label: "API",
    icon: "material-symbols:api",
    percentValue: 100,
  },
  {
    label: "jQuery",
    icon: "devicon:jquery",
    percentValue: 40,
  },
  {
    label: "C#",
    icon: "devicon:csharp",
    percentValue: 60,
  },
  {
    label: "Python",
    icon: "logos:python",
    percentValue: 60,
  },
] as Skill[];

export default defineEventHandler(() => {
  return skills;
});
