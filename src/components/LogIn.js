import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import Logo from "./../assets/img/logo.svg";
import Container from "./layout/ContainerInitial";

function LogIn() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = useContext(UserContext);

  function login(event) {
    event.preventDefault();
    const URL = `http://localhost:5000/login`;
    const promise = axios.post(URL, {
      email: loginInfo.email,
      password: loginInfo.password,
    });
    promise.then(({ data }) => {
      setUserInfo({ ...loginInfo, token: data.token, name: data.name });
      console.log(loginInfo, userInfo);
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response.statusText);
      alert("Can't sign in to your account. Check your email and password.");
    });
  }

  return (
    <Container>
      <img src={Logo} alt="MyWallet logo" />
      <form onSubmit={login}>
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
        <button type="submit">Log in</button>
        <span onClick={() => navigate("/signup")}>
          Don't have an account? Sign up!
        </span>
      </form>
    </Container>
  );
}

export default LogIn;
