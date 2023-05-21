<template>
    <div class="advertisement-single-view" v-if="advertisement">
        <h2> {{  advertisement.title }} </h2>

        {{  advertisement }}

        <div class="options">

        </div>

        <RouterView />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IAdvertisement } from "@/interfaces/IAdvertisement";
import { IUser } from "@/interfaces/IUser";


@Options({
    computed: {
		...mapGetters('authStore', ['isAuthenticated', 'currentUser'])
    },
    
    methods: {
        ...mapActions('mainStore', ['fetchAdvertisement'])
    }
})
export default class SingleAdvertisementView extends Vue {
    fetchAdvertisement!: (advertisementId: number) => Promise<void | null | IAdvertisement>;
    isAuthenticated!: boolean;
	currentUser!: IUser | null;

    advertisement: null | IAdvertisement = null;

    get isCurrentUserAuthor() {
        return (this.advertisement && this.currentUser) && (this.currentUser.id === this.advertisement.userId);
    }

    async mounted() {
        const advertisementId: string | undefined = this.$route.params.advertisementId as string;

        if (!advertisementId) {
            this.$router.push('/404');
        }

        const advertisement = await this.fetchAdvertisement(parseInt(advertisementId));

        if (advertisement) {
            this.advertisement = advertisement;
        } else {
            this.$router.push('/404');
        }
    }
}

</script>