import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLink = styled(Link)`
  padding: 12px;
  border: 1px solid silver;
  border-radius: 10px;
  width: 130px;
  height: 200px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;