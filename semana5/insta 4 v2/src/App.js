import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Inputs = styled.input`
  width: 300px;
  margin-bottom: 15px;
  padding: 0;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
      {
        nomeUsuario: "gabriel",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2",
      },
      {
        nomeUsuario: "ernesto",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=3",
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novosPosts });
  };

  onChangeInputNomeusuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div className={"app-container"}>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </div>
      );
    });
    return (
      <div>
        <ContainerInputs>
          NOVO POST
          <Inputs
            value={this.setState.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeusuario}
            placeholder={"Insira o nome do Usuário"}
          />
          <Inputs
            value={this.setState.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Insira o url da foto do Usuário"}
          />
          <Inputs
            value={this.setState.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Insira o url da foto do post"}
          />
          <button onClick={this.adicionaPost}> Adicionar Post</button>
        </ContainerInputs>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}
export default App;
