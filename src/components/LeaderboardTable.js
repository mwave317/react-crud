import React from "react";
import styled from "styled-components";

import Button from "../styles/Button";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;

  thead th {
    border-bottom: 2px solid #dedede;
  }

  tr {
    border-bottom: 1px solid #dedede;
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`;

const ButtonContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 0.5rem;
  }
`;

const LeaderboardTable = props => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.players.length > 0 ? (
        props.players.map(player => (
          <tr key={player.id}>
            <td>
              {player.lastName}, {player.firstName}
            </td>
            <td>{player.score}</td>
            <ButtonContainer>
              <Button primary>Edit</Button>
              <Button danger>Delete</Button>
            </ButtonContainer>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Please add player information</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default LeaderboardTable;
