import { FormUser } from "../components/index";
import { Main, LogoContainer, FormContainer } from "../styles/pages/HomeStyle";
import logo from "../assets/global/logo.png";

export function Home() {
  return (
    <>
      <Main>
        <LogoContainer>
          <img src={logo} alt="logo da wtech" />
          <h1>wtech</h1>
        </LogoContainer>
        <FormContainer>
          <FormUser />
        </FormContainer>
      </Main>
    </>
  );
}
