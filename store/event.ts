import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Event } from "~/types";

export const state = () => ({
  events: [] as Array<Event>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  events: (state) => state.events,
});

export const mutations = mutationTree(state, {
  addEvent(state, event: Event) {
    state.events.push(event);
  },
  initialiseStore() {
    console.log("initialised event store");
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
