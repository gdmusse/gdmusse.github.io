import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";
import Loading from "../components/Loading";

const LoadingBodyDiv = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  min-height: 75vh;
`;

const FullPage = styled.div`
  margin: 0 auto;
  width: 60%;
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 95%;
  }
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
`;

const TripContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #4e0259;
  background-image: linear-gradient(to bottom right, white, #4e0259);
  border-radius: 15px;
  height: 50px;
  width: 500px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 5px;
  }
  padding: 20px;
  margin-top: 10px;
  text-shadow: 1px 1px 10px white;
`;

const TripName = styled.h1`
  font-size: 20px;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  @media (max-width: 700px) {
    justify-content: flex-end;
  }
`;
const LastButtonsDiv = styled.div`
  display: flex;
`;

const Button = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: 700px) {
    width: 50%;
    font-size: 10px;
    padding: 0;
  }
  text-transform: uppercase;
  border: 3px solid #4e0259;
  border-radius: 7px;
  background-color: white;
  color: #4e0259;
  &:hover {
    background-color: #4e0259;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const CreateButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  border: 3px solid #4e0259;
  border-radius: 7px;
  background-color: white;
  color: #4e0259;
  &:hover {
    background-color: #4e0259;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const DeleteButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  @media (max-width: 700px) {
    margin: 0;
    font-size: 10px;
    padding: 2px;
  }
  text-transform: uppercase;
  border: 3px solid #4e0259;
  border-radius: 7px;
  background-color: white;
  color: red;
  &:hover {
    background-color: red;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const LogoutButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  text-transform: uppercase;
  border: 3px solid #c443aa;
  border-radius: 7px;
  background-color: white;
  color: #c443aa;
  &:hover {
    background-color: #c443aa;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [tripList, setTripList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTripsList = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        setTripList(response.data.trips);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTrip = (trip) => {
    const token = window.localStorage.getItem("token");
    if (window.confirm(`Are you sure you want to delete ${trip.name}?`)) {
      axios
        .delete(`${BASE_URL}/trips/${trip.id}`, {
          headers: {
            auth: token,
          },
        })
        .then((response) => {
          alert(`${trip.name} deleted`);
          getTripsList();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getTripsList();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  if (tripList.length !== 0 && loading === false) {
    return (
      <FullPage>
        <PageTitle titulo="Admin Panel" />
        <BodyDiv>
          {tripList.map((trip) => {
            return (
              <TripContainer key={trip.name}>
                <TripName>{trip.name}</TripName>
                <ButtonDiv>
                  <Button
                    onClick={() => goToTripDetailsPage(history, trip.id)}
                    key={trip.name}
                  >
                    Check Details
                  </Button>
                  <DeleteButton onClick={() => deleteTrip(trip)}>
                    Delete
                  </DeleteButton>
                </ButtonDiv>
              </TripContainer>
            );
          })}
          <LastButtonsDiv>
            <CreateButton onClick={() => goToCreateTripPage(history)}>
              Create Trip
            </CreateButton>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </LastButtonsDiv>
        </BodyDiv>
      </FullPage>
    );
  } else if (loading === true) {
    return (
      <FullPage>
        <LoadingBodyDiv>
          <Loading />
        </LoadingBodyDiv>
      </FullPage>
    );
  }
};

export default AdminHomePage;
