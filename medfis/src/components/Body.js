import React from "react";
import styled from "styled-components";
import { ImageOverlay } from "react-image-overlay-effect";

const ContainerPai = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: 100vh;
box-sizing: border-box;
`;

const ContainerBody = styled.div`
  display: flex;
  background-color: white;
  height: 60vh;
  box-sizing: border-box;
`;

const ContainerBody1 = styled.div`
  background-color: #86cc81;
  height: 60vh;
  box-sizing: border-box;
  padding: 50px;
`;

const ImagemMedicos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const TextoLeon = styled.div`
  box-sizing: border-box;
  color: white;
  margin: 50px;
`;
const TextoMusse = styled.div`
  box-sizing: border-box;
  color: white;
  margin: 120px;
`;

export default class Body extends React.Component {
  render() {
    return (
      <ContainerPai>
      <ContainerBody>
        <ImagemMedicos>
          <ImageOverlay
            src="https://i.imgur.com/peGxSAC.png"
            description={
              <TextoLeon>
                <h1>Dr Leon Kulkes</h1>
                <p>Formação em medicina pela UCPEL de Pelotas em 1979</p>
                <p>
                  Especialização em MEdicina fisica e reabilitação pela
                  Associação Brasileira de Medicina física e Reabilitação
                </p>
                <p>Membro do corpo Clinico do hospital são lucas da PUCRS</p>
                <p>EX-professor da Famed PUCRS</p>
                <p>
                  Certificação pela Sociedade Brasileira de terapia por Ondas de
                  Choque
                </p>
              </TextoLeon>
            }
          />
        </ImagemMedicos>
        <ImagemMedicos>
          <ImageOverlay
            src="https://i.imgur.com/lIokoZz.png"
            description={
              <TextoMusse>
                <h1>Dr Carlos Alberto Issa Musse</h1>
                <p>Formação em medicina pela UFRGS em 1981</p>
                <p>
                  Especialização em Medicina fisica e reabilitação pela
                  Associação Brasileira de Medicina física e Reabilitação
                </p>
                <p>Prof Adjunto da Faculdade de Medicina da PUCRS</p>
                <p>Membro da Internacional Society of Physical and Rehabilitation Medicine (ISPMR) e Internacional Association for Study of Pain (IASP)</p>
                <p>
                Titulado pela Associação Médica Brasileira com área de atuação em Dor
                </p>
                <p>Extensão universitária em Principles and Practice of Clinical Research. - Harvard Medical School.</p>
                <p>Ergonomia aplicada ao trabalho. Universita Degli Studi di Milano</p>
              </TextoMusse>
            }
          />
        </ImagemMedicos>
      </ContainerBody>
      <ContainerBody1>
            <h1>A CLÍNICA</h1>

<p>Inaugurada em 1986 pelos Fisiatras Dr Carlos Musse e Leon Kulkes, especializou-seno tratamento conservador das doenças músculo articulares, dor e disfunções neurológicas.</p>
<p>Buscou ocupar uma lacuna nas áreas de assistência médica do estado, pautando-se por tecnologia, ética e atualização cientifica, sem perder a importante relação humana entre médico e paciente.</p>
<p>Hoje possui sede própria, instalações climatizadas, equipamentos atualizados de ultima geração.</p>
      </ContainerBody1>
      </ContainerPai>
    );
  }
}
