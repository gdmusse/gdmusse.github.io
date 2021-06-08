import React from "react";
import styled from "styled-components";
import Logo from "../components/img/labefylogo.png";
const HeaderDiv = styled.div`
  display: flex;
  background-color: #fbd094;
  height: 100px;
`;

const HeaderContainer = styled.div`
  width: 940px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
const LogoDiv = styled.div`
  display: flex;
  margin: 10px;
  flex-grow: 0;
  width: 80px;
`;
const NavDiv = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImgDiv = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const NavList = styled.div`
  display: flex;
`;
const NavListOption = styled.li`
  padding: 20px;
  color: black;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
const NavListSelected = styled.li`
  padding: 20px;
  color: #e89105;
  font-weight: bold;
`;

export default class Header extends React.Component {
  render() {
    switch (this.props.actualPage) {
      case "Home":
        return (
          <HeaderDiv>
            <HeaderContainer>
              <LogoDiv onClick={this.props.goToHome}>
                <LogoImgDiv src={Logo} alt="logo" />
              </LogoDiv>
              <NavDiv>
                <NavList>
                  <NavListSelected onClick={this.props.goToHome}>
                    About Us
                  </NavListSelected>
                  <NavListOption onClick={this.props.goToCreatePage}>
                    Create Playlist
                  </NavListOption>
                  <NavListOption onClick={this.props.goToListPage}>
                    Playlists
                  </NavListOption>
                </NavList>
              </NavDiv>
            </HeaderContainer>
          </HeaderDiv>
        );
      case "CreatePlaylist":
        return (
          <HeaderDiv>
            <HeaderContainer>
              <LogoDiv onClick={this.props.goToHome}>
                <LogoImgDiv src={Logo} alt="logo" />
              </LogoDiv>
              <NavDiv>
                <NavList>
                  <NavListOption onClick={this.props.goToHome}>
                    About Us
                  </NavListOption>
                  <NavListSelected onClick={this.props.goToCreatePage}>
                    Create Playlist
                  </NavListSelected>
                  <NavListOption onClick={this.props.goToListPage}>
                    Playlists
                  </NavListOption>
                </NavList>
              </NavDiv>
            </HeaderContainer>
          </HeaderDiv>
        );
      case "PlaylistList":
        return (
          <HeaderDiv>
            <HeaderContainer>
              <LogoDiv onClick={this.props.goToHome}>
                <LogoImgDiv src={Logo} alt="logo" />
              </LogoDiv>
              <NavDiv>
                <NavList>
                  <NavListOption onClick={this.props.goToHome}>
                    About Us
                  </NavListOption>
                  <NavListOption onClick={this.props.goToCreatePage}>
                    Create Playlist
                  </NavListOption>
                  <NavListSelected onClick={this.props.goToListPage}>
                    Playlists
                  </NavListSelected>
                </NavList>
              </NavDiv>
            </HeaderContainer>
          </HeaderDiv>
        );
      case "PlaylistDetails":
        return (
          <HeaderDiv>
            <HeaderContainer>
              <LogoDiv onClick={this.props.goToHome}>
                <LogoImgDiv src={Logo} alt="logo" />
              </LogoDiv>
              <NavDiv>
                <NavList>
                  <NavListOption onClick={this.props.goToHome}>
                    About Us
                  </NavListOption>
                  <NavListOption onClick={this.props.goToCreatePage}>
                    Create Playlist
                  </NavListOption>
                  <NavListSelected onClick={this.props.goToListPage}>
                    Playlists
                  </NavListSelected>
                </NavList>
              </NavDiv>
            </HeaderContainer>
          </HeaderDiv>
        );
    }
  }
}
