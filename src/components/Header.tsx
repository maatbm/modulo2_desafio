import { Container } from "../styles/components/HeaderStyle";
import logo from "../../public/logo.png";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo da wtech" />
      <h2>wtech</h2>
    </Container>
  );
}
