import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Heart from "../images/heart.png";
import X from "../images/xbutton.png";
import Logo from "../images/astrologo.png";
import { RubberBand } from "animate-css-styled-components";

const ImgLogo = styled.img`
  width: 300px;
`;
const DivFundo = styled.div`
  background-image: linear-gradient(#00e5d5, #00b3e7);
  height: 100%;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const UsersDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TextDiv = styled.div`
  width: 350px;
  position: absolute;
  bottom: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px 4px #000000;
  z-index: 0;
`;

const TextoMensagemDiv = styled.div`
  color: white;
  text-shadow: 1px 1px 4px #000000;
`;

const MensagemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TituloDiv = styled.div`
  font-weight: bold;
  font-size: 26px;
`;

const UserImg = styled.img`
  height: 400px;
  width: 400px;
  box-shadow: 0px 0px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  object-fit: cover;
`;

const BotoesDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BotaoNao = styled.button`
  margin-right: 20px;
  border: 3px solid #ff5050;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  &:hover {
    background-color: #ff5050;
    transition: 150ms;
    cursor: pointer;
  }
`;

const BotaoSim = styled.button`
  margin-left: 20px;
  border: 3px solid #0aaa14;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  &:hover {
    background-color: #0aaa14;
    transition: 150ms;
    cursor: pointer;
  }
`;

const ResetDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const BotaoReset = styled.button`
  border: 3px solid #fcce4e;
  border-radius: 10px;
  width: 250px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-weight: bold;

  &:hover {
    background-color: #fcce4e;
    text-shadow: 1px 1px 4px #000000;
    transition: 150ms;
    color: white;
    cursor: pointer;
  }
`;

const HeartImg = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const XImg = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Users = () => {
  const [userList, setUserList] = useState({});
  const [loading, setLoading] = useState(true);

  const pegarUser = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/person"
      )
      .then((response) => {
        setUserList(response.data.profile);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarUser();
  }, []);

  const darLike = () => {
    const body = {
      id: userList.id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/choose-person",
        body
      )
      .then((response) => {
        setLoading(true);
        pegarUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const darDislike = () => {
    const body = {
      id: userList.id,
      choice: false,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/choose-person",
        body
      )
      .then((response) => {
        setLoading(true);
        pegarUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const darReset = () => {
    if (window.confirm(`Tem certeza que você quer resetar?`)) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/clear "
        )
        .then((response) => {
          alert(response.data.message);
          setLoading(true);
          pegarUser();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (userList === null && loading === false) {
    return (
      <DivFundo>
        <MensagemDiv>
          <TextoMensagemDiv>Você não tem mais users para ver</TextoMensagemDiv>
          <ResetDiv>
            <BotaoReset onClick={darReset}>
              Reset todos os likes e matches
            </BotaoReset>
          </ResetDiv>
        </MensagemDiv>
      </DivFundo>
    );
  } else if (userList && loading === false) {
    return (
      <DivFundo>
        <UsersDiv>
          <UserImg src={userList.photo}></UserImg>
          <TextDiv>
            {" "}
            <TituloDiv>
              {userList.name}, {userList.age}
            </TituloDiv>
            <div>{userList.bio}</div>
          </TextDiv>
        </UsersDiv>
        <BotoesDiv>
          <BotaoNao onClick={darDislike}>
            {" "}
            <XImg src={X}></XImg>
          </BotaoNao>
          <BotaoSim onClick={darLike}>
            {" "}
            <HeartImg src={Heart}></HeartImg>
          </BotaoSim>
        </BotoesDiv>
        <ResetDiv>
          <BotaoReset onClick={darReset}>
            Reset todos os likes e matches
          </BotaoReset>
        </ResetDiv>
      </DivFundo>
    );
  } else {
    return (
      <DivFundo>
        <MensagemDiv>
          <RubberBand duration="1s" delay="0">
            <ImgLogo src={Logo}></ImgLogo>
          </RubberBand>
        </MensagemDiv>
      </DivFundo>
    );
  }
};
export default Users;
