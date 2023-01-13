import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Event } from "~/types/event";

export const state = () => ({
  events: [] as Array<Event>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  events: (state) => state.events,
  lastEventId: (state): number => {
    if (state.events.length === 0) {
      return -1;
    }
    const lastEvent = state.events[state.events.length - 1];
    return lastEvent.id ? lastEvent.id : -1;
  },
});

export const mutations = mutationTree(state, {
  setEvents(state, events: Array<Event>) {
    state.events = events;
  },
  addEvent(state, event: Event) {
    state.events.push(event);
  },
  updateEvent(state, event: Event) {
    const index = state.events.findIndex((e) => e.id === event.id);
    state.events[index] = event;
  },
  resetEvents(state) {
    state.events = [];
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
