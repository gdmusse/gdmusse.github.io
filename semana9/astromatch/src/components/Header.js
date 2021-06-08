import React, { useEffect, useState } from "react";
import Logo from "../images/astrologo.png";
import styled from "styled-components";
import Talk from "../images/talk.png";
import TalkHover from "../images/talkhover.png";
import Home from "../images/home.png";
import HomeHover from "../images/homehover.png";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 96%;
  height: 50px;
`;

const LogoImg = styled.img`
  height: 50px;
  margin-left: 25px;
`;

const BotaoHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoTalk = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const TalkImg = styled.img`
  height: 50px;
  display: inline;
  &:hover {
    cursor: pointer;
  }
  ${BotaoTalk}:hover & {
    display: none;
  } ;
`;

const TalkImgHover = styled.img`
  display: none;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  ${BotaoTalk}:hover & {
    display: inline;
  } ;
`;

const HomeImg = styled.img`
  height: 30px;
  display: inline;
  &:hover {
    cursor: pointer;
  }
  ${BotaoHome}:hover & {
    display: none;
  } ;
`;

const HomeImgHover = styled.img`
  display: none;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  ${BotaoHome}:hover & {
    display: inline;
  } ;
`;


const Header = () => {
  return (
    <HeaderDiv>
      <Link to="/">
        <BotaoHome>
          <HomeImg src={Home}></HomeImg>
          <HomeImgHover src={HomeHover}></HomeImgHover>
        </BotaoHome>
      </Link>
      <LogoImg src={Logo}></LogoImg>
      <Link to="/matches">
        <BotaoTalk>
          <TalkImg src={Talk}></TalkImg>
          <TalkImgHover src={TalkHover}></TalkImgHover>
        </BotaoTalk>
      </Link>
    </HeaderDiv>
  );
};
export default Header;
