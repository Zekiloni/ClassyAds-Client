<template></template>

<script lang="ts">
import { Vue } from "vue-class-component";

import WebSocketService from "@/services/webSocketService";


export default class ChatView extends Vue {
    socket: WebSocketService | null = null;

    mounted() {
        this.socket = new WebSocketService();
        this.socket.connect(process.env.VUE_APP_SOCKET_URL!);
    }

    beforeDestroy() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}
</script>