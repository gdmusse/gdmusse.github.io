import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import styled from "styled-components";

const CreateDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
`;
const BoxContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

const InputAdd = styled.input`
  width: 90%;
  padding: 0;
  margin: 5px;
  text-align: center;
  margin-bottom: 30px;
`;
const CreateButton = styled.button`
  background-color: #fd7d02;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 50%;
  padding: 1px;
  transition: 150ms;
  &:hover {
    background-color: #c76303;
    cursor: pointer;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const TextDiv = styled.div``;

const ObsDiv = styled.div`
  color: grey;
  font-style: italic;
  margin-bottom: 20px;
`;

export default class CreatePlaylistPage extends React.Component {
  state = {
    inputNamePlaylist: "",
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputNamePlaylist,
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        alert(
          `Playlist ${this.state.inputNamePlaylist} was successfully added`
        );
        this.setState({ inputNamePlaylist: "" });
      })
      .catch((err) => {
        alert("Something went wrong with the playlist creation, check console");
        console.log(err);
      });
  };

  handleNamePlaylist = (e) => {
    this.setState({ inputNamePlaylist: e.target.value });
  };

  render() {
    return (
      <CreateDiv>
        <PageTitle>Create Playlist</PageTitle>
        <BoxContainer>
          <TextDiv>Name:</TextDiv>
          <ObsDiv>
            You cannot create a playlist with the same name of an existing one.
          </ObsDiv>
          <InputAdd
            placeholder="New playlist name"
            onChange={this.handleNamePlaylist}
            value={this.state.inputNamePlaylist}
          />
          <CreateButton onClick={this.createPlaylist}>CREATE</CreateButton>
        </BoxContainer>
      </CreateDiv>
    );
  }
}
