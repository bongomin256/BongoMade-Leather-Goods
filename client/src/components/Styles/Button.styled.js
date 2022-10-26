import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 16px 40px;
  margin-left: 20px;
  background-color: ${({ bg }) => bg || "#e4c2b8"};
  font-size: 20px;
  cursor: pointer;
  /* display: flex; */
  /* flex-direction: row; */
  &:hover {
    background-color: #ffffff;
  }
`;
