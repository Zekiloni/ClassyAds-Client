import { AdvertisementStatus } from "@/enums/AdvertisementStatus";
import { IUser } from "@/interfaces/IUser";
import { ICategory } from "@/interfaces/ICategory";


export interface IAdvertisement {
	id: number;
	categoryId: number;
	title: string;
	shortDescription: string;
	description: string;
	amount: number;
	isNegotiable: boolean;
	make?: string | null;
	model?: string | null;
	status: AdvertisementStatus;
	isFeatured: boolean;
	isPremium: boolean;
	createdAt: Date;
	expiringAt: Date;
	updatedAt?: Date | null;
	userId: number;
	user?: IUser | null;
	category?: ICategory | null;
}