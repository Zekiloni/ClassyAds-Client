
<template>
    <div class="user-card">
        {{ user.username }}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUser } from "@/interfaces/IUser";


@Options({
    props: {
        user: {
            type: Object,
            required: true
        }
    }
})
export default class UserCardComponen extends Vue {
    user!: IUser;
};
</script>