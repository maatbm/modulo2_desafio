import { Header, UserCard, ReposList } from "../../components";
import { Container, Main } from "./UserPageStyle";

export function UserPage() {

  return (
    <>
      <Header />
      <Main>
        <Container>
          <h1>Informações do perfil</h1>
          <div>
            <UserCard />
          </div>
          <ReposList />
        </Container>
      </Main>
    </>
  );
}
