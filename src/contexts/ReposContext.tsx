import { GetRepos } from "../services/repos.service";
import React, { createContext, useState, ReactNode } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  visibility: "public" | "private";
  html_url: string;
  language: string | null;
}

interface RepoContextType {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  fetchRepos: (username: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const RepoContext = createContext<RepoContextType | undefined>(
  undefined
);

export const RepoContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await GetRepos({ username });
      const formattedRepos: GitHubRepo[] = response.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        visibility: repo.visibility,
        html_url: repo.html_url,
        language: repo.language,
      }));
      setRepos(formattedRepos);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao buscar repositórios"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <RepoContext.Provider value={{ repos, loading, error, fetchRepos }}>
      {children}
    </RepoContext.Provider>
  );
};
