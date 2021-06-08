import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const ContainerEtapa = styled.div`
  text-align: center;
`;

const BotaoEtapas = styled.button`
  margin-top: 20px;
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  irParaInicio = () => {
    this.setState({ etapa: 1 });
  };

  render() {
    return (
      <ContainerEtapa>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <BotaoEtapas onClick={this.irParaProximaEtapa}>
            Próxima Etapa
          </BotaoEtapas>
        )}
        {this.state.etapa === 4 && (
          <BotaoEtapas onClick={this.irParaInicio}>
            Voltar ao Inicio
          </BotaoEtapas>
        )}
      </ContainerEtapa>
    );
  }
}
