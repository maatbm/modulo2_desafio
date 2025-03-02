import { Main, LogoContainer, FormContainer } from "./HomeStyle";
import logo from "../../assets/global/logo.png";

export function Home() {
  return (
    <>
      <Main>
        <LogoContainer>
          <img src={logo} alt="logo ds wtech"/>
          <h1>wtech</h1>
        </LogoContainer>
        <FormContainer>
          <div>
            <h1>Entrar</h1>
          </div>
        </FormContainer>
      </Main>
    </>
  );
}
