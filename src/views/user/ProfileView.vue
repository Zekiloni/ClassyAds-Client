<template>
    <div class="profile-view" v-if="user">
        <h2> {{ $t('profile_view.page_title') }}: <b> {{ user?.username }} </b> </h2>

        <ul>
            <li v-for="(value, key) of currentUser">
               {{ key }}: {{ value }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";


@Options({
    computed: {
		...mapGetters('authStore', ['isAuthenticated', 'currentUser'])
    }
})
export default class ProfileView extends Vue {
    isLoggedIn!: boolean;
    currentUser!: IUser | null;

    user: IUser | null = null;
    
    created(): void {
        const { userId } = this.$route.params;

        if (!userId) {
            this.user = this.currentUser;
        }
    }
};
</script>