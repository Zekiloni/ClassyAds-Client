import { RouteLocationNormalized } from "vue-router";


export default (to: RouteLocationNormalized) => {
    document.title = to.title || process.env.VUE_APP_NAME;

    const metaTags = to.meta || {};

    Object.keys(metaTags).forEach((name) => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', (<string>metaTags[name]));
        document.head.appendChild(tag);
    });
};