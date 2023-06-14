import { ICategory } from "@/interfaces//ICategory";
import { IAdvertisement } from "@/interfaces/IAdvertisement";


export interface INotification {
    type: 'error' | 'warn' | 'success'
    message: string
}

export interface IMainStore {
    categories: ICategory[];
    advertisements: IAdvertisement[]
    notifications: INotification[]
};