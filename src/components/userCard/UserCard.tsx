import {
  Container,
  AvatarContainer,
  AboutContainer,
} from "./UserCardStyle";

interface Props {
  avatar: string | undefined;
  name: string | undefined;
  bio: string | undefined;
}

export function UserCard(UserData: Props) {
  return (
    <>
    <Container>
      <AvatarContainer>
        <img src={UserData.avatar} alt="Avatar" />
      </AvatarContainer>
      <AboutContainer>
        <h3>Nome</h3>
        <p id="name_user">{UserData.name}</p>
        <h3>Bio</h3>
        <p>{UserData.bio === null? "-----": UserData.bio}</p>
      </AboutContainer>
    </Container>
    </>
  );
}
