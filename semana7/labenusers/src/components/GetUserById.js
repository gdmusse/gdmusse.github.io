import React from "react";
import styled from "styled-components";
import axios from "axios";
import testUtils from "react-dom/test-utils";

const DivGetAllUsersPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const DivButton = styled.div`
  padding: 25px;
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

const DivList = styled.div`
  border: 1px dashed black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-image: linear-gradient(to bottom right, #33ccff, #ff99cc);
  border-bottom: 1px solid grey;
  padding-top: 15px;
  color: white;
  text-shadow: 1px 1px 5px black;
`;

const DeleteButton = styled.button`
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 120px;
  padding: 1px;
  margin-bottom: 2px;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;
const ContainerInfo = styled.div`
  width: 100%;
  padding: 10px;
`;

const TextInfo = styled.div`
  color: black;
  text-shadow: 1px 1px 5px white;
`;

const EditButton = styled.button`
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 60px;
  padding: 1px;
  margin-bottom: 2px;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;
const ConfirmEditButton = styled.button`
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 160px;
  padding: 1px;
  margin-bottom: 2px;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;

export default class GetUserById extends React.Component {
  state = {
    inputNameValue: "",
    inputEmailValue: "",
    editingUser: "false",
  };

  deleteUser = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
          {
            headers: {
              Authorization: "gabriel-musse-cruz",
            },
          }
        )
        .then(() => {
          alert("User deleted successful");
          this.props.goback();
        })
        .catch((err) => {
          alert("User deleted failed");
          console.log(err);
        });
    }
  };

  handleEditChange = () => {
    this.setState({ editingUser: "true" });
  };

  editUser = (user) => {
    const body = {
      name: this.state.inputNameValue,
      email: this.state.inputEmailValue,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
        body,
        {
          headers: {
            Authorization: "gabriel-musse-cruz",
          },
        }
      )
      .then((res) => {
        console.log("Edit User successful", res.data);
        alert("Edit User successful");
        this.setState({ inputNameValue: "" });
        this.setState({ inputEmailValue: "" });
        this.setState({ editingUser: "false" });
        this.props.goback();
      })
      .catch((err) => {
        console.log("Edit User Failed", err);
        alert("Verify your input fields");
      });
  };

  handleInputNameChange = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };
  handleInputEmailChange = (e) => {
    this.setState({ inputEmailValue: e.target.value });
  };

  render() {
    const user = this.props.user;
    console.log(user);
    if (this.state.editingUser == "true") {
      return (
        <DivGetAllUsersPage>
          <DivButton>
            <ChangeButton onClick={this.props.goback}>Back</ChangeButton>
          </DivButton>
          <DivList>
            <ContainerInfo>
              Chosen User Id: <TextInfo>{user.id}</TextInfo>
            </ContainerInfo>
            <ContainerInfo>
              Name: <TextInfo>{user.name}</TextInfo>
            </ContainerInfo>
            <input
              placeholder={"New Name"}
              value={this.state.inputNameValue}
              onChange={this.handleInputNameChange}
            />
            <ContainerInfo>
              Email: <TextInfo>{user.email}</TextInfo>
            </ContainerInfo>
            <input
              placeholder={"New Email"}
              value={this.state.inputEmailValue}
              onChange={this.handleInputEmailChange}
            />
            <ConfirmEditButton onClick={() => this.editUser(user)}>
              CONFIRM EDIT
            </ConfirmEditButton>
          </DivList>
        </DivGetAllUsersPage>
      );
    } else {
      return (
        <DivGetAllUsersPage>
          <DivButton>
            <ChangeButton onClick={this.props.goback}>Back</ChangeButton>
          </DivButton>
          <DivList>
            <ContainerInfo>
              Chosen User Id: <TextInfo>{user.id}</TextInfo>
            </ContainerInfo>
            <ContainerInfo>
              Name: <TextInfo>{user.name}</TextInfo>
            </ContainerInfo>
            <ContainerInfo>
              Email: <TextInfo>{user.email}</TextInfo>
            </ContainerInfo>
            <DeleteButton onClick={() => this.deleteUser(user)}>
              DELETE
            </DeleteButton>
            <EditButton onClick={this.handleEditChange}>EDIT</EditButton>
          </DivList>
        </DivGetAllUsersPage>
      );
    }
  }
}
