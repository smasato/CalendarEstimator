import { getAccessorType } from "typed-vuex";

import * as task from "@/store/task";
import * as event from "@/store/event";

export const state = () => ({});
export const getters = {};
export const mutations = {};
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