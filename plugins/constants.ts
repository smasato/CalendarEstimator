import { Plugin } from "@nuxt/types";

const units = ["minute(s)", "hour(s)", "day(s)"];
const eventTypes = ["slower", "faster"];

const constants: Plugin = ({ app }, inject): void => {
  inject("constants", { units, eventTypes });
};
export default constants;
