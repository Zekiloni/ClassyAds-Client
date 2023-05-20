import { Commit } from "vuex";
import axios from "axios";

import { ICategory, ICreateCategoryInput } from "@/interfaces/ICategory";
import { IMainStore } from "@/interfaces/IMainStore";
import { IClassified } from "@/interfaces/IClassified";


const state: IMainStore = {
    categories: [],
    classifieds: [],
};

const mutations = {
    setCategories(state: IMainStore, categories: ICategory[]) {
        state.categories = categories;
    },

    addCategory(state: IMainStore, category: ICategory) {
        state.categories.push(category);
    },

    removeCategory(state: IMainStore, category: ICategory) {
        const index = state.categories.indexOf(category);

        if (index != -1) {
            state.categories.splice(index, 1);
        }
    }
};

const actions = {
    async fetchCategories({ commit }: { commit: Commit }) {
        axios.get(`/categories`)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    commit('setCategories', response.data as ICategory[]);
                }
            })
            .catch(e => console.log(e));
    },

    async fetchClassified({ commit }: { commit: Commit }, classifiedId: number ) {
        return axios.get(`/classifieds/${classifiedId}`)
            .then(respone => {
                if (respone.status === 200 && respone.data) {
                    return respone.data as IClassified;
                } else {
                    return null;
                }
            })
            .catch(e => console.log(e))
    },

    async createCategory({ commit }: { commit: Commit }, newCategory: ICreateCategoryInput) {
        axios.post(`/categories/create`, newCategory)
            .then(response => {
                if (response.status === 200 && response.data) {
                    commit('addCategory', response.data as ICategory);
                }
            })
    },
};


const getters = {
    categories: (state: IMainStore) => state.categories
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};