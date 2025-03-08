import { Header, UserCard } from "../../components/index";
import { Container, Main } from "./UserPageStyle";
import { ReposList } from "../../components/ReposList/ReposList";

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
