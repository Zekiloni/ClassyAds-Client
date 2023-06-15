import { client as WebSocketClient, connection as WebSocketConnection } from "websocket";


export default class WebSocketService {
    public client: WebSocketClient | null;
    public connection: WebSocketConnection | null;

    constructor() {
        this.client = new WebSocketClient();
        this.connection = null;
    }

    connect(url: string) {
        if (!this.client) {
            return;
        }

        this.client.on('connect', (connection) => {
            this.connection = connection;

            console.log('WebSocket connection opened.');

            connection.on('close', () => {
                console.log('WebSocket connection closed.');
            });
        });

        this.client.connect(url);
    }

    send(message: string) {
        if (this.connection && this.connection.connected) {
            this.connection.sendUTF(JSON.stringify(message));
        }
    }

    disconnect() {
        if (this.connection && this.connection.connected) {
            this.connection.close();
            this.connection = null;
        }
    }
}

