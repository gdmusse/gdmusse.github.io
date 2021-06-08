import styled from "styled-components";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";

const FooterDiv = styled.div`
  border-top: 1px solid black;
  width: 100%;
  height: 13vh;
  padding: 1%;
  background-color: #4e0259;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
`;

const FooterContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 1800px) {
  }
`;
const LeftDiv = styled.div`
  width: 50%;
  height: 13vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 700px) {
    margin-left: 5px;
  }
`;
const RightDiv = styled.div`
  width: 50%;
  height: 13vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 700px) {
    margin-right: 5px;
  }
  @media (max-width: 1800px) {
  }
`;
const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
  @media (max-width: 700px) {
    margin: 0;
    height: 30px;
    width: 30px;
  }
  @media (max-width: 1800px) {
  }
`;

const LeftText = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  @media (max-width: 700px) {
    margin: 0;
    word-break: break-all;
    font-size: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContainer>
        <LeftDiv>
          <LeftText>2021 Gabriel Dienstmann Musse ©</LeftText>
          <LeftText>All rights reserved Labenu</LeftText>
        </LeftDiv>
        <RightDiv>
          <SocialDiv
            onClick={() => window.open("https://facebook.com/", "_blank")}
          >
            <img src={Facebook} alt="facebook" />
          </SocialDiv>
          <SocialDiv
            onClick={() => window.open("https://twitter.com/", "_blank")}
          >
            <img src={Twitter} alt="twitter" />
          </SocialDiv>
          <SocialDiv
            onClick={() => window.open("https://instagram.com/", "_blank")}
          >
            <img src={Instagram} alt="facebook" />
          </SocialDiv>
        </RightDiv>
      </FooterContainer>
    </FooterDiv>
  );
};
export default Footer;
