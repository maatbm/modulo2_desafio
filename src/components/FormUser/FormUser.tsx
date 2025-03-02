import { useContext, useState } from "react";
import { GetUser } from "../../services/user.service";
import { UserContext } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { Container } from "./FormUserStyle";

interface ErrorMessage {
  status: boolean;
  message?: string;
}

export function FormUser() {
  const [Username, setUsername] = useState<string>("");
  const [error, setError] = useState<ErrorMessage | null>(null);
  const userContext = useContext(UserContext);

  async function getUserdata() {
    if (Username === "") {
      setError({ status: true, message: "O campo usuário não pode ser vazio" });
    } else {
      setError({ status: false});
      try {
        const response = await GetUser({ UserName: Username });
        if (userContext) {
          userContext.setUserData(response.data);
          setError({ status: false});
        }
      } catch (error) {
        setError({ status: true, message: "Erro ao consultar o usuário" });
      }
    }
  }

  return (
    <Container>
      <h1>Entrar</h1>
      {error?.status && <Error error={error.message} />}
      <div>
        <label htmlFor="UserInput0">Usuário</label>
        <input
          id="UserInput0"
          type="text"
          placeholder="Digite aqui seu usuário do GitHub"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" onClick={getUserdata}>
          Entrar
        </button>
      </div>
    </Container>
  );
}
