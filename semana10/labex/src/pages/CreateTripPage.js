import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToPreviousPage } from "../routes/coordinator";
import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants/urls";
import useForm from "../hooks/useForm";
import PageTitle from "../components/PageTitle";

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

const CreateTripPage = () => {
  useProtectedPage();

  const history = useHistory();
  const { form, onChange, clear } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: Number(form.durationInDays),
    };
    axios
      .post(`${BASE_URL}/trips`, body, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        alert("Trip created sucessfully");
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  return (
    <FullPage>
      <BodyDiv>
        <PageTitle titulo="Create new trip" />
        <FormContainer onSubmit={createTrip}>
          <Form>
            <p>Trip Name</p>
            <FormInput
              value={form.name}
              required
              name={"name"}
              placeholder="Trip Name"
              onChange={onChange}
              pattern={"^.{5,}$"}
              title={"Minimum 5 characters"}
            />
            <p>Destination Planet</p>
            <FormSelect
              required
              value={form.planet}
              name={"planet"}
              onChange={onChange}
            >
              <option value={""}>Select a planet</option>
              <option value={"Mars"}>Mars</option>
              <option value={"Jupiter"}>Jupiter</option>
              <option value={"Mercury"}>Mercury</option>
              <option value={"Venus"}>Venus</option>
              <option value={"Saturn"}>Saturn</option>
              <option value={"Uranus"}>Uranus</option>
              <option value={"Neptune"}>Neptune</option>
            </FormSelect>
            <p>Initial Date</p>
            <FormInput
              value={form.date}
              required
              name={"date"}
              type="date"
              min={stringToday}
              onChange={onChange}
            />
            <p>Trip Description</p>
            <FormInput
              value={form.description}
              required
              name={"description"}
              placeholder="Trip Description"
              pattern={"^.{30,}$"}
              onChange={onChange}
              title={"Minimum 30 characters"}
            />
            <p>Trip Duration</p>
            <FormInput
              value={form.durationInDays}
              type="number"
              required
              name={"durationInDays"}
              min="50"
              placeholder="Trip Duration"
              onChange={onChange}
            />
            <SendButton type="submit">Send Form</SendButton>
          </Form>
        </FormContainer>
        <BackButton onClick={() => goToPreviousPage(history)}>Back</BackButton>
      </BodyDiv>
    </FullPage>
  );
};
export default CreateTripPage;
