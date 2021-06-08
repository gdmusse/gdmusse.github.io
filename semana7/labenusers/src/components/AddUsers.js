import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivAddPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const DivButton = styled.div`
  padding: 25px;
`;

const DivFields = styled.div`
  border: 1px dashed black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-image: linear-gradient(to bottom right, #33ccff, #ff99cc);
`;

const ChangeButton = styled.button`
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;

const CreateButton = styled.button`
  margin-top: 20px;
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 40%;
  padding: 5px;
  align-self: center;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;
const InputTitle = styled.p`
  color: white;
  text-shadow: 1px 1px 5px black;
  font-weight: bold;
`;
export default class AddUsers extends React.Component {
  state = {
    inputNameValue: "",
    inputEmailValue: "",
  };

  handleInputNameChange = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };
  handleInputEmailChange = (e) => {
    this.setState({ inputEmailValue: e.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputNameValue,
      email: this.state.inputEmailValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "gabriel-musse-cruz",
          },
        }
      )
      .then((res) => {
        console.log("Add User successful", res.data);
        alert("Add User successful");
        this.setState({ inputNameValue: "" });
        this.setState({ inputEmailValue: "" });
      })
      .catch((err) => {
        console.log("Add User Failed", err);
        alert("Verify your input fields");
      });
  };

  render() {
    return (
      <DivAddPage>
        <DivButton>
          <ChangeButton onClick={this.props.changepage}>See List</ChangeButton>
        </DivButton>
        <DivFields>
          <InputTitle>Name:</InputTitle>
          <input
            placeholder={"Your Name"}
            value={this.state.inputNameValue}
            onChange={this.handleInputNameChange}
          />
          <InputTitle>Email:</InputTitle>
          <input
            placeholder={"Your Email"}
            value={this.state.inputEmailValue}
            onChange={this.handleInputEmailChange}
          />
          <CreateButton onClick={this.createUser}>Create User</CreateButton>
        </DivFields>
      </DivAddPage>
    );
  }
}
