import VuexPersistence from "vuex-persist";

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
    modules: ["task", "event"],
  }).plugin(store);
};
