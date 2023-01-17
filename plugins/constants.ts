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
};

const TASK_A: Task = {
  ...TASK,
  type: "task",
  name: "[タスクA] レポート課題の作成",
  explanation:
    "このレポート課題は、心理学の授業のレポート課題です。テーマは「心理学の研究手法」です。文字数はA4紙の1ページ分です。",
  id: 1,
  color: "blue",
  fixed: true,
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
      name: "パソコンが故障する",
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
      name: "ネットワークの障害が起きる",
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
  name: "[タスクB] プレゼン資料の作成",
  explanation:
    "このプレゼン資料は、英語の授業のためのプレゼン資料です。テーマは「日本の文化」です。発表時間は10分です。",
  id: 2,
  color: "indigo",
  fixed: false,
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
      name: "パソコンが故障する",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "発表時間を勘違いしていたので資料の大幅な修正が必要になる",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "ネットワークの障害が起きる",
      range: [1, 1],
      unit: "minute(s)",
      eventType: "slower",
      probability: [0, 1],
    },
    {
      name: "資料の作成に必要な情報がすぐに手に入る",
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
