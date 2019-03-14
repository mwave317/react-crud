import React, { Component } from "react";
import styled from "styled-components";
import SimpleStorage from "react-simple-storage";
import uuidv4 from "uuid/v4";

import logo from "./pga_logo.png";
import Leaderboard from "./components/LeaderboardTable";
import Button from "./components/styles/Button";
import AddPlayerForm from "./components/AddPlayer";

const players = [{ id: 1, firstName: "Joe", lastName: "Smith", score: 100 }];

if (localStorage.getItem("players") === null)
  localStorage.setItem("players", JSON.stringify(players));

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

class App extends Component {
  state = {
    players: [],
  };

  // savePlayers = (player) => {
  //   this.setState({
  //     players: [...this.state.players, player],
  //   });
  //   localStorage.setItem("players", JSON.stringify(players));
  // };

  removePlayer = id => {
    const players = [...this.state.players];
    const remainingPlayers = players.filter(player => player.id !== id);

    this.setState({
      players: remainingPlayers,
    });
    // this.savePlayers();
  };

  render() {
    return (
      <StyledApp>
        <SimpleStorage parent={this} />

        <Header>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <MainContainer>
          <h1>Leaderboard</h1>
          <Leaderboard players={players} removePlayer={this.removePlayer} />
          {/* <Button primary>Add Player Info</Button> */}
          <AddPlayerForm />
        </MainContainer>
      </StyledApp>
    );
  }
}

export default App;
