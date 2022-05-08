import styled from "styled-components";

import Income from "./../assets/img/add.svg";
import Outcome from "./../assets/img/subtract.svg";

import Container from "./layout/Container";
import Header from "./layout/Header";

function Home() {
    return (
        <Container>
          <Header />
          <main>
            <TransactionsDiv>
              <span>Soon you'll be able to check all your old habits!</span>
            </TransactionsDiv>
            <ButtonsDiv>
              <div>
                <img src={Income} alt="Income" />
                <span>New income</span>
              </div>
              <div>
                <img src={Outcome} alt="Outcome" />
                <span>New outcome</span>
              </div>
            </ButtonsDiv>
          </main>
        </Container>
      );
}

const TransactionsDiv = styled.div`
  margin-top: 17px;
`;

const ButtonsDiv = styled.div`
  margin-top: 17px;
  display: flex;
  
`;

export default Home;
