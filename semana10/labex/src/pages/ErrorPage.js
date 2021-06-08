import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FullPage = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 75vh;
`;

const BackButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  border: 3px solid #c443aa;
  border-radius: 7px;
  background-color: white;
  color: #c443aa;
  &:hover {
    background-color: #c443aa;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const ErrorPage = () => {
  const history = useHistory();
  return (
    <FullPage>
      <BodyDiv>
        <p>Erro 404 - Essa página não existe!</p>
        <BackButton onClick={history.goBack}>Voltar</BackButton>
      </BodyDiv>
    </FullPage>
  );
};

export default ErrorPage;
