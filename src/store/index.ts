import { createStore } from "vuex";

import mainStore from "@/store/modules/mainStore";
import authStore from "@/store/modules/authStore";


export default createStore({
	state: {
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		mainStore,
		authStore
	}
});
