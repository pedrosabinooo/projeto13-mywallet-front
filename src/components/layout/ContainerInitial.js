import styled from "styled-components";

const ContainerInitial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  * {
    width: 303px;
  }

  .new-entry {
    align-items: top;
  }

  img {
    width: 180px;
    margin-bottom: 40px;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;

  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 13px;
  }

  form input {
    font-family: "Raleway", sans-serif;
    background: #ffffff;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    height: 58px;
    font-size: 20px;
    padding-left: 15px;
  }

  form input::placeholder {
    color: #000000;
  }

  form button {
    font-family: "Raleway", sans-serif;
    background: #a328d6;
    border-radius: 5px;
    border: none;
    height: 46px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
  }

  form span {
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    margin-top: 19px;
  }
`;

export default ContainerInitial;
