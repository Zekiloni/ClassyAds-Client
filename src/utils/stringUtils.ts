
import { Vue } from "vue-class-component";


export default class StringUtils extends Vue {
    concat(...values: string[]): string {
        return values.join('');
    }

    truncate(value: string, maxLength: number): string {
        return maxLength && value.length > maxLength ? value.slice(0, maxLength - 3) + '...' : value;
    }

    capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    formatCurrency(value: number, currencySymbol: string = '$'): string {
        return currencySymbol + value.toFixed(2);
    }

    reverse(value: string): string {
        return value.split('').reverse().join('');
    }

    isEmpty(value: string): boolean {
        return value.trim().length === 0;
    }
}