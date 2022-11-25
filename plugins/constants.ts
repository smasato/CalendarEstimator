import { Plugin } from "@nuxt/types";
import { Task } from "~/types";

const UNITS = ["minute(s)", "hour(s)", "day(s)"];
const EVENT_TYPES = ["slower", "faster"];

const EXAMPLE_1 = {
  name: "Example 1",
  subTasks: [
    {
      name: "getting ready to leave",
      range: [5, 10],
      unit: "minute(s)",
    },
    {
      name: "going to the grocery store",
      range: [10, 15],
      unit: "minute(s)",
    },
    {
      name: "finding the necessary items",
      range: [1, 5],
      unit: "minute(s)",
    },
    {
      name: "paying for the items",
      range: [2, 5],
      unit: "minute(s)",
    },
    {
      name: "getting back home",
      range: [10, 15],
      unit: "minute(s)",
    },
  ],
  surprises: [
    {
      name: "I use a self-service cash register",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "faster",
      probability: [0, 10],
    },
    {
      name: "there is a long queue at the checkout",
      range: [10, 15],
      unit: "minute(s)",
      eventType: "slower",
      probability: [3, 10],
    },
    {
      name: "the store was recently rearranged",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 10],
    },
    {
      name: "I meet someone I know on the way",
      range: [10, 15],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 10],
    },
    {
      name: "I plan ahead and know what to buy",
      range: [2, 3],
      unit: "minute(s)",
      eventType: "faster",
      probability: [3, 5],
    },
    {
      name: "I cannot find my wallet or my keys",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 5],
    },
  ],
} as Task;

export interface ConstantsPluginInterface {
  readonly UNITS: Array<string>;
  readonly EVENT_TYPES: Array<string>;
  readonly EXAMPLE_1: Task;
}

class ConstantsPlugin implements ConstantsPluginInterface {
  readonly UNITS = UNITS;
  readonly EVENT_TYPES = EVENT_TYPES;
  readonly EXAMPLE_1 = EXAMPLE_1;
}

const constantsPlugin: Plugin = (context, inject) => {
  inject("constants", new ConstantsPlugin());
};

export default constantsPlugin;
