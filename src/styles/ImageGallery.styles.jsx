import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkMouviePage = styled(NavLink)`
  display: inline-block;

  padding: 12px;
  color: #2a363b;
  font-size: 15px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ListMouviesPage = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: center;
  list-style: none;
  text-overflow: ellipsis;
`;
export const ItemsMouviePage = styled.li`
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const ImgMouviePage = styled.img`
  max-width: 100%;
`;
