import { RouteLocationNormalized } from "vue-router";

declare module 'vue-router' {
    interface RouteLocationNormalized {
        title?: string;
    }

    interface RouteRecordRedirect {
        title?: string;
    }
};