import {
  Container,
  AvatarContainer,
  AboutContainer,
} from "../styles/components/UserCardStyle";

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
        <p>{UserData.name}</p>
        <h3>Bio</h3>
        <p>{UserData.bio === null? "-----": UserData.bio}</p>
      </AboutContainer>
    </Container>
    </>
  );
}
