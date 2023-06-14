<template>
    <ul class="notifications">
        <li class="notification" v-for="(notification, i) in notifications" :class="notification.type" :key="i">
            <p> {{ notification.message }} </p>
        </li>
    </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

import { INotification } from "@/interfaces/IMainStore";

@Options({
    computed: {
        ...mapGetters('mainStore', ['notifications'])
    }
})
export default class Notifications extends Vue {
    notifications!: INotification[];
}
</script>

<style lang="scss" scoped>
ul.notifications {
    li {
        padding: 8px 16px;
    }
}
</style>