import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  line-height: 1.5;
  font-weight: 600;
  margin: 2rem auto;
  label {
    display: block;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #0366ee;
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #032448 0%,
        #dedede 50%,
        #032448 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

Form.displayName = "Form";

export default Form;
