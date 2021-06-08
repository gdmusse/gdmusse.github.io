import React from "react";
import styled from "styled-components";
import Logo from "./logo-site.png";

const ContainerHeader = styled.div`
  display: flex;
  background-color: #ededed;
  height: 20vh;
  justify-content: space-between;
`;
const DivLogo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5%;
`;

const DivMenu = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin: 0 5%;
  justify-content: center;
`;

const ListaMenu = styled.ul`
display:flex;
list-style: none;
`
const ItensLista = styled.li`
padding-right: 2vw;
text-transform: uppercase;
font-weight: bold;
`
export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <DivLogo>
          <img src="https://i.imgur.com/845XGgh.png" alt="logo" />
        </DivLogo>
        <DivMenu>
          <ListaMenu>
            <ItensLista>
              Quem somos
            </ItensLista>
            <ItensLista>
              Atuação
            </ItensLista>
            <ItensLista>
              Tratamentos
            </ItensLista>
          </ListaMenu>
        </DivMenu>
      </ContainerHeader>
    );
  }
}
