import { ICategory } from "@/interfaces//ICategory";
import { IAdvertisement } from "@/interfaces/IAdvertisement";


export interface IMainStore {
    categories: ICategory[];
    advertisements: IAdvertisement[]
};