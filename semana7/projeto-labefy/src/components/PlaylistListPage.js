import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import styled from "styled-components";

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const ListDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
`;

const ListContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  width: 50%;
`;
const PlaylistInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NamesDiv = styled.div`
  margin: 10px;
  text-align: center;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  background-color: #d94d34;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 50px;
  height: auto;
  padding: 1px;
  transition: 150ms;
  margin-left: 30px;
  &:hover {
    background-color: #8f3221;
    cursor: pointer;
  }
`;

const TracksButton = styled.button`
  background-color: #fd7d02;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 50px;
  padding: 1px;
  transition: 150ms;
  &:hover {
    background-color: #c76303;
    cursor: pointer;
  }
`;

export default class CreatePlaylistPage extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Something went wrong, check console");
        console.log(err);
      });
  };

  deletePlaylist = (playlist) => {
    if (window.confirm(`Are you sure you want to delete ${playlist.name}?`)) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
          axiosConfig
        )
        .then(() => {
          alert("Playlist deleted successfully");
          this.getAllPlaylists();
        })
        .catch((err) => {
          alert("User deleted failed");
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.playlists.length > 0 ? (
          <ListDiv>
            <PageTitle>Playlists</PageTitle>
            <ListContainer>
              {this.state.playlists.map((playlist) => (
                <PlaylistInfo key={playlist.id}>
                  <NamesDiv>{playlist.name}</NamesDiv>
                  <ButtonDiv>
                    <TracksButton
                      onClick={() => this.props.getPlaylistTracks(playlist)}
                    >
                      Tracks
                    </TracksButton>
                    <DeleteButton onClick={() => this.deletePlaylist(playlist)}>
                      Delete
                    </DeleteButton>
                  </ButtonDiv>
                </PlaylistInfo>
              ))}
            </ListContainer>
          </ListDiv>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
