import { createContext, useState } from "react";

interface UserData {
    id: string;
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
}

export const UserContext = createContext<UserData | null>(null);