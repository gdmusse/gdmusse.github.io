import React from "react";
import styled from "styled-components";
import Logo from "../components/img/labefylogo.png";

const Body = styled.div`
  background-color: #e3e8eb;
  min-height: 80%;
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
`;

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const LogoDiv = styled.img`
  height: 200px;
  margin: 30px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Body>
        <TextDiv>
          <PageTitle>About Us</PageTitle>
          <LogoDiv src={Logo} alt="logo" />
          With Labefy, it’s easy to find the right music or podcast for every
          moment – on your phone, your computer, your tablet and more.
          <p>
            There are millions of tracks and episodes on Labify. So whether
            you’re behind the wheel, working out, partying or relaxing, the
            right music or podcast is always at your fingertips. Choose what you
            want to listen to, or let Labify surprise you.
          </p>
          <p>Soundtrack your life with Labefy. Subscribe or listen for free.</p>
        </TextDiv>
      </Body>
    );
  }
}
