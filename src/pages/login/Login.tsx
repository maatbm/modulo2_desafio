import { FormUser } from "../../components/index";
import { Main, LogoContainer, FormContainer } from "./LoginStyle";
import logo from "../../assets/global/logo.png";

export function Login() {
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
