import React, { useState } from "react";
import styled from "styled-components";
import { DayFormRow } from "./DayFormRow";
import { OpeningPeriod } from "./OpeningPeriod";
import { useHorairesContext } from "../../../context/horaires";

export const OpeningForm = (props) => {
  const {
    handleUpdateTime,
    handleUpdateOptions,
    periods,
    handlePaste,
  } = useHorairesContext();
  const [numberCopy, setNumberCopy] = useState(null);

  const handleCopy = (number) => (e) => {
    setNumberCopy(number);
  };

  const handlePasteMethod = (number) => (e) => {
    if (numberCopy === null) {
      return;
    }
    handlePaste(props.period, numberCopy, number);
    setNumberCopy(null);
  };

  return (
    <>
      {!props.isSimilitude && (
        <OpeningPeriod
          uuid={props.uuid}
          handleRemovePeriod={props.handleRemovePeriod}
        />
      )}
      <OpeningFormWrapper>
        <DayFormRow
          dayNumber={0}
          updateTime={handleUpdateTime(props.period)(0)}
          updateOptions={handleUpdateOptions(props.period)(0)}
          defaultValue={periods[props.period].days[0]}
          handleCopy={handleCopy(0)}
          handlePaste={handlePasteMethod(0)}
          numberCopy={numberCopy}
          day="Lundi"
          key="Lundi"
        />
        <DayFormRow
          dayNumber={1}
          updateTime={handleUpdateTime(props.period)(1)}
          updateOptions={handleUpdateOptions(props.period)(1)}
          defaultValue={periods[props.period].days[1]}
          handleCopy={handleCopy(1)}
          handlePaste={handlePasteMethod(1)}
          numberCopy={numberCopy}
          day="Mardi"
          key="Mardi"
        />
        <DayFormRow
          dayNumber={2}
          updateTime={handleUpdateTime(props.period)(2)}
          updateOptions={handleUpdateOptions(props.period)(2)}
          defaultValue={periods[props.period].days[2]}
          handleCopy={handleCopy(2)}
          handlePaste={handlePasteMethod(2)}
          numberCopy={numberCopy}
          day="Mercredi"
          key="Mercredi"
        />
        <DayFormRow
          dayNumber={3}
          updateTime={handleUpdateTime(props.period)(3)}
          updateOptions={handleUpdateOptions(props.period)(3)}
          defaultValue={periods[props.period].days[3]}
          handleCopy={handleCopy(3)}
          handlePaste={handlePasteMethod(3)}
          numberCopy={numberCopy}
          day="Jeudi"
          key="Jeudi"
        />
        <DayFormRow
          dayNumber={4}
          updateTime={handleUpdateTime(props.period)(4)}
          updateOptions={handleUpdateOptions(props.period)(4)}
          defaultValue={periods[props.period].days[4]}
          handleCopy={handleCopy(4)}
          handlePaste={handlePasteMethod(4)}
          numberCopy={numberCopy}
          day="Vendredi"
          key="Vendredi"
        />
        <DayFormRow
          dayNumber={5}
          updateTime={handleUpdateTime(props.period)(5)}
          updateOptions={handleUpdateOptions(props.period)(5)}
          defaultValue={periods[props.period].days[5]}
          handleCopy={handleCopy(5)}
          handlePaste={handlePasteMethod(5)}
          numberCopy={numberCopy}
          day="Samedi"
          key="Samedi"
        />
        <DayFormRow
          dayNumber={6}
          updateTime={handleUpdateTime(props.period)(6)}
          updateOptions={handleUpdateOptions(props.period)(6)}
          defaultValue={periods[props.period].days[6]}
          handleCopy={handleCopy(6)}
          handlePaste={handlePasteMethod(6)}
          numberCopy={numberCopy}
          day="Dimanche"
          key="Dimanche"
        />
      </OpeningFormWrapper>
    </>
  );
};
const OpeningFormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: white;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  padding: 30px 20px;
`;
