import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Task } from "~/types";

export const state = () => ({
  tasks: [] as Array<Task>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  tasks: (state) => state.tasks,
});

export const mutations = mutationTree(state, {
  addTask(state, task: Task) {
    state.tasks.push(task);
  },
  initialiseStore() {
    console.log("initialised task store");
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
