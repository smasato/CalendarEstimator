import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Event } from "~/types";

export const state = () => ({
  events: [] as Array<Event>,
  colors: [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ],
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  events: (state) => state.events,
  colors: (state) => state.colors,
  lastEventId: (state) => {
    const lastEvent = state.events[state.events.length - 1];
    return lastEvent ? lastEvent.id : -1;
  },
});

export const mutations = mutationTree(state, {
  addEvent(state, event: Event) {
    state.events.push(event);
  },
  updateEvent(state, event: Event) {
    const index = state.events.findIndex((e) => e.id === event.id);
    state.events[index] = event;
  },
  initialiseStore() {
    console.log("initialised event store");
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
