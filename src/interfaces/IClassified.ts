import { ClassifiedStatus } from "@/enums/ClassifiedStatus";
import { IUser } from "@/interfaces/IUser";
import { ICategory } from "@/interfaces/ICategory";


export interface IClassified {
	id: number;
	categoryId: number;
	title: string;
	shortDescription: string;
	description: string;
	amount: number;
	isNegotiable: boolean;
	make?: string | null;
	model?: string | null;
	status: ClassifiedStatus;
	isFeatured: boolean;
	isPremium: boolean;
	createdAt: Date;
	expiringAt: Date;
	updatedAt?: Date | null;
	userId: number;
	user?: IUser | null;
	category?: ICategory | null;
}