<template>
    <div class="header">
        <img class="logo" src="@/assets/logo.png" :alt="appName">

        <nav>
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink v-if="currentUser && (currentUser.isAdmin || currentUser.isSuperAdmin)" to="/dashboard"> Dashboard </RouterLink>
        </nav>

        <div class="search">
            <input type="text" v-model="searchAdvertisementQuery" @keydown.enter="console.log('a')" spellcheck="false">
        </div>

        <RouterLink v-if="isAuthenticated" class="add-advertisement" to="/add"> Add new </RouterLink>

        <div class="authentication">
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
    
    searchAdvertisementQuery: string | null = null;

    get appName() {
        return process.env.VUE_APP_NAME || document.title;
    }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;

    margin-top: 24px;
    padding: 16px 24px;

    border-radius: 16px;

    background-color: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    img.logo {
        width: 45px;
    }

    nav {
        margin-left: 16px;

        a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            font-size: 11pt;

            margin-right: 8px;

            transition: all .25s ease;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .search {
        margin-left: 32px;

        input[type="text"] {
            border-radius: 8px;
            background-color: #dcddde;
            border: none;
            padding: 12px 16px;
            color: #181819;
        }
    }
    
    .authentication {
        margin-left: auto;
    }
}
</style>