import { UserRole } from "@/enums/UserRole";
import { IClassified } from "@/interfaces/IClassified";


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
    orders: IClassified[] | null;
    isAdmin: boolean;
    isSuperAdmin: boolean;
}