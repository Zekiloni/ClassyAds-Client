import { IAdvertisement } from "@/interfaces/IAdvertisement";


export interface ICreateCategoryInput {
    name: string;
    description: string;
    parentCategoryId: number | null;
};

export interface ICategory {
    id: number;
    name: string;
    description: string;
    parentCategoryId: number | null;
    createdAt: Date;
    advertisements: IAdvertisement[] | null;
    parentCategory: ICategory | null;
    childCategories: ICategory[] | null;
}