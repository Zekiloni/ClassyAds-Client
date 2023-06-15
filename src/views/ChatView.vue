<template></template>

<script lang="ts">
import { Vue } from "vue-class-component";

import WebSocketService from "@/services/webSocketService";
import { IMessage } from "@/interfaces/IMessage";


export default class ChatView extends Vue {
    socket: WebSocketService | null = null;

    messages: IMessage[] = [];

    get conversations() {
        return this.messages
            .map((message) => [message.sender, message.target])
            .flat()
            .filter((user, index, self) => index === self.findIndex((u) => u.id === user.id));
    }

    mounted() {
        this.socket = new WebSocketService();
        this.socket.connect(process.env.VUE_APP_SOCKET_URL!);

        if (this.socket.connection) {
            this.socket.connection.on('message', (message) => {
                if (message.type === 'utf8') {
                    const data = JSON.parse(message.utf8Data);
                }
            });
        }
    }

    beforeDestroy() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}
</script>