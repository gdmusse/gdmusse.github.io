import React from "react";
import styled from "styled-components";
import axios from "axios";

const FullPageHome = styled.div`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FullPage = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DivActivitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 300px);

  margin-bottom: 30px;
  gap: 30px;
`;
const ContainerActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dotted black;
  padding: 10px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom right, #33ccff, #ff99cc);
  transition: 150ms;
  color: transparent;
  &:hover {
    color: white;
  }
`;

const TextTitles = styled.p`
  font-weight: bold;
  text-shadow: 1px 1px 10px black;
  margin: 0;
`;
const TextInfo = styled.p`
  text-shadow: 1px 1px 10px black;
  flex-wrap: wrap;
  margin: 10px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivButtons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #f54cd6;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 100px;
  padding: 1px;
  margin-right: 20px;
  transition: 150ms;
  &:hover {
    background-color: #a83293;
    cursor: pointer;
  }
`;

const TitleSite = styled.h1`
  font-weight: bold;
  color: #33ccff;
  text-shadow: 1px 1px 1px black;
`;

export default class GetActivity extends React.Component {
  state = {
    activity: [],
  };

  getActivity = () => {
    this.setState({ activity: [] });
    for (let i = 0; i < 6; i++) {
      axios
        .get("https://www.boredapi.com/api/activity/")
        .then((res) => {
          const listActivities = [...this.state.activity];
          listActivities.push(res.data);
          this.setState({ activity: listActivities });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  goBack = () => {
    this.setState({ activity: [] });
  };
  render() {
    const activiesList = this.state.activity.map((activity) => (
      <ContainerActivity key={activity.key}>
        <TextDiv>
          <TextTitles>Activity: </TextTitles>{" "}
          <TextInfo> {activity.activity} </TextInfo>
        </TextDiv>
        <TextDiv>
          <TextTitles>Participants: </TextTitles>{" "}
          <TextInfo> {activity.participants} </TextInfo>
        </TextDiv>
        <TextDiv>
          <TextTitles>Accessibility: </TextTitles>{" "}
          <TextInfo> {activity.accessibility} </TextInfo>
        </TextDiv>
        <TextDiv>
          <TextTitles>Type: </TextTitles> <TextInfo> {activity.type} </TextInfo>
        </TextDiv>
      </ContainerActivity>
    ));
    console.log("activy:", this.state.activity);
    if (this.state.activity.length === 0) {
      return (
        <FullPageHome>
          <TitleSite> Are you Bored? </TitleSite>
          <Button onClick={this.getActivity}>Click Here!</Button>
        </FullPageHome>
      );
    } else if (this.state.activity.length !== 0) {
      return (
        <FullPage>
          <DivActivitiesList>{activiesList}</DivActivitiesList>

          <DivButtons>
            <Button onClick={this.goBack}>Go Back</Button>
            <Button onClick={this.getActivity}>Try Again</Button>
          </DivButtons>
        </FullPage>
      );
    }
  }
}
