import { createApp } from "vue";
import axios from "axios";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

import i18nLocalization from "@/modules/localization";

process.env.VUE_APP_VERSION = require('../package.json').version;

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App);



app.use(store)
    .use(router)
    .use(i18nLocalization)
    .mount('#app');

