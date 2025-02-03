import { type Skill } from "~/interfaces/interfaces";

export const useSkillsStore = defineStore("skills", {
  state: () => ({
    skills: skills,
  }),
  actions: {
    filterSkills(inputVal: string) {
      if (inputVal.length === 0) {
        this.skills = skills;
        return;
      }
      this.skills = skills.filter((skill) => {
        return (
          skill.label
            .toLowerCase()
            .replace(" ", "")
            .indexOf(inputVal.toLowerCase().replace(" ", "")) !== -1
        );
      });
    },
  },
});
const skills: Skill[] = [
  {
    label: "Flutter",
    icon: "devicon:flutter",
    percentValue: 95,
  },
  {
    label: "Dart",
    icon: "logos:dart",
    percentValue: 82,
  },
  {
    label: "Nuxt",
    icon: "vscode-icons:file-type-nuxt",
    percentValue: 96,
  },
  {
    label: "Vue",
    icon: "logos:vue",
    percentValue: 97,
  },
  {
    label: "Vuetify",
    icon: "devicon:vuetify",
    percentValue: 95,
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
    label: "Nodejs",
    icon: "devicon:nodejs",
    percentValue: 86,
  },
  {
    label: "Expressjs",
    icon: "skill-icons:expressjs-dark",
    percentValue: 90,
  },
  {
    label: "MongoDB",
    icon: "devicon:mongodb",
    percentValue: 90,
  },
  {
    label: "Sequelize",
    icon: "devicon:sequelize",
    percentValue: 85,
  },
  {
    label: "GraphQL",
    icon: "logos:graphql",
    percentValue: 90,
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
    label: "Firebase",
    icon: "logos:firebase",
    percentValue: 80,
  },
  {
    label: "Github",
    icon: "jam:github",
    percentValue: 80,
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
    label: "GSAP",
    icon: "icons:gsap-logo",
    percentValue: 90,
  },
  {
    label: "Threejs",
    icon: "skill-icons:threejs-dark",
    percentValue: 35,
  },
];
