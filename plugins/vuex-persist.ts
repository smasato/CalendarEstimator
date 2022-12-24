import VuexPersistence from "vuex-persist";
import { accessorType } from "~/store";

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    restoreState: (key, storage) => {
      // @ts-ignore
      return JSON.parse(storage.getItem(key), (key, value) => {
        if (key === "start" || key === "end") {
          return new Date(value);
        }
        return value;
      });
    },
    reducer: (state: typeof accessorType) => ({
      event: state.event,
      task: state.task,
    }),
    modules: ["task", "event"],
  }).plugin(store);
};
