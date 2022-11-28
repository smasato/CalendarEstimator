import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Task } from "~/types/task";

export const state = () => ({
  tasks: [] as Array<Task>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  tasks: (state) => state.tasks,
  lastTaskId: (state) => {
    const lastTask = state.tasks[state.tasks.length - 1];
    return lastTask ? lastTask.id : -1;
  },
});

export const mutations = mutationTree(state, {
  addTask(state, task: Task) {
    state.tasks.push(task);
  },
  updateTask(state, task: Task) {
    const index = state.tasks.findIndex((t) => t.id === task.id);
    state.tasks[index] = task;
  },
  resetTasks(state) {
    state.tasks = [];
  },
  initialiseStore() {
    console.log("initialised task store");
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
