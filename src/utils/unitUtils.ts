


import { Vue } from "vue-class-component";


export default class StringUtils extends Vue {
    formatFileSize(fileSize: number): string {
        const units = ["B", "KB", "MB", "GB", "TB"];
        let size = fileSize;
        let unitIndex = 0;

        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

        return `${size.toFixed(2)} ${units[unitIndex]}`;
    }
}