import { type Skill } from "~/interfaces/types";
export const useFilteredSkills = () =>
  useState<Skill[]>("filteredSkills", () => []);

export const useSkills = () => useState<Skill[]>("skills", () => []);
export const useInputValue = () => useState<string>("inputValue", () => "");
