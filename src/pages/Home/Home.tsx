import { Main, LogoContainer, FormContainer } from "./HomeStyle";
import teachLogo from "../../../public/teachlogo.png";

export function Home() {
  return (
    <>
      <Main>
        <LogoContainer>
          <img src={teachLogo} alt="logo do 3035 Teach"/>
          <h1>Teach 3035</h1>
        </LogoContainer>
        <FormContainer></FormContainer>
      </Main>
    </>
  );
}
