import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Task } from "~/types/task";

export const state = () => ({
  tasks: [] as Array<Task>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  tasks: (state) => state.tasks,
  lastTaskId: (state): number => {
    if (state.tasks.length === 0) {
      return -1;
    }
    const lastTask = state.tasks[state.tasks.length - 1];
    return lastTask.id ? lastTask.id : -1;
  },
});

export const mutations = mutationTree(state, {
  setTasks(state, tasks: Array<Task>) {
    state.tasks = tasks;
  },
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
});

export const actions = actionTree({ state, getters, mutations }, {});
