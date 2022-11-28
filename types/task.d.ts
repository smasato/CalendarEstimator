import { Event } from "~/types/event";

export type Unit = "minute(s)" | "hour(s)" | "day(s)";
export type EventType = "slower" | "faster";

export type MinutesRange = {
  low: number;
  up: number;
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

export type Task = Event & {
  name: string;
  subTasks: Array<SubTask>;
  surprises: Array<Surprise>;
};
