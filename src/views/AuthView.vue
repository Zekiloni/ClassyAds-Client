<template>
    <div class="authorization">
        <h2>
            {{ isLoginSelected ? 'Login' : 'Register' }}
            <button @click="isLoginSelected = !isLoginSelected"> > </button>
        </h2>

        <form @submit.prevent="submitAuth">
            <label for="username"> username </label>
            <input type="text" v-model="authInputs.username" placeholder="Username" />

            <input type="password" v-model="authInputs.password" placeholder="Password" />

            <div v-if="!isLoginSelected">
                <input type="email" v-model="authInputs.emailAddress" placeholder="Email Address" />
                <input type="date" name="date-of-birth" v-model="authInputs.dateOfBirth" placeholder="Birthday date" />
                <input type="text" v-model="authInputs.firstName" placeholder="First Name" />
                <input type="text" v-model="authInputs.lastName" placeholder="Last Name" />
            </div>

            <button type="submit"> {{ isLoginSelected ? 'Login' : 'Register' }} </button>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import { IAuthInput } from "@/interfaces/IUser";
import { INotification } from "@/interfaces/IMainStore";


@Options({
    methods: {
        ...mapActions('authStore', ['login', 'register']),
        ...mapActions('mainStore', ['addNotification'])
    },

    computed: {
        ...mapGetters('authStore', ['isAuthenticated'])
    }
})
export default class AuthorizationView extends Vue {
    isAuthenticated!: boolean;
    login!: (credentials: { username: string | null, password: string | null }) => Promise<void>;
    register!: (data: IAuthInput) => Promise<void>;
    addNotification!: (notification: INotification) => void;

    isLoginSelected: boolean = true;

    authInputs: IAuthInput = {
        username: null,
        password: null,
        emailAddress: null,
        dateOfBirth: null,
        firstName: null,
        lastName: null
    };

    mounted(): void {
        if (this.isAuthenticated) {
            this.$router.back();
        }
    }

    async submitAuth() {
        try {
            if (this.isLoginSelected) {
                this.login({
                    username: this.authInputs.username,
                    password: this.authInputs.password,
                });

                if (this.isAuthenticated) {
                    this.$router.push('/');
                }
            } else {
                await this.register({
                    username: this.authInputs.username,
                    password: this.authInputs.password,
                    firstName: this.authInputs.firstName,
                    lastName: this.authInputs.lastName,
                    dateOfBirth: this.authInputs.dateOfBirth,
                    emailAddress: this.authInputs.emailAddress,
                });
            }
        } catch (error) {
            this.addNotification({
                type: 'error',
                message: 'eee'
            })
            console.error(error);
        }
    }
};
</script>

<style lang="scss">
input {
    display: block;
}
</style>