import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO NÍVEL SUPERIOR</h3>
        <PerguntaAberta pergunta={"1. Qual o curso?"} />
        <PerguntaAberta pergunta={"2. Qual a unidade de ensino?"} />
      </div>
    );
  }
}
