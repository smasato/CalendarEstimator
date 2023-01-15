import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Log } from "~/types/log";

export const state = () => ({
  logs: [] as Array<Log>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  logs: (state) => state.logs,
});

export const mutations = mutationTree(state, {
  addLog(state, log: Log) {
    state.logs.push(log);
  },
  resetLogs(state) {
    state.logs = [];
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
