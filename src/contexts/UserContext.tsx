import { GetUser } from "../services/user.service";
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
  fetchUser: (username: string) => Promise<string | void>;
  loading: boolean;
  error: Error | null;
}

interface Error{
  status?: boolean;
  message?: string;
}

export const UserContext = createContext<UserContextType | null>({
  userData: null,
  fetchUser: async () => {},
  loading: false,
  error: null,
});

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);

    if (username === "") {
      setError({status: true, message: "O usuário não pode ser vazio"});
      setLoading(false);
    } else {
      try {
        const response = await GetUser({ UserName: username });
        const formattedUser: UserData = {
          id: response.id,
          avatar_url: response.avatar_url,
          name: response.name,
          bio: response.bio,
          login: response.login,
        };
        setUserData(formattedUser);
        return formattedUser.login;
      } catch (err) {
        setError({status: true, message: "Erro ao buscar usuário"});
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <UserContext.Provider value={{ userData, fetchUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
