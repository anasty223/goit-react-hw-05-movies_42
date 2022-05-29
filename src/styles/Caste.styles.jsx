import styled from "styled-components";

export const ListCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: center;
  list-style: none;
  text-overflow: ellipsis;
`;
export const ItemsCast = styled.li`
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const ImgCast = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
