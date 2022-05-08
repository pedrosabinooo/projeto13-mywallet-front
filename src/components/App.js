import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import NewEntry from "./NewEntry";

function App() {
  const [userInfo, setUserInfo] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    token: "",
  });
  const [transactionInfo, setTransactionInfo] = useState({
    id: null,
    type: "",
    description: "",
    value: "",
  });
  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, transactionInfo, setTransactionInfo }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<NewEntry />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
