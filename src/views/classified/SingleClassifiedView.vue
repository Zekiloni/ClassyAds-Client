<template>
    <div class="classified-single-view" v-if="classified">
        <h2> {{  classified.title }} </h2>

        {{  classified }}

        <div class="options">

        </div>

        <RouterView />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IClassified } from "@/interfaces/IClassified";
import { IUser } from "@/interfaces/IUser";


@Options({
    computed: {
		...mapGetters('authStore', ['isAuthenticated', 'currentUser'])
    },
    
    methods: {
        ...mapActions('mainStore', ['fetchClassified'])
    }
})
export default class SingleClassifiedView extends Vue {
    fetchClassified!: (classifiedId: number) => Promise<void | null | IClassified>;
    isAuthenticated!: boolean;
	currentUser!: IUser | null;

    classified: null | IClassified = null;

    get isCurrentUserAuthor() {
        return (this.classified && this.currentUser) && (this.currentUser.id === this.classified.userId);
    }

    async mounted() {
        const classifiedId: string | undefined = this.$route.params.classifiedId as string;

        if (!classifiedId) {
            this.$router.push('/404');
        }

        const classified = await this.fetchClassified(parseInt(classifiedId));

        if (classified) {
            this.classified = classified;
        } else {
            this.$router.push('/404');
        }
    }
}

</script>