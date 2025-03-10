import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts";
import { Error, Loading } from "../"
import { Container } from "./FormUserStyle";

export function FormUser() {
  const [Username, setUsername] = useState<string>("");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  async function getUserdata() {
    const user = await userContext?.fetchUser(Username);
    if(user){
      navigate(`/user/${user}`);
    }
  }

  return (
    <>
      {userContext?.loading && <Loading />}
      {userContext?.error?.status && <Error error={userContext.error.message} />}
      <Container $display_container={userContext?.loading} $display_h1={userContext?.error?.status}>
        <h1>Entrar</h1>
        <div>
          <label htmlFor="UserInput0">Usuário</label>
          <input
            id="UserInput0"
            type="text"
            placeholder="Digite aqui seu usuário do GitHub"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
          <button onClick={getUserdata}>Entrar</button>
        </div>
      </Container>
    </>
  );
}
