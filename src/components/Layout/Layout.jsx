import { NavLink, Outlet } from "react-router-dom";
import { SuperLink, Container } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>
      <SuperLink to="/">Home</SuperLink> |
      <SuperLink to="/mouvies">Mouvies</SuperLink>
      <Outlet />
    </Container>
  );
}
