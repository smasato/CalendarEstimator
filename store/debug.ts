import { getterTree, mutationTree, actionTree } from "typed-vuex";

export const state = () => ({
  isDebug: false,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  isDebug: (state) => state.isDebug,
});

export const mutations = mutationTree(state, {
  setDebug(state, debug: boolean) {
    state.isDebug = debug;
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
