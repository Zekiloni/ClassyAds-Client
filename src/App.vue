<template>
	<div class="wrapper">
		<Header />
<!-- 
		<transition name="fade" mode="out-in">
			<RouterView></RouterView>
		</transition> -->

		<RouterView v-slot="{ Component }">
			<Transition name="fade" mode="out-in">
				<Component :is="Component" />
			</Transition>
		</RouterView>
	</div>


</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";

import "boxicons";

import "@/assets/styles/main.scss";
import "@/assets/styles/inputs.scss";
import "@/assets/styles/transitions.css";

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
