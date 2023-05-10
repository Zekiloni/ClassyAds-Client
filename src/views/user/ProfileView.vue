<template>
    <div class="profile-view">
        {{ isLoggedIn }}
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";


@Options({
    computed: {
        ...mapGetters(['currentUser', 'isLoggedIn'])
    }
})
export default class ProfileView extends Vue {
    isLoggedIn!: boolean;
    currentUser!: IUser | null;

    user: IUser | null = null;
    
    created(): void {
        const { userId } = this.$route.params;

        if (userId != null || userId != undefined) {
            
        }
    }
};
</script>