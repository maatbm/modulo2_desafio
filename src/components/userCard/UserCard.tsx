import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, AvatarContainer, AboutContainer } from "./UserCardStyle";

export function UserCard() {
  const userContext = useContext(UserContext);

  return (
    <>
      <Container>
        <AvatarContainer>
          <img src={userContext?.userData?.avatar_url} alt="Avatar" />
        </AvatarContainer>
        <AboutContainer>
          <h3>Nome</h3>
          <p id="name_user">{userContext?.userData?.name}</p>
          <h3>Bio</h3>
          <p>{userContext?.userData?.bio === null ? "-----" : userContext?.userData?.bio}</p>
        </AboutContainer>
      </Container>
    </>
  );
}
