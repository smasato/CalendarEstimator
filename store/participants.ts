import { getterTree, mutationTree, actionTree } from "typed-vuex";

export const state = () => ({
  participants: [] as Array<any>,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  participants: (state) => state.participants,
});

export const mutations = mutationTree(state, {
  resetParticipants(state) {
    state.participants = [];
  },
  addParticipant(state, participant: any) {
    state.participants.push(participant);
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
