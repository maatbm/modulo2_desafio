import { FormUser } from "../../components/index";
import { Main, LogoContainer, FormContainer } from "./LoginStyle";
import logo from "../../assets/login/logoLogin.png";

export function Login() {
  return (
    <>
      <Main>
        <LogoContainer>
          <img src={logo} alt="logo da wtech" />
        </LogoContainer>
        <FormContainer>
          <FormUser />
        </FormContainer>
      </Main>
    </>
  );
}
