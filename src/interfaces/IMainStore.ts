import { ICategory } from "@/interfaces//ICategory";
import { IClassified } from "@/interfaces/IClassified";


export interface IMainStore {
    categories: ICategory[];
    classifieds: IClassified[]
};