import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SuperLink = styled(NavLink)`
  display: inline-block;

  font-weight: 500;
  color: #2a363b;
  font-size: 25px;
  &.active {
    color: #2196f3;
  }
`;
export const List = styled.ul`
  list-style: none;
  text-decoration: underline;
`;
export const Header = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
export const ButtonGoBack = styled.button`
  margin: 15px;
`;
export const LinkGoBack = styled(NavLink)`
  border-radius: 6px;
  border: 1px solid black;
  text-decoration: none;
  padding: 7px;
  margin-bottom: 15px;
  color: black;
`;
export const Img = styled.img`
  margin-top: 20px;
`;
