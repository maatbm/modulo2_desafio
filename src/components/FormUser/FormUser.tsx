import { Container } from "./FormUserStyle";

export function FormUser() {
  return (
    <Container>
      <h1>Entrar</h1>
      <form method="POST">
        <label htmlFor="UserInput0">Usuário</label>
        <input id="UserInput0" type="text" placeholder="Digite aqui seu usuário do GitHub" required/>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
