import React, { Component } from "react";
import styled from "styled-components";

import logo from "./pga_logo.png";
import Leaderboard from "./components/LeaderboardTable";
import Button from "./styles/Button";

const StyledApp = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.header`
  background-color: #032448;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  .App-logo {
    height: 70px;
  }
`;

const MainContainer = styled.section`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  width: 90%;
  h1 {
    margin-top: 0.5rem;
  }
`;

const players = [
  { id: 1, firstName: "Chris", lastName: "Baucom", score: 100 },
  { id: 1, firstName: "Chris", lastName: "Baucom", score: 100 },
  { id: 1, firstName: "Chris", lastName: "Baucom", score: 100 },
];

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <MainContainer>
          <h1>Leaderboard</h1>
          <Leaderboard players={players} />
          <Button primary>Add Player Info</Button>
        </MainContainer>
      </StyledApp>
    );
  }
}

export default App;
