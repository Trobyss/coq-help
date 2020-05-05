import React from "react";
import styled from "styled-components";

import { InputWrapper, CloseInput } from "./InputWrapper";

export const DayFormRow = (props) => {
  return (
    <DayFormRowWrapper>
      <DayLabel>{props.day}</DayLabel>
      <InputRow>
        {!props.defaultValue.options.closed ? (
          <>
            <InputWrapper
              handleUpdate={props.updateTime("start")}
              defaultTime={props.defaultValue.start}
              label="Ouverture"
            />
            {props.defaultValue.options.has_pause && (
              <>
                <InputWrapper
                  handleUpdate={props.updateTime("start_pause")}
                  defaultTime={props.defaultValue.start_pause}
                  label="Début pause"
                />
                <InputWrapper
                  handleUpdate={props.updateTime("end_pause")}
                  defaultTime={props.defaultValue.end_pause}
                  label="Fin pause"
                />
              </>
            )}
            <InputWrapper
              handleUpdate={props.updateTime("end")}
              defaultTime={props.defaultValue.end}
              label="Fermeture"
            />
          </>
        ) : (
          <DayPlaceholder />
        )}
        <CloseInput
          updateOptions={props.updateOptions("closed")}
          defaultChecked={props.defaultValue.options.closed}
        />
        {!props.defaultValue.options.has_pause &&
          !props.defaultValue.options.closed && (
            <DayPause onClick={props.updateOptions("has_pause")}>
              + Ajouter une pause
            </DayPause>
          )}
        <DayActionsWrapper>
          {props.defaultValue.options.has_pause &&
            !props.defaultValue.options.closed && (
              <>
                <DayAction onClick={props.updateOptions("has_pause")}>
                  Retirer la pause
                </DayAction>
                |
              </>
            )}
          {props.numberCopy === props.dayNumber &&
            !props.defaultValue.options.closed && (
              <DayAction underline>Copié</DayAction>
            )}
          {props.numberCopy !== props.dayNumber &&
            !props.defaultValue.options.closed && (
              <DayAction onClick={props.handleCopy}>Copier</DayAction>
            )}
          {props.numberCopy !== props.dayNumber && props.numberCopy !== null && (
            <>
              |<DayAction onClick={props.handlePaste}>Coller</DayAction>
            </>
          )}
        </DayActionsWrapper>
      </InputRow>
    </DayFormRowWrapper>
  );
};
const DayFormRowWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 5px 0;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin: 25px 0;
  }
`;
const InputRow = styled.div`
  display: flex;
  align-items: center;
  flex: 6;
  flex-wrap: wrap;
`;
const DayLabel = styled.label`
  color: #323232;
  flex: 1;
  font-size: 15px;
`;
const DayPause = styled.div`
  color: #66a3ff;
`;
const DayPlaceholder = styled.div`
  width: 175px;
  height: 6px;
  margin: 0 5px;
  background: ${(props) => props.theme.colors.light};
  border: ${(props) => props.theme.radius["radius-small"]};
`;
const DayActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: space-between;
`;
const DayAction = styled.p`
  font-size: 15px;
  cursor: pointer;
  text-decoration: ${(props) => (props.underline ? "" : "underline")};
  color: ${(props) => props.theme.colors.dark};
  margin: 0 5px;
`;
