import { accessorType } from "~/store";

declare module "vue/types/vue" {
  interface Vue {
    $accessor: typeof accessorType;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
  }
}

export type Unit = "minute(s)" | "hour(s)" | "day(s)";
export type EventType = "slower" | "faster";

export type MinutesRange = {
  low: number;
  up: number;
};

export type Event = {
  name: string;
  start: Date;
  end: Date;
  color?: string;
  timed: boolean;
};

export type Task = Event & {
  name: string;
  subTasks: Array<SubTask>;
  surprises: Array<Surprise>;
};

export type Surprise = {
  name: string;
  range: [number, number];
  unit: Unit;
  eventType: EventType;
  probability: [number, number];
};

export type SubTask = {
  name: string;
  range: [number, number];
  unit: Unit;
};