import { Container } from "../styles/components/HeaderStyle";
import logo from "../../public/logo.png";
import volta from "../assets/global/de-volta.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <img role="button" src={volta} onClick={()=>navigate(-1)} id="goBack"/>
      <img src={logo} alt="Logo da wtech" />
      <h2>wtech</h2>
    </Container>
  );
}
