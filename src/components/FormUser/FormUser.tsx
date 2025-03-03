import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../services/user.service";
import { UserContext } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { Container, H1 } from "./FormUserStyle";

interface ErrorMessage {
  status: boolean;
  message?: string;
  displayH1?: string;
}

export function FormUser() {
  const [Username, setUsername] = useState<string>("");
  const [error, setError] = useState<ErrorMessage | null>(null);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  async function getUserdata() {
    if (Username === "") {
      setError({ status: true, message: "O campo usuário não pode ser vazio", displayH1: "none" });
    } else {
      try {
        const response = await GetUser({ UserName: Username });
        if (userContext) {
          userContext.setUserData(response.data);
          if (response.data && response.data.login) {
            navigate(`/${response.data.login}`);
          }
        }
      } catch (error) {
        setError({ status: true, message: "Erro ao consultar o usuário", displayH1: "none" });
      }
    }
  }

  return (
    <Container>
      <H1 display={error?.displayH1}>Entrar</H1>
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
