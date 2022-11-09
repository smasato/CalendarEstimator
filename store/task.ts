import { mutationTree } from "typed-vuex";

export type RootState = ReturnType<typeof state>;
export type TaskState = {
  id: string;
  subTasks: Array<string>;
  surprises: Array<string>;
};

export const state = () => ({
  id: "",
  subTasks: [""],
  surprises: [""],
});

export const mutations = mutationTree(state, {
  store(state, task: TaskState) {
    state.id = task.id;
    state.subTasks = task.subTasks;
    state.surprises = task.surprises;
  },
  initialiseStore() {
    console.log("initialised task store");
  },
});
