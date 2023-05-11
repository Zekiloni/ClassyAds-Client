<template>
	<div class="wrapper">

		<div class="header">
			<Navigation />

			<RouterLink v-if="isAuthenticated" class="add-classified" to="/add"> Add new </RouterLink>

			<div class="user">
				<div class="profile" v-if="isAuthenticated && currentUser">
					<h4> Welcome {{ currentUser.username }}</h4>
				</div>

				<RouterLink v-else to="/auth"> Login / Register </RouterLink>
			</div>
		</div>

		<RouterView />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";

import Navigation from "@/components/Navigation.vue";


@Options({
	components: {
		Navigation
	},
	methods: {
		...mapActions('mainStore', ['fetchCategories'])
	},
	computed: {
		...mapGetters('authStore', ['isAuthenticated', 'currentUser'])
	}
})
export default class App extends Vue {
	isAuthenticated!: boolean;
	currentUser!: IUser | null;

	fetchCategories!: () => Promise<void>;

	async mounted() {
		await this.fetchCategories();
	}
};
</script>

<style lang="scss">
html,
body {
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	.wrapper {
		margin: 0 auto;
		max-width: 960px;
		padding: 0 8px;

		@media screen and (max-width: 600px) {
			max-width: 100%;
			padding: 0 16px;
		}
	}
}
</style>
