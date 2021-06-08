import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import styled from "styled-components";

const Site = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 1000px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Site>
        <Header />
        <Body />
      </Site>
    );
  }
}
