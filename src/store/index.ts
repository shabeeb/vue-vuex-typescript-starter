import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

/**
 * Main store with modules
 */
const store: StoreOptions<RootState> = {
  modules: {},
  strict: true
};

export default new Vuex.Store<RootState>(store);
