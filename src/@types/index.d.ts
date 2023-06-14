import { Vue } from "vue";


declare module '@vue/runtime-core' {
    interface App {
        concat(...values: string[]): string;
        truncate(value: string, maxLength: number): string;
        capitalize(value: string): string;
        formatCurrency(value: number, currencySymbol?: string): string;
        reverse(value: string): string;
        isEmpty(value: string): boolean;
    };
};
