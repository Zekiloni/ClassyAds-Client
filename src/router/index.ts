import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import updateSEO from "@/modules/updateSEO";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AdvertisementsView from "@/views/AdvertisementsView.vue";
import AuthorizationView from "@/views/AuthView.vue";

import NotFoundView from "@/views/NotFoundView.vue";

import AddAdvertisementView from "@/views/advertisement/AddAdvertisementView.vue";
import SingleAdvertisementView from "@/views/advertisement/SingleAdvertisementView.vue";
import EditAdvertisementView from "@/views/advertisement/EditAdvertisementView.vue";

import ProfileView from "@/views/user/ProfileView.vue";
import EditProfileView from "@/views/user/EditProfileView.vue";

import DashboardView from "@/views/dashboard/DashboardView.vue";
import UsersView from "@/views/dashboard/UsersView.vue";
import UserManagementView from "@/views/dashboard/UserManagementView.vue";
import CategoriesView from "@/views/dashboard/CategoriesView.vue";
import CategoryManagementView from "@/views/dashboard/CategoryManagementView.vue";


const routes: Array<RouteRecordRaw> = [
	{
		name: 'home',
		path: '/',
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
		name: 'auth',
		path: '/auth',
		component: AuthorizationView
	},
	{
		name: '404-not-found',
		path: '/:catchAll(.*)',
		component: NotFoundView
	},
	{
		name: 'profile-view',
		path: '/profile/:userId?',
		component: ProfileView,
		children: [
			{
				path: 'edit',
				component: EditProfileView
			}
		]
	},
	{
		name: 'create-advertisement',
		path: '/add',
		component: AddAdvertisementView
	},
	{
		name: 'advertisements-view',
		path: '/advertisements',
		component: AdvertisementsView
	},
	{
		name: 'single-advertisement',
		path: '/advertisement/:advertisementId?',
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
		name: 'dashboard',
		path: '/dashboard',
		component: DashboardView,
		children: [
			{
				name: 'categories',
				path: 'categories',
				component: CategoriesView,
				children: [
					{
						name: 'category-management',
						path: ':categoryId/manage',
						component: CategoryManagementView
					}
				]
			},
			{
				name: 'users',
				path: 'users',
				component: UsersView,
				children: [
					{
						name: 'user-management',
						path: ':userId/manage',
						component: UserManagementView
					}
				]
			},
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
