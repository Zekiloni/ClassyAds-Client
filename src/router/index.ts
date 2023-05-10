import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

import ProfileView from "@/views/user/ProfileView.vue";
import EditProfileView from "@/views/user/EditProfileView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView
	},
	{
		path: '/profile/:userId?',
		name: 'profileView',
		component: ProfileView,
		children: [
			{
				path: 'edit',
				component: EditProfileView
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(), // createWebHashHistory
	routes
});

export default router;
