import styled from "styled-components";
import { useContext } from "react";

import UserContext from "./../../contexts/UserContext";

import SignOut from "./../../assets/img/signout.svg";

function Header() {
  const { userInfo } = useContext(UserContext);
  return (
    <Container>
      <div className="header">
        <span className="logo">`Hello, ${userInfo.name}`</span>
        <img src={SignOut} alt="Sign out" className="profile-pic" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }

  .span {
    width: 97px;
    height: 49px;
    font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
  }

  .profile-pic {
    width: 23px;
    height: 24px;
  }
`;

export default Header;
