import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SuperLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 25px;
  &.active {
    color: #2196f3;
  }
`;
export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
