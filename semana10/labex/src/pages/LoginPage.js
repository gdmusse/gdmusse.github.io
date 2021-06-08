import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import React from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import useForm from "../hooks/useForm";

const FullPage = styled.div`
  margin: 0 auto;
  width: 60%;
  @media (max-width: 700px) {
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

const ObsDiv = styled.div`
  color: grey;
  font-style: italic;
`;

const Button = styled.button`
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

const LoginPage = () => {
  const history = useHistory();

  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    const body = {
      email: form.email,
      password: form.password,
    };
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage(history);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <FullPage>
      <BodyDiv>
        <PageTitle titulo="Login" />
        <ObsDiv>email: gabrielmusse@gmail.com.br</ObsDiv>
        <ObsDiv>password: 123456</ObsDiv>

        <FormContainer onSubmit={login}>
          <Form>
            <p>E-mail</p>
            <FormInput
              value={form.email}
              required
              name="email"
              placeholder="E-mail"
              onChange={onChange}
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
              title={"Invalid e-mail"}
            />
            <p>Password</p>
            <FormInput
              value={form.password}
              required
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Button onClick={login}>Login</Button>
          </Form>
        </FormContainer>
      </BodyDiv>
    </FullPage>
  );
};
export default LoginPage;
