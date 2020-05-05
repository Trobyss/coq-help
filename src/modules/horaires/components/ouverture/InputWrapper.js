import React from "react";
import styled from "styled-components";
import TimeField from "react-simple-timefield";
import { CheckBox } from "../../../theme/components";

export const InputWrapper = (props) => {
  const onChange = (_, value) => {
    props.handleUpdate(value);
  };

  return (
    <InputWrapperWrapper>
      <TimeLabel>{props.label}</TimeLabel>
      <TimeInput
        onChange={onChange}
        value={`${props.defaultTime.hours}:${props.defaultTime.minutes}`}
      />
    </InputWrapperWrapper>
  );
};

export const CloseInput = (props) => {
  const onChange = (e) => {
    e.persist();
    props.updateOptions(e.target.checked);
  };

  return (
    <InputWrapperWrapper>
      <TimeLabel>Jour fermé</TimeLabel>
      <CheckBox onChange={onChange} defaultChecked={props.defaultChecked} />
    </InputWrapperWrapper>
  );
};

const InputWrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px;
  min-height: 75px;
`;
const TimeLabel = styled.label`
  font-size: 12px;
  position: relative;
  bottom: 10px;
  color: ${(props) => props.theme.colors["primary-grey"]};
`;
const TimeInput = styled(TimeField)`
  height: 40px;
  width: 80px !important;
  background: ${(props) => props.theme.colors["primary-light"]};
  text-align: center;
  border: none;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  letter-spacing: 3px;
  font-size: 15px;
  color: ${(props) => props.theme.colors["dark-primary"]};
`;
