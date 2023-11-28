import { api } from "../api";
import { IUser } from "./interfaces/user.interface";

export const login = async (emailProp: string, passwordProp: string): Promise<false | IUser> => {
    const user = await api;

    if(emailProp !== user.email || passwordProp !== user.password) {
        return false;
    }

    return user;
}
