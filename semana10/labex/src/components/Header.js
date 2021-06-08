import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";
import Logo from "../img/logo.png";

const HeaderDiv = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
  height: 12vh;
  background-color: #e6d4e9;
  overflow: hidden;
  margin:0 auto;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: 60%;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
`;




const LogoImg = styled.img`
  height: 10vh;
`;

const Header = () => {
  const history = useHistory();
  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoDiv onClick={() => goToHomePage(history)}>
        <LogoImg  src={Logo}></LogoImg>
          </LogoDiv>
      </HeaderContainer>
    </HeaderDiv>
  );
};
export default Header;
