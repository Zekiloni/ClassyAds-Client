import { createApp } from "vue";
import axios from "axios";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";


axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
