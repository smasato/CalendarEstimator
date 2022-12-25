import { getAccessorType, mutationTree } from "typed-vuex";

import * as task from "@/store/task";
import * as event from "@/store/event";
import * as debug from "@/store/debug";

export const state = () => ({});
export const getters = {};
export const mutations = mutationTree(state, {
  resetState(state) {
    // @ts-ignore
    state.task.tasks = [];
    // @ts-ignore
    state.event.events = [];
  },
});
export const actions = {};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    debug,
    task,
    event,
  },
});
