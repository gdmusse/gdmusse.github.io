import React, { useContext } from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { goToFeed } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import Loader from "../../components/Loader"

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const {
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,
    setRightButtonText,
    loading,
    setLoading
  } = useContext(GlobalStateContext);

  const history = useHistory();
  setLoading(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history);
    setLoading(true)
  };

  const login = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        clear();
        goToFeed(history);
        setRightButtonText("Logout");
       
      })
      .catch((err) => {
        setLoading(false);
        setAlertMsg(err.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };

  return (
    <LoginFormContainer>
    
    {loading ? (
        <Loader />
      ) : (  <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Password"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Login
        </Button>
      </form>)}
    </LoginFormContainer>
  );
};

export default LoginForm;
