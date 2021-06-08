import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import useForm from "../hooks/useForm";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToPreviousPage } from "../routes/coordinator";
import { countries } from "../constants/countries";
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
    width: 90%;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const FormInput = styled.input`
  width: 50%;
`;

const FormSelect = styled.select`
  width: 50%;
`;

const SendButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 40px;
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

const BackButton = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
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

const ApplicationFormPage = () => {
  const history = useHistory();
  const [tripList, setTripList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { form, onChange, clear } = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applicateToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${BASE_URL}/trips/${form.tripId}/apply`, body)
      .then((response) => {
        alert(`Applied sucessfuly`);
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  useEffect(() => {
    getTripsList();
  }, []);

  if (loading === false) {
    return (
      <FullPage>
        <BodyDiv>
          <PageTitle titulo="Application Form" />

          <FormContainer onSubmit={applicateToTrip}>
            <Form>
              <p>Select Trip</p>
              <FormSelect
                value={form.tripId}
                required
                name={"tripId"}
                onChange={onChange}
              >
                <option value={""}>Select a trip</option>
                {tripList.map((trip) => {
                  return (
                    <option value={trip.id} key={trip.id}>
                      {trip.name} - {trip.planet}
                    </option>
                  );
                })}
              </FormSelect>
              <p>Name</p>
              <FormInput
                value={form.name}
                required
                name={"name"}
                placeholder="Name"
                onChange={onChange}
                pattern={"^.{3,}$"}
                title={"Minimum 3 characters"}
              />
              <p>Age</p>
              <FormInput
                value={form.age}
                type="number"
                required
                name={"age"}
                min="18"
                placeholder="Age"
                onChange={onChange}
              />
              <p>Profession</p>
              <FormInput
                value={form.profession}
                required
                name={"profession"}
                placeholder="Profession"
                onChange={onChange}
                pattern={"^.{10,}$"}
                title={"Minimum 10 characters"}
              />
              <p>Country</p>
              <FormSelect
                value={form.country}
                required
                name={"country"}
                onChange={onChange}
              >
                <option value={""}>Select a country</option>
                {countries.map((country) => {
                  return (
                    <option value={country} key={country}>
                      {country}
                    </option>
                  );
                })}
              </FormSelect>
              <p>Application Text</p>
              <FormInput
                value={form.applicationText}
                required
                name={"applicationText"}
                placeholder="Application Text"
                onChange={onChange}
                pattern={"^.{30,}$"}
                title={"Minimum 30 characters"}
              />
              <SendButton type="submit">Send Form</SendButton>
            </Form>
          </FormContainer>
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
export default ApplicationFormPage;
