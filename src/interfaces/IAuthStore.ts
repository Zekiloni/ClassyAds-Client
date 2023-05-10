import { IUser } from "@/interfaces/IUser";


export interface IAuthStore {
    token: string | null;
    user: null | IUser;
};