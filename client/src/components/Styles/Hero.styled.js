import styled from "styled-components";
import navImg from "../../images/leather.jpeg";

export const HeroStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-image: url(${navImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 35px;
  color: #ffffff;

  p {
    font-weight: 100;
  }

  #reverse {
    &:hover {
      background-color: #e4c2b8;
    }
  }
`;
