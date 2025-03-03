import { useParams } from "react-router-dom";

export function UserPage() {
  const {username} = useParams();

  return <h1>Olá {username}</h1>;
}
