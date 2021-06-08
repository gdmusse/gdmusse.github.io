import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Users from "../components/Users";
import styled from "styled-components";


const FullPage = styled.div`
margin:0 auto;
display: flex;
justify-content:center;
margin-top: 100px;

`
const ContainerPage = styled.div`
display:flex;
flex-direction: column;
height: 650px;
width: 500px;
border: 1px solid black;
border-radius: 15px;
`


const Home = () => {
  return (
    <FullPage>
      <ContainerPage>
          <Header />
          <Users />
      </ContainerPage>
    </FullPage>
  );
};
export default Home;
