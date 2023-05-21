import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import updateSEO from "@/modules/updateSEO";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AuthorizationView from "@/views/AuthView.vue";

import NotFoundView from "@/views/NotFoundView.vue";

import AddAdvertisementView from "@/views/AddAdvertisementView.vue";
import SingleAdvertisementView from "@/views/advertisement/SingleAdvertisementView.vue";
import EditAdvertisementView from "@/views/advertisement/EditAdvertisementView.vue";

import ProfileView from "@/views/user/ProfileView.vue";
import EditProfileView from "@/views/user/EditProfileView.vue";

import DashboardView from "@/views/DashboardView.vue";
import UsersView from "@/views/dashboard/UsersView.vue";
import UserManagementView from "@/views/dashboard/UserManagementView.vue";


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		meta: {
			keywords: "advertisements, free ads"
		},
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView
	},
	{
		path: '/auth',
		name: 'auth',
		component: AuthorizationView
	},
	{
		path: '/add',
		name: 'add',
		component: AddAdvertisementView
	},
	{
		path: '/:catchAll(.*)',
		name: '404-not-found',
		component: NotFoundView
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
	},
	{
		path: '/advertisement/:advertisementId?',
		name: 'advertisement-view',
		component: SingleAdvertisementView,
		children: [
			{
				path: 'edit',
				name: 'edit-advertisement',
				component: EditAdvertisementView
			}
		]
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView,
		children: [
			{

				path: 'users',
				name: 'users',
				component: UsersView,
				children: [
					{
						path: 'management',
						name: 'userManagement',
						component: UserManagementView
					}
				]
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(), // createWebHashHistory
	routes
});


router.beforeEach((to, from, next) => {
	updateSEO(to);
	next();
});

export default router;
