import React from "react";
import styled from "styled-components";
import SpaceTravel from "../img/spacetravel.png";
import SpaceTravelOpacity from "../img/spacetravelopacity.png";
import AdminArea from "../img/commandcenter.png";
import AdminAreaOpacity from "../img/commandcenteropacity.png";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";

const FullPage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const BodyDiv = styled.div`
  display: flex;
  height: 75vh;
  overflow: hidden;
`;
const LeftBody = styled.div`
  width: 50vw;
  background-image: url(${SpaceTravel});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:hover {
    cursor: pointer;
    background-image: url(${SpaceTravelOpacity});
  }
`;
const RightBody = styled.div`
  width: 50vw;
  overflow: hidden;
  background-image: url(${AdminArea});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:hover {
    cursor: pointer;
    background-image: url(${AdminAreaOpacity});
  }
`;

const LeftBodyText = styled.div`
  display: none;
  height: 100%;
  color: white;
  font-size: 40px;
  text-shadow: 1px 1px 4px #000000;
  ${LeftBody}:hover & {
    display: flex;
    align-items: center;
    justify-content: center;
  } ;
`;

const RightBodyText = styled.div`
  display: none;
  height: 100%;
  color: white;
  font-size: 40px;
  text-shadow: 1px 1px 4px #000000;
  ${RightBody}:hover & {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
      margin: 0;
      text-align: center;
    }
  } ;
`;

const Homepage = () => {
  const history = useHistory();

  const goToCorrectPage = (history) => {
    if (localStorage.getItem("token") !== null) {
      history.replace("/admin/trips/list");
    } else {
      history.push("/login");
    }
  };

  return (
    <FullPage>
      <BodyDiv>
        <LeftBody>
          <LeftBodyText onClick={() => goToListTripsPage(history)}>
            See Trips
          </LeftBodyText>
        </LeftBody>

        <RightBody>
          <RightBodyText onClick={() => goToCorrectPage(history)}>
            Admin Area
          </RightBodyText>
        </RightBody>
      </BodyDiv>
    </FullPage>
  );
};
export default Homepage;
