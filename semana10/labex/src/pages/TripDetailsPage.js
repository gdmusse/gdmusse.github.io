import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToPreviousPage } from "../routes/coordinator";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import PageTitle from "../components/PageTitle";
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
  @media (max-width: 1000px) {
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
  text-align: center;
  min-height: 75vh;
`;

const CandidatesDiv = styled.div`
  border: 2px solid #c443aa;
  border-radius: 20px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 95%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ApprovedDiv = styled.div`
  border: 2px solid #c443aa;
  border-radius: 20px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 95%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

const AproveButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  border: 3px solid green;
  border-radius: 7px;
  background-color: white;
  color: green;
  &:hover {
    background-color: green;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const ReproveButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-left: 10px;
  text-transform: uppercase;
  border: 3px solid red;
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

const BackButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
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

const TripDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const [trip, setTrip] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getTripDetail(params.id);
  }, [params.id]);

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setTrip(res.data.trip);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aproveCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: true };
    axios
      .put(
        `${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert(`${candidateId} approved`);
        getTripDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reproveCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: false };
    axios
      .put(
        `${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert(`${candidateId} reproved`);
        getTripDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (trip && loading === false) {
    return (
      <FullPage>
        <BodyDiv>
          <PageTitle titulo={trip.name} />

          <p>{trip.description}</p>
          <p>Initial date: {trip.date}</p>
          <CandidatesDiv>
            <h2>Candidates</h2>
            {trip.candidates &&
              trip.candidates.map((candidate) => {
                return (
                  <div key={candidate.id}>
                    <p>{candidate.name}</p>
                    <p>{candidate.age}</p>
                    <p>{candidate.country}</p>
                    <p> {candidate.profession}</p>
                    <p>{candidate.applicationText}</p>
                    <AproveButton onClick={() => aproveCandidate(candidate.id)}>
                      Aprove
                    </AproveButton>
                    <ReproveButton
                      onClick={() => reproveCandidate(candidate.id)}
                    >
                      Reprove
                    </ReproveButton>
                  </div>
                );
              })}
          </CandidatesDiv>
          <ApprovedDiv>
            <h2>Approved Candidates</h2>
            {trip.approved &&
              trip.approved.map((candidate) => {
                return (
                  <div key={candidate.id}>
                    <p>
                      {candidate.name}, {candidate.age}, {candidate.country}
                    </p>
                  </div>
                );
              })}
          </ApprovedDiv>
          <BackButton onClick={() => goToPreviousPage(history)}>
            Back
          </BackButton>
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
export default TripDetailsPage;
