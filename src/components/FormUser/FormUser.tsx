import { useContext, useState } from "react";
import { GetUser } from "../../services/user.service";
import { UserContext } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { Container } from "./FormUserStyle";

export function FormUser() {
  const [Username, setUsername] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const userContext = useContext(UserContext);

  async function getUserdata() {
    try {
      const response = await GetUser({ UserName: Username });
      if (userContext) {
        userContext.setUserData(response.data);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  }

  return (
    <Container>
      <h1>Entrar</h1>
      {error && <Error />}
      <div>
        <label htmlFor="UserInput0">Usuário</label>
        <input
          id="UserInput0"
          type="text"
          placeholder="Digite aqui seu usuário do GitHub"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" onClick={getUserdata}>Entrar</button>
      </div>
    </Container>
  );
}
