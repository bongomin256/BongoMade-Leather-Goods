import styled from "styled-components";
import navImg from "../../images/leather.jpeg";

export const Signupage = styled.section`
  background-image: url(${navImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 0 auto;
  gap: 1.2rem;
  /* margin-top: 130px; */

  input {
    padding: 1rem 1.6rem;
    border: 2px solid #c48b75;
    font-size: 1.2rem;
    /* border: 2px solid rgb(228, 194, 184); */
  }
  #signup {
    /* background: white; */
    background: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #c48b75;
    cursor: pointer;
    &:hover {
      background: #c48b75;
      color: white;
    }
  }
  p {
    text-align: center;
    font-size: 1rem;
    color: white;
    /* a {
      color: white;
    } */
  }
  #btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1rem 1.6rem;
    font-size: 1.2rem;
    background-color: #c48b75;
    color: white;
    text-decoration: none;
    /* text-align: center; */
    cursor: pointer;
    &:hover {
      border: 2px solid #c48b75;
      background: white;
      color: #c48b75;
    }
    /* a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #c48b75;
      }
    } */
  }
`;
