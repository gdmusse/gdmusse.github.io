import React from "react";
import Home from "./components/Home";
import CreatePlaylistPage from "./components/CreatePlaylistPage";
import PlaylistListPage from "./components/PlaylistListPage";
import PlaylistDetailsPage from "./components/PlaylistDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./components/parameters";

const FullSite = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  background-color: #e3e8eb;
  min-height: 80%;
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    actualPage: "Home",
  };

  goToHome = () => {
    this.setState({ actualPage: "Home" });
  };
  goToListPage = () => {
    this.setState({ actualPage: "PlaylistList" });
  };
  goToCreatePage = () => {
    this.setState({ actualPage: "CreatePlaylist" });
  };
  goToDetailsPage = () => {
    this.setState({ actualPage: "PlaylistDetails" });
  };

  getPlaylistTracks = (playlist) => {
    axios
      .get(`${baseUrl}/${playlist.id}/tracks`, axiosConfig)
      .then((res) => {
        this.setState({ playlists: playlist });
        this.setState({ tracks: res.data.result.tracks });
        console.log("Get tracks sucessful:", res.data.result.tracks);
        this.setState({ actualPage: "PlaylistDetails" });
      })
      .catch((err) => {
        console.log("get track error:", err);
      });
  };

  renderPage = () => {
    switch (this.state.actualPage) {
      case "Home":
        return <Home />;
      case "CreatePlaylist":
        return <CreatePlaylistPage />;
      case "PlaylistList":
        return <PlaylistListPage getPlaylistTracks={this.getPlaylistTracks} />;
      case "PlaylistDetails":
        return (
          <PlaylistDetailsPage
            track={this.state.tracks}
            playlist={this.state.playlists}
            getPlaylistTracks={this.getPlaylistTracks}
            goToListPage={this.goToListPage}
          />
        );
    }
  };

  render() {
    return (
      <FullSite>
        <Header
          goToHome={this.goToHome}
          goToListPage={this.goToListPage}
          goToCreatePage={this.goToCreatePage}
          actualPage={this.state.actualPage}
        />
        <Body>{this.renderPage()}</Body>
        <Footer />
      </FullSite>
    );
  }
}
