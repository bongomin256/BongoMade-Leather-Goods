import styled from "styled-components";
import navImg from "../../images/leather.jpeg";

export const LoginPage = styled.section`
  background-image: url(${navImg});
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginStyles = styled.form`
  background-color: #c48b75;
  opacity: 0.5;
  border-radius: 5px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 0 auto;
  gap: 1.2rem;
  /* margin-top: 130px; */

  input {
    padding: 1rem 1.6rem;
    background-color: black;
    color: white;
    /* border: 2px solid #c48b75; */
    border-radius: 5px;
    font-size: 1.2rem;
    border: none;
    outline: none;
    /* border: 2px solid rgb(228, 194, 184); */
    &:focus {
      box-shadow: 0 0 0 2px white;
    }
  }
  #login {
    background-color: white;
    /* background: none; */
    /* border: 2px solid white; */
    font-size: 1.2rem;
    text-transform: uppercase;
    color: black;
    cursor: pointer;
    &:hover {
      background: black;
      box-shadow: 0 0 0 2px white;
      color: white;
    }
  }
  p {
    text-align: center;
    font-size: 1rem;
  }
  #btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1rem 1.6rem;
    font-size: 1.2rem;
    /* background-color: #c48b75; */
    background-color: black;
    /* border: 2px solid black; */
    color: white;
    text-decoration: none;
    /* text-align: center; */
    cursor: pointer;
    &:hover {
      /* border: 2px solid #c48b75; */
      border: 2px solid white;
      /* background: white; */
      background: white;
      color: #c48b75;
      color: black;
      box-shadow: 0 0 0 2px black;
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
