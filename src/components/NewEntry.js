import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import Container from "./layout/Container";

function NewEntry() {
  const navigate = useNavigate();

  const { userInfo, transactionInfo, setTransactionInfo } =
    useContext(UserContext);

  function postNewEntry(event) {
    event.preventDefault();
    const URL = `http://localhost:5000/new-entry`;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const promise = axios.post(
      URL,
      {
        value: transactionInfo.value,
        description: transactionInfo.description,
        type: transactionInfo.type,
      },
      config
    );
    promise.then(() => {
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response.statusText);
      alert("Can't save the new entry. Please try again later.");
    });
  }

  return (
    <Container>
      <header>
        <span>New entry</span>
      </header>
      <form onSubmit={postNewEntry}>
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
            setTransactionInfo({
              ...transactionInfo,
              description: e.target.value,
            })
          }
          required
        />
        <button type="submit">Save</button>
      </form>
    </Container>
  );
}

export default NewEntry;
