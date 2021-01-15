import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';

import actions from './actions';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';
import rootState from './state';

Vue.use(Vuex);


const rootStore = {
  actions,
  getters,
  modules,
  mutations,
  state: rootState,
};

const {
	store,
	rootActionContext,
	moduleActionContext,
	rootGetterContext,
	moduleGetterContext,
} = createDirectStore(rootStore);

export default store;