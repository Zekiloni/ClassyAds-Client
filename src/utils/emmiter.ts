type EventMap = Record<string, unknown[]>;


export class EventEmitter<T extends EventMap> {
    private events: Partial<Record<keyof T, ((...args: T[keyof T]) => void)[]>> = {};

    public on<K extends keyof T>(eventName: K, listener: (...args: T[K]) => void): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName]!.push(listener as (...args: T[keyof T]) => void);
    }

    public emit<K extends keyof T>(eventName: K, ...args: T[K]): void {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach((listener) => {
                listener(...args);
            });
        }
    }

    public off<K extends keyof T>(eventName: K, listener: (...args: T[K]) => void): void {
        const listeners = this.events[eventName];
        if (listeners) {
            const index = listeners.indexOf(listener as (...args: T[keyof T]) => void);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
}