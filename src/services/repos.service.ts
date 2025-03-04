import { API } from "./API";

interface Props {
  username: string;
}

export async function GetRepos({ username }: Props) {
  try {
    const response = await API.get(`/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
}
