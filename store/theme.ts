export const themeStore = defineStore("theme", {
  state: () => ({ theme: "dark" }),
  getters: {
    gradientColor() {
      if (this.theme === "dark") return "#111";
      return "whitesmoke";
    },
  },
});
