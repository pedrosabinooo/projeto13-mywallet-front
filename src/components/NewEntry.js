import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import Container from "./layout/ContainerInitial";

function NewEntry() {
  const navigate = useNavigate();

  const { userInfo, setUserInfo, transactionInfo, setTransactionInfo } = useContext(UserContext);

  function login(event) {
    event.preventDefault();
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const promise = axios.post(URL, {
        value: transactionInfo.value,
        description: transactionInfo.description,
        type: transactionInfo.type,
    });
    promise.then(({ data }) => {
      setUserInfo({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        token: data.token,
      });
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response.statusText)
      alert("Can't sign in to your account. Check your email and password.")
    });
  }

  return (
    <Container className="new-entry">
      <span>New entry</span>
      <form onSubmit={login}>
        <input
          type="number"
          id="value"
          placeholder="value"
          onChange={(e) =>
            setTransactionInfo({ ...transactionInfo, value: e.target.value })
          }
          required
        />
        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={(e) =>
            setTransactionInfo({ ...transactionInfo, description: e.target.value })
          }
          required
        />
        <button type="submit">Save</button>
      </form>
    </Container>
  );
}

export default NewEntry;
