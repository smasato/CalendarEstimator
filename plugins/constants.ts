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
  name: "[タスク A] レポート課題の作成",
  id: 1,
  color: "blue",
  subTasks: [
    {
      name: "テーマについての調査",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "レポートの作成",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "レポートの推敲",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "レポートの提出",
      range: [1, 1],
      unit: "minute(s)",
    },
  ],
  surprises: [
    {
      name: "パソコンの故障",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "レポートのテーマについて知っていた",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "faster",
      probability: [0, 1],
    },
    {
      name: "ネットワークの障害",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
  ],
};

const TASK_B: Task = {
  ...TASK,
  type: "task",
  name: "[タスク B] プレゼン資料の作成",
  id: 2,
  color: "indigo",
  subTasks: [
    {
      name: "テーマについての調査",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "資料の作成",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "資料の推敲",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "資料の提出",
      range: [1, 1],
      unit: "minute(s)",
    },
    {
      name: "プレゼンの練習",
      range: [1, 1],
      unit: "minute(s)",
    },
  ],
  surprises: [
    {
      name: "パソコンの故障",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "プレゼンのテーマが変更された",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "ネットワークの障害",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "資料の作成に必要な情報がすぐに手に入った",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "faster",
      probability: [0, 1],
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
