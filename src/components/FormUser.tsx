import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../services/user.service";
import { UserContext } from "../contexts/UserContext";
import { Error } from "./Error";
import { Container } from "../styles/components/FormUserStyle";
import { Loading } from "./Loading";

interface ErrorMessage {
  status: boolean;
  message?: string;
}

export function FormUser() {
  const [Username, setUsername] = useState<string>("");
  const [error, setError] = useState<ErrorMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  async function getUserdata() {
    if (Username === "") {
      setError({
        status: true,
        message: "O campo usuário não pode ser vazio",
      });
    } else {
      setLoading(true);
      try {
        const response = await GetUser({ UserName: Username });
        if (userContext) {
          userContext.setUserData(response.data);
          if (response.data && response.data.login) {
            navigate(`/${response.data.login}`);
          }
        }
      } catch (error) {
        setError({
          status: true,
          message: "Usuário não encontrado",
        });
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      {loading && <Loading />}
      <Container $display_container={loading} $display_h1={error?.status}>
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
          <button onClick={getUserdata}>Entrar</button>
        </div>
      </Container>
    </>
  );
}
