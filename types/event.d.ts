export type Event = {
  id: number | null;
  name: string;
  start: Date | null;
  end: Date | null;
  color: string;
  timed: boolean;
  fixed: boolean;
  type: string;
};
