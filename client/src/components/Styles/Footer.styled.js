import styled from "styled-components";

export const FooterStyles = styled.section`
  background-color: ${({ theme }) => theme.colors.footer};
  .upper-container {
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;

    .company {
      .co-header {
        margin-bottom: 15px;
      }
      ul {
        list-style: none;
        line-height: 25px;
        color: #5d576b;
        font-weight: 100;
      }
      #social-links {
        display: flex;
        margin-top: 15px;
        /* justify-content: center; */
        gap: 10px;
        li {
          font-size: 35px;
          a {
            color: #5d576b;
            &:hover {
              color: white;
            }
          }
        }
      }
    }
    .faq {
      .faq-header {
        margin-bottom: 15px;
      }
      ul {
        list-style: none;
        line-height: 25px;
        font-weight: 100;
        a {
          text-decoration: none;
          /* color: #878787; */
          color: #5d576b;
          &:hover {
            color: white;
          }
        }
      }
    }
    .info {
      .info-header {
        margin-bottom: 15px;
      }
      ul {
        list-style: none;
        line-height: 25px;
        a {
          text-decoration: none;
          /* color: #878787; */
          color: #5d576b;
          font-weight: 100;
          &:hover {
            color: white;
          }
        }
      }
    }
    .news-letter {
      h1 {
        margin-bottom: 15px;
      }
      .news-content {
        line-height: 30px;
        /* color: #878787; */
        color: #5d576b;
        font-weight: 100;
        .news-child {
          #email {
            border: 2px solid #5d576b;
            padding: 10px 15px;
            width: 80%;
            color: #5d576b;
            font-size: 18px;
            font-weight: 100;
          }
          .submit {
            padding: 10px 15px;
            font-size: 18px;
            text-transform: uppercase;
            background-color: #5d576b;
            color: white;
            border: none;
            &:hover {
              color: #5d576b;
              background-color: white;
              border: 2px solid #5d576b;
            }
          }
          span {
            font-style: italic;
          }
        }
      }
    }
  }
  .middle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
    li {
      list-style: none;
      cursor: pointer;
      a {
        color: #5d576b;
        text-decoration: none;
        font-weight: 100;
      }
    }
  }
  .copyright {
    padding: 20px 0;
    margin-left: 60px;
    margin-right: 60px;
    p {
      border-top: 2px solid black;
      display: flex;
      align-items: center;
      justify-content: start;
      padding-top: 10px;
      color: #5d576b;
      font-weight: 100;
    }
  }
`;
