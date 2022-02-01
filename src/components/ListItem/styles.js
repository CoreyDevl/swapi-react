import styled from "styled-components";

export const Container = styled.div`
 
  h1{
  
    text-align: center;
    max-width: 240px;
    cursor: pointer;
    border-radius: 10px;
    margin: 10px;
    padding: 5px 5px;
    text-decoration: none;
    color: #343330;
    transition: 0.2s;
    &:hover{
      background-color: #343330;
      color: #FFF2EB ;
    }
  }
  hr{
    margin-left: -90px;
    max-width: 350px;
  }

  #allInfo{
    font-size: 20px;
  }
`;