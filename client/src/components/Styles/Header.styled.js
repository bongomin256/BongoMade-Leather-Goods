import styled from "styled-components";
// import navImg from "../../../../public/images/leather.jpeg";
import navImg from "../../images/leather.jpeg";

export const HeaderStyled = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};

  /* This is for hero/home section */
  /* background-image: url(${navImg});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat; */

  .logo {
    /* display: flex;
    flex-direction: column; */
  }
  nav {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 1.2rem;
    cursor: pointer;

    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      #search {
        border-radius: 50px;
        border: 2px solid grey;
        padding: 4px 10px;
      }
    }
  }
`;
