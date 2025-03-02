import { API } from "./API";

interface UserNameProps {
    UserName: string;
}

export async function GetUser({UserName}: UserNameProps) {
    try {
        const response = await API.get(`/${UserName}`);
        return response;
    } catch (error) {
        throw new Error(error as string);
    }
}