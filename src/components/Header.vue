<template>
    <div class="header">
        <nav>
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink v-if="currentUser && (currentUser.isAdmin || currentUser.isSuperAdmin)" to="/dashboard"> Dashboard </RouterLink>
        </nav>

        <RouterLink v-if="isAuthenticated" class="add-classified" to="/add"> Add new </RouterLink>

        <div class="user">
            <div class="profile" v-if="isAuthenticated && currentUser">
                <h4> Welcome {{ currentUser.username }}</h4>
            </div>
            

            <RouterLink v-else to="/auth"> Sign in </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { IUser } from "@/interfaces/IUser";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";


@Options({
    computed: {
		...mapGetters('authStore', ['isAuthenticated', 'currentUser'])
	},
    
    methods: {
        ...mapActions('authStore', ['logout'])
    }
})
export default class Header extends Vue {
    isAuthenticated!: boolean;
    currentUser!: IUser | null;
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    padding: 30px;

    nav {

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
</style>