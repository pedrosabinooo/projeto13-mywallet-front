import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./../assets/img/logo.svg";
import Container from "./layout/ContainerInitial";

function SignUp() {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    token: "",
  });
  const navigate = useNavigate();

  function Signup(event) {
    if (loginInfo.password===loginInfo.passwordConfirmation) {
      event.preventDefault();
      const URL = `http://localhost:5000/signup`;
      const promise = axios.post(URL, {
        name: loginInfo.name,
        email: loginInfo.email,
        password: loginInfo.password,
      });
      promise.then(() => {
        getTransactions();
        navigate("/login")
      });
      promise.catch((err) => {
        console.log(err.response.statusText);
        alert("Can't sign up");
      });
      console.log(URL);
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <Container>
      <img src={Logo} alt="MyWallet logo" />
      <form onSubmit={Signup}>
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          required
        />
        <input
          type="password"
          id="passwordConfirmation"
          placeholder="confirm password"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, passwordConfirmation: e.target.value })
          }
          required
        />
        <button type="submit">Sign up</button>
        <span onClick={() => navigate("/login")}>
          Already have an account? Log in!
        </span>
      </form>
    </Container>
  );
}

export default SignUp;
