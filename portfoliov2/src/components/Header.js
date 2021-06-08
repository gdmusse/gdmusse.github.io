import styled from "styled-components";
import Logo from "../assets/logomeu.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Email from "../assets/email.svg";

const HeaderDiv = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #f4ebd0;
  @media only screen and (max-width: 400px) {
    padding-top: 1vh;
    padding-bottom: 2vh;
  }
`;
const HeaderContainer = styled.div`
  width: 70vw;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 400px) {
    width: 95vw;
    flex-direction: column;
  }
`;
const ImgLogo = styled.img`
  max-width: 20%;
  height: auto;
  @media only screen and (max-width: 400px) {
    max-width: 40%;
  }
`;
const SocialDiv = styled.div``;

const SocialIcon = styled.img`
  max-width: 68px;
  height: auto;
  margin: 10px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  @media only screen and (max-width: 400px) {
    max-width: 45px;
    margin: 3px;
  }
`;
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <ImgLogo src={Logo} />
        <SocialDiv>
          <SocialIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gabriel-musse-061116b7/",
                "_blank"
              )
            }
            src={Linkedin}
          />
          <SocialIcon
            onClick={() => window.open("https://github.com/gdmusse/", "_blank")}
            src={GitHub}
          />
          <SocialIcon
            onClick={() => window.open("mailto:gdmusse@hotmail.com")}
            src={Email}
          />
        </SocialDiv>
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
