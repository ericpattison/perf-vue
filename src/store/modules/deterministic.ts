import appConfig from "../../config";
import Axios from "axios";
import * as sid from "shortid";
import { ActionContext } from "vuex";

export interface Message {
  transactionId: string;
  timestamp: Date;
  message: string;
}

export interface DeterministicState {
  messages: Message[];
  currentTransactionId: string;
}

export default {
  namespaced: true as true,
  state: {
    messages: [],
    currentTransactionId: ""
  } as DeterministicState,
  getters: {
    transactionId: (state: DeterministicState): string =>
      state.currentTransactionId
  },
  mutations: {
    addMessage(state: DeterministicState, msg: string) {
      const m = {
        transactionId: state.currentTransactionId,
        timestamp: new Date(),
        message: msg
      };
      state.messages = [...state.messages, m];
    },
    beginTransaction(state: DeterministicState) {
      state.currentTransactionId = sid.generate();
    }
  },
  actions: {
    async delay(
      context: ActionContext<DeterministicState, DeterministicState>,
      time: number
    ) {
      context.commit("beginTransaction");
      context.commit("addMessage", "Grabbing config.");
      const config = await appConfig.get();
      context.commit("addMessage", "Constructing URL.");
      const url = `${config.apis["deterministic"].url}/delay/${time | 0}`;
      context.commit("addMessage", "Making request.");
      await Axios.get(url);
      context.commit("addMessage", "Received response.");
    }
  }
};
