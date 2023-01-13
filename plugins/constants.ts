import { Plugin } from "@nuxt/types";
import { Task } from "~/types/task";

const UNITS = [
  { value: "minute(s)", text: "分" },
  { value: "hour(s)", text: "時間" },
  { value: "day(s)", text: "日" },
];
const EVENT_TYPES = [
  { value: "slower", text: "遅くなる" },
  { value: "faster", text: "早くなる" },
];
const CALENDAR_COLORS = ["blue", "indigo", "green"];
const DEFAULT_DATE = "2023-01-01";

const TASK = {
  start: null,
  end: null,
  timed: true,
  fixed: false,
};

const TASK_A: Task = {
  ...TASK,
  type: "task",
  name: "Task A",
  id: 1,
  color: "blue",
  subTasks: [
    {
      name: "SubTask A-1",
      range: [5, 10],
      unit: "minute(s)",
    },
    {
      name: "SubTask A-2",
      range: [10, 15],
      unit: "minute(s)",
    },
    {
      name: "SubTask A-3",
      range: [15, 20],
      unit: "minute(s)",
    },
  ],
  surprises: [
    {
      name: "Surprise A-1",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 5],
    },
    {
      name: "Surprise A-2",
      range: [10, 15],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 2],
    },
  ],
};

const TASK_B: Task = {
  ...TASK,
  type: "task",
  name: "Task B",
  id: 2,
  color: "indigo",
  subTasks: [
    {
      name: "Subtask B-1",
      range: [5, 10],
      unit: "minute(s)",
    },
    {
      name: "Subtask B-2",
      range: [10, 15],
      unit: "minute(s)",
    },
  ],
  surprises: [
    {
      name: "Surprise B-1",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "faster",
      probability: [0, 10],
    },
    {
      name: "Surprise B-2",
      range: [10, 15],
      unit: "minute(s)",
      eventType: "slower",
      probability: [3, 10],
    },
    {
      name: "Surprise B-3",
      range: [5, 10],
      unit: "minute(s)",
      eventType: "slower",
      probability: [1, 10],
    },
  ],
};

export interface ConstantsPluginInterface {
  readonly UNITS: Array<{ value: string; text: string }>;
  readonly EVENT_TYPES: Array<{ value: string; text: string }>;
  readonly TASK_A: Task;
  readonly TASK_B: Task;
  readonly CALENDAR_COLORS: Array<string>;
  readonly DEFAULT_DATE: string;
}

class ConstantsPlugin implements ConstantsPluginInterface {
  readonly UNITS = UNITS;
  readonly EVENT_TYPES = EVENT_TYPES;
  readonly TASK_A = TASK_A;
  readonly TASK_B = TASK_B;
  readonly CALENDAR_COLORS = CALENDAR_COLORS;
  readonly DEFAULT_DATE = DEFAULT_DATE;
}

const constantsPlugin: Plugin = (context, inject) => {
  inject("constants", new ConstantsPlugin());
};

export default constantsPlugin;
