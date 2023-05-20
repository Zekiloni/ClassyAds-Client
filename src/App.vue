<template>
	<div class="wrapper">
		<Header />


		<RouterView />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";

import "@/assets/styles/main.scss";

import Header from "@/components/Header.vue";


@Options({
	components: {
		Header
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
