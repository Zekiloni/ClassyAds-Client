
import { Commit } from "vuex";
import axios from "axios";

import { IUser } from "@/interfaces/IUser";
import { IAuthStore } from "@/interfaces/IAuthStore";


const state: IAuthStore = {
	token: localStorage.getItem('token') || null,
	user: null
};

const mutations = {
	setToken(state: IAuthStore, token: string) {
		state.token = token;
		localStorage.setItem('token', token);
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	},

	setUser(state: IAuthStore, user: IUser) {
		state.user = user;
	},

	logout(state: IAuthStore) {
		state.token = null;
		state.user = null;
		localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
	}
};

const actions = {
	async login({ commit }: { commit: Commit }, credentials: { username: string, password: string }) {
		const response = await axios.post('/users/login', credentials);
		const { token, user } = response.data;

		commit('setToken', token);
		commit('setUser', user);
	},

	async register({ commit }: { commit: Commit }, userData: { firstName: string, lastName: string, username: string, password: string, dateOfBirth: string, emailAddress: string }) {
		const response = await axios.post('/users/register', userData);
		const { token, user } = response.data;

		commit('setToken', token);
		commit('setUser', user);
	},

	async logout({ commit }: { commit: Commit }) {
		commit('logout');
	}
};

const getters = {
	isAuthenticated: (state: IAuthStore) => !!state.token && !!state.user,
	currentUser: (state: IAuthStore) => state.user
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};