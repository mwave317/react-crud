import React, { Component } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";

export default class AddPlayer extends Component {
  state = {
    firstName: "",
    lastName: "",
    score: "",
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form
        method="post"
        onSubmit={async e => {
          e.preventDefault();
          // await signup();
          this.setState({ firstName: "", lastName: "", score: "" });
        }}
      >
        <fieldset>
          <h2>Add Player Info</h2>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="Chris"
              value={this.state.firstName}
              onChange={this.saveToState}
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Baucom"
              value={this.state.lastName}
              onChange={this.saveToState}
              required
            />
          </label>
          <label htmlFor="score">
            Score
            <input
              type="number"
              name="score"
              placeholder="100"
              min="0"
              max="100"
              value={this.state.score}
              onChange={this.saveToState}
              required
            />
          </label>

          <Button primary type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>
    );
  }
}
