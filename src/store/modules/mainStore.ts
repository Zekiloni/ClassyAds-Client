import { Commit } from "vuex";
import axios from "axios";

import { ICategory, ICreateCategoryInput } from "@/interfaces/ICategory";
import { IMainStore, INotification } from "@/interfaces/IMainStore";
import { IAdvertisement, IAdvertisementSearchInput } from "@/interfaces/IAdvertisement";
import { IPagedOutput } from "@/interfaces/IPagedResult";


const NOTIFICATION_EXPIRE_TIME_MS = 5000;

const state: IMainStore = {
    categories: [],
    advertisements: [],
    notifications: []
};

const mutations = {
    addNotification(state: IMainStore, notification: INotification) {
        state.notifications.push(notification);
    },

    removeNotification(state: IMainStore, notification: INotification) {
        const index = state.notifications.indexOf(notification);
        if (index !== -1) {
            state.notifications.splice(index, 1);
        }
    },

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
    addNotification({ commit }: { commit: Commit }, notification: INotification) {
        commit('addNotification', notification);

        const notificationTimeoutId = setTimeout(() => {
            commit('removeNotification', notification);
            clearTimeout(notificationTimeoutId);
        }, NOTIFICATION_EXPIRE_TIME_MS);
    },

    async fetchCategories({ commit }: { commit: Commit }) {
        axios.get(`/categories`)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    commit('setCategories', response.data as ICategory[]);
                }
            })
            .catch(e => console.log(e));
    },

    async fetchAdvertisement({ commit }: { commit: Commit }, advertisementId: number) {
        return axios.get(`/advertisements/${advertisementId}`)
            .then(respone => {
                if (respone.status === 200 && respone.data) {
                    return respone.data as IAdvertisement;
                } else {
                    return null;
                }
            })
            .catch(e => console.log(e))
    },


    async fetchAdvertisements({ commit }: { commit: Commit }, searchQuery: IAdvertisementSearchInput) {
        return axios.post(`/advertisements/search`, searchQuery)
            .then(respone =>
                (respone.status === 200 && respone.data) ? respone.data as IPagedOutput<IAdvertisement> : null
            );
    },

    async createCategory({ commit }: { commit: Commit }, newCategory: ICreateCategoryInput) {
        axios.post(`/categories/create`, newCategory)
            .then(response => {
                if (response.status === 200 && response.data) {
                    commit('addCategory', response.data as ICategory);
                }
            })
    }
};


const getters = {
    categories: (state: IMainStore) => state.categories,
    notifications: (state: IMainStore) => state.notifications
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};