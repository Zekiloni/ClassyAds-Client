import { Commit } from "vuex";
import axios from "axios";

import { ICategory } from "@/interfaces/ICategory";
import { IMainStore } from "@/interfaces/IMainStore";


const state: IMainStore = {
    categories: [],
    blog: []
};

const mutations = {
    setCategories(state: IMainStore, categories: ICategory[]) {
        state.categories = categories;
    }
};

const actions = {
    async fetchCategories({ commit }: { commit: Commit }) {
        axios.get('/categories')
            .then((response) => {
                if (response.status === 200 && response.data) {
                    commit('setCategories', response.data as ICategory[]);
                }
            })
            .catch(e => console.log(e));
    }
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