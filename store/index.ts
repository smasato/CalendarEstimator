import { getAccessorType, mutationTree } from "typed-vuex";

import * as task from "@/store/task";
import * as event from "@/store/event";
import * as debug from "@/store/debug";
import * as log from "@/store/log";
import * as participants from "@/store/participants";

export const state = () => ({});
export const getters = {};
export const mutations = mutationTree(state, {
  resetState(state) {
    // @ts-ignore
    state.task.tasks = [];
    // @ts-ignore
    state.event.events = [];
    // @ts-ignore
    state.log.logs = [];
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
    log,
    participants,
  },
});
