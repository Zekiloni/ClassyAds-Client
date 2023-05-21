import { AdvertisementStatus } from "@/enums/AdvertisementStatus";
import { IUser } from "@/interfaces/IUser";
import { ICategory } from "@/interfaces/ICategory";

export interface IAdvertisementSearchInput {
	filter: string | null;
	pageNumber: number;
	pageSize: number;
	categoryId: number | null;
	sortBy: 'price_asc' | 'price_desc' | 'date_asc' | 'date_desc'
}

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