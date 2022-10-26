import styled from "styled-components";

export const PageStyles = styled.div`
  float: left;
  overflow: hidden;

  &:hover .dropdown-content {
    display: block;

    /* margin-top: 20px; */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      &:hover {
        /* background-color: #ddd; */
        background-color: #e4c2b8;
        /* color: #e4c2b8; */
      }
    }
  }
`;
