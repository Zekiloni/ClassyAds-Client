import { UserRole } from "@/enums/UserRole";
import { IAdvertisement } from "@/interfaces/IAdvertisement";
import { IMessage } from "@/interfaces/IMessage";


export interface IAuthInput {
    username: string | null;
    password: string | null;
    emailAddress: string | null;
    dateOfBirth: string | null;
    firstName: string | null;
    lastName: string | null;
};

export interface IUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    emailAddress: string | null;
    phone: string | null;
    street: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
    role: UserRole;
    lastLoginAt: Date | null;
    updatedAt: Date | null;
    createdAt: Date;
    advertisements: IAdvertisement[] | null;
    messages: IMessage[] | null;
    isAdmin: boolean;
    isSuperAdmin: boolean;
};