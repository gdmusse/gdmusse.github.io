import React from "react";
import AddUsers from "./components/AddUsers";
import GetAllUsers from "./components/GetAllUsers";
import GetUserById from "./components/GetUserById";
import axios from "axios";

export default class App extends React.Component {
  state = {
    actualPage: "AddUsers",
  };

  goToCreatePage = () => {
    this.setState({ actualPage: "AddUsers" });
  };

  goToListPage = () => {
    this.setState({ actualPage: "GetAllUsers" });
  };

  getUserById = (user) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
        {
          headers: {
            Authorization: "gabriel-musse-cruz",
          },
        }
      )
      .then((res) => {
        this.setState({ users: res.data });
        console.log("Get User Successful", res);
        this.setState({ actualPage: "DetailsPage" });
      })
      .catch((err) => {
        console.log("Get User Failed", err);
      });
  };

  render() {
    const renderWindow = () => {
      if (this.state.actualPage === "AddUsers") {
        return <AddUsers changepage={this.goToListPage} />;
      } else if (this.state.actualPage === "GetAllUsers") {
        return (
          <GetAllUsers
            goback={this.goToCreatePage}
            getdetails={this.getUserById}
          />
        );
      } else if (this.state.actualPage === "DetailsPage") {
        return (
          <GetUserById goback={this.goToListPage} user={this.state.users} />
        );
      }
    };
    return <div className="App">{renderWindow()}</div>;
  }
}
