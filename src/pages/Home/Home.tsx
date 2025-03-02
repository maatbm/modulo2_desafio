import { FormUser } from "../../components/FormUser/FormUser";
import { Main, LogoContainer, FormContainer } from "./HomeStyle";
import logo from "../../assets/global/logo.png";

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
