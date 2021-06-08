import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { RubberBand } from "animate-css-styled-components";
import Logo from "../images/astrologo.png";

const UsersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid grey;
  margin: 10px;
`;

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 100%;
  object-fit: cover;
`;

const FullPage = styled.div`
  overflow-y: scroll;
  background-image: linear-gradient(#00e5d5, #00b3e7);
  height: 100%;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const MensagemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextoMensagemDiv = styled.div`
  color: white;
  text-shadow: 1px 1px 4px #000000;
`;

const ImgLogo = styled.img`
  width: 300px;
`;
const Users = () => {
  const [matchList, setMatchList] = useState([]);
  const [loading, setLoading] = useState(true);

  const pegarMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/matches "
      )
      .then((response) => {
        setMatchList(response.data.matches);
        setLoading(false);
        console.log("response:", response.data.matches);
        console.log("matchlist:", matchList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarMatches();
  }, []);

  if (matchList.length !== 0 && loading === false) {
    return (
      <FullPage>
        {matchList.map((user) => {
          return (
            <UsersDiv>
              <UserImg src={user.photo}></UserImg>
              <TextoMensagemDiv>
                {" "}
                {user.name} , {user.age}
              </TextoMensagemDiv>
            </UsersDiv>
          );
        })}
      </FullPage>
    );
  } else if (matchList.length === 0 && loading === false) {
    return (
      <FullPage>
        <MensagemDiv>
          <TextoMensagemDiv>Você ainda não tem matches</TextoMensagemDiv>
        </MensagemDiv>
      </FullPage>
    );
  } else if (loading === true) {
    return (
      <FullPage>
        <MensagemDiv>
          <RubberBand duration="1s" delay="0">
            <ImgLogo src={Logo}></ImgLogo>
          </RubberBand>
        </MensagemDiv>
      </FullPage>
    );
  }
};
export default Users;
