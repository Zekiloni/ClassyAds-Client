<template>
    <div class="notifications-container">
        <div class="notification" v-for="(notification, i) in notifications" :class="notification.type" :key="i">
            <p> {{ notification.message }} </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

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