import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import Income from "./../assets/img/add.svg";
import Outcome from "./../assets/img/subtract.svg";
import SignOut from "./../assets/img/signout.svg";

import Container from "./layout/Container";
import { useEffect } from "react";

function Home() {
  const { userInfo, setUserInfo, transactionInfo, setTransactionInfo } =
    useContext(UserContext);
  const navigate = useNavigate();

  function getTransactions(event) {
    event.preventDefault();
    const URL = `http://localhost:5000/`;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then(() => {
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response.statusText);
      alert("Can't save the new entry. Please try again later.");
    });
  }

  setInterval(getTransactions,10000);

  return (
    <Container>
      <header>
        <span className="logo">Hello, {userInfo.name}</span>
        <img
          src={SignOut}
          alt="Sign out"
          onClick={() => {
            navigate("/login");
            setUserInfo({
              id: null,
              name: "",
              email: "",
              password: "",
              token: "",
            });
          }}
        />
      </header>
      <main>
        <TransactionsDiv>
          Soon you'll be able to check all your old habits!
        </TransactionsDiv>
        <div className="buttons">
          <button
            onClick={() => {
              setTransactionInfo({ ...transactionInfo, type: "income" });
              navigate("/new-entry");
            }}
          >
            <img src={Income} alt="Income" />
            <span>
              New
              <br />
              income
            </span>
          </button>
          <button
            onClick={() => {
              setTransactionInfo({ ...transactionInfo, type: "outcome" });
              navigate("/new-entry");
            }}
          >
            <img src={Outcome} alt="Outcome" />
            <span>
              New
              <br />
              outcome
            </span>
          </button>
        </div>
      </main>
    </Container>
  );
}

const TransactionsDiv = styled.div`
  background-color: #ffffff;
  height: 50vh;
  border-radius: 5px;
  color: #868686;
  text-align: center;
  align-items: center;
`;

export default Home;
