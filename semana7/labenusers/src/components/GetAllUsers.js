import React from "react";
import styled from "styled-components";
import axios from "axios";

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
`;

const UsersListLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 200px;
  border-bottom: 1px solid grey;
  padding-top: 15px;
  color: white;
  text-shadow: 1px 1px 5px black;
`;
const UsersListUl = styled.ul`
  margin: 0;
  padding: 0;
`;
const DeleteButton = styled.button`
  background-color: #7969fa;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 20px;
  padding: 1px;
  margin-bottom: 2px;
  transition: 150ms;
  &:hover {
    background-color: #4934eb;
    cursor: pointer;
  }
`;
const DetailsButton = styled.button`
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
export default class GetAllUsers extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "gabriel-musse-cruz",
          },
        }
      )
      .then((res) => {
        this.setState({ users: res.data });
        console.log("Get Users Sucess", res);
      })
      .catch((err) => {
        console.log("Get Users Failed", err.message);
      });
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
        .then((res) => {
          alert("User deleted successful");
          this.getAllUsers();
        })
        .catch((err) => {
          alert("User deleted failed");
          console.log(err);
        });
    }
  };

  render() {
    const usersList = this.state.users.map((user) => (
      <UsersListLi key={user.id}>
        {user.name}
        <div>
          <DetailsButton onClick={() => this.props.getdetails(user)}>
            Details
          </DetailsButton>
          <DeleteButton onClick={() => this.deleteUser(user)}>X</DeleteButton>
        </div>
      </UsersListLi>
    ));
    return (
      <DivGetAllUsersPage>
        <DivButton>
          <ChangeButton onClick={this.props.goback}>Back</ChangeButton>
        </DivButton>
        <DivList>
          {this.state.users.length > 0 ? (
            <UsersListUl>{usersList}</UsersListUl>
          ) : (
            <UsersListLi>Loading...</UsersListLi>
          )}
        </DivList>
      </DivGetAllUsersPage>
    );
  }
}
