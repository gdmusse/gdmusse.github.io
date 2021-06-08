import React, { Component } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Line = styled.hr`
  flex: auto;
  width: auto;
  border: 1px solid #ad2985;
  background-color: #ad2985;
  opacity: 0.2;
`;

const PageTitleDiv = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 700px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  font-weight: 500;
  font-size: 35px;
  color: #ad2985;
`;

class PageTitle extends Component {
  render() {
    return (
      <TitleContainer>
        <Line />
        <PageTitleDiv>{this.props.titulo}</PageTitleDiv>
        <Line />
      </TitleContainer>
    );
  }
}

export default PageTitle;
