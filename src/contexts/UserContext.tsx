import { createContext, useState } from "react";

interface UserData {
    id: string;
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
}

interface UserContextType {
    userData: UserData | null;
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

export const UserContext = createContext<UserContextType | null>({
    userData: null,
    setUserData: () => {}
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
