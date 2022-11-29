import { getAccessorType } from "typed-vuex";

import * as task from "@/store/task";
import * as event from "@/store/event";

export const state = () => ({
  debug: false,
});
export const getters = {
  debug: (state) => state.debug,
};
export const mutations = {
  setDebug(state, debug: boolean) {
    state.debug = debug;
  },
};
export const actions = {};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    task,
    event,
  },
});
