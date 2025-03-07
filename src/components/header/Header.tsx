import { Container } from "./HeaderStyle";
import logo from "../../assets/header/logoHeader.png";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo da wtech" />
    </Container>
  );
}
