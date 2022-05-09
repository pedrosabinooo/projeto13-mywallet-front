import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 25px 0 22px 0;
  }

  span {
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background: #a328d6;
    border-radius: 5px;
    border: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    row-gap: 13px;
    margin-top: 25px;
  }

  form input {
    font-family: "Raleway", sans-serif;
    background: #ffffff;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    height: 58px;
    width: 100%;
    font-size: 20px;
    padding-left: 15px;
  }

  form input::placeholder {
    color: #000000;
  }

  form > button {
    font-family: "Raleway", sans-serif;
    background: #a328d6;
    border-radius: 5px;
    border: none;
    height: 46px;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    align-items: center;
    color: #ffffff;
  }

  form span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    height: 114px;
    gap: 15px;
  }

  .buttons img {
    height: 22px;
  }

  .buttons span {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export default Container;
