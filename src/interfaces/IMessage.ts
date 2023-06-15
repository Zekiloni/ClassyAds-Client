import { IUser } from "@/interfaces/IUser";


export interface IMessage {
    id: number;
    senderId: number;
    targetId: number;
    content: string;
    createdAt: Date;
    readAt: Date | null;
    sender: IUser;
    target: IUser;
}