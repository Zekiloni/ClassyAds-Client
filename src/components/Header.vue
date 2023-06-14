<template>
    <div class="header">
        <img class="logo" src="@/assets/logo.png" :alt="appName">

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <RouterLink to="/"> {{ $t('header.pages.home') }} </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/about"> {{ $t('header.pages.about') }} </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink v-if="currentUser && (currentUser.isAdmin || currentUser.isSuperAdmin)" to="/dashboard">
                        Dashboard </RouterLink>
                </li>
            </ul>
        </nav>

        <div class="search">
            <input type="text" v-model="searchAdvertisementQuery" @keydown.enter="searchAdvertisements" spellcheck="false"
                :placeholder="$t('header.search_placeholder')">
        </div>

        <RouterLink v-if="isAuthenticated" class="add-advertisement" to="/add">
            <span> {{ $t('header.add_new_advertisement') }} </span>
            <AkCirclePlusFill class="icon" />
        </RouterLink>

        <div class="authentication">
            <div class="profile" v-if="isAuthenticated && currentUser">
                <FaCircleUser />
                <RouterLink to="/profile">{{ currentUser.username }} </RouterLink>
            </div>

            <RouterLink v-else to="/auth"> Sign in </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { IUser } from "@/interfaces/IUser";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { FaCircleUser, AkCirclePlusFill } from "@kalimahapps/vue-icons";


@Options({
    components: {
        FaCircleUser, AkCirclePlusFill
    },

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

    searchAdvertisements() {
        this.$router.push({ name: 'advertisements-view', query: { search: this.searchAdvertisementQuery } });
    }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;

    margin-top: 24px;
    margin-bottom: 24px;

    padding: 16px 24px;

    border-radius: 8px;

    background-color: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    img.logo {
        width: 40px;
    }

    nav {
        margin-left: 32px;

        ul.nav-list {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;

            li.nav-item {
                margin-right: 16px;

                a {
                    font-weight: bold;
                    color: #2c3e50;
                    text-decoration: none;
                    font-size: 11pt;
                    font-weight: 500;

                    padding: 8px 12px;
                    border-radius: 4px;
                    transition: all .3s ease;

                    &.router-link-exact-active,
                    &:hover {
                        background-color: #f2f2f2;
                        color: #42b983;
                    }
                }
            }
        }
    }

    .search {
        margin-left: 32px;
    }

    .add-advertisement {
        margin-left: auto;
        color: #fefefe;
        background-color: #42b983;
        text-decoration: none;
        font-size: 11pt;
        font-weight: 500;
        padding: 8px 12px;
        border-radius: 4px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: all .3s ease;

        span {
            margin-right: 12px;
        }

        .icon {
            font-size: 16pt;
        }

        &:hover {
            background-color: lighten(#42b983, 10%);
        }
    }

    .authentication {
        margin-left: auto;
    }
}
</style>