import styled from "styled-components";
import React from "react";

export const Select = styled.select`
  height: 42px;
  width: 105px;
  text-align: center;
  border: none;
  background: ${(props) => props.theme.colors["primary-light"]};
  font-size: 15px;
  color: ${(props) => props.theme.colors.dark};
`;

export const CheckBox = (props) => (
  <CheckBoxContainer>
    <input
      onChange={props.onChange}
      defaultChecked={props.defaultChecked}
      type="checkbox"
      className={props.defaultChecked ? "checked" : null}
    />
    <span className="checkmark"></span>
  </CheckBoxContainer>
);
const CheckBoxContainer = styled.label`
  /* The container */
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 46px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    border-radius: ${(props) => props.theme.radius["radius-small"]};
    border: 2px solid rgba(23, 43, 73, 0.3);
    background-color: ${(props) => props.theme.colors["primary-light"]};
    transition: 0.25s ease-in-out;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #66a3ff;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* When the checkbox is checked, add a blue background */
  .checked ~ .checkmark {
    background-color: #66a3ff;
  }
  /* Show the checkmark when checked */
  .checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 14px;
    top: 5px;
    width: 12px;
    height: 24px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
