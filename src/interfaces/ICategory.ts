import { IClassified } from "@/interfaces/IClassified";


export interface ICategory {
    id: number;
    name: string;
    description: string;
    parentCategoryId: number | null;
    createdAt: Date;
    classifieds: IClassified[] | null;
    parentCategory: ICategory | null;
    childCategories: ICategory[] | null;
}