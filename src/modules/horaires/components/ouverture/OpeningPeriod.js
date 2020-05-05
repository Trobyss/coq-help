import React from "react";
import styled from "styled-components";
import { DateRangeWhite } from "../range";
import { useHorairesContext } from "../../../context/horaires";
import { ReactComponent as Close } from "../../../theme/icons/delete.svg";

export const OpeningPeriod = (props) => {
  const {
    openingPeriods,
    handleAddOpeningPeriod,
    handleRemoveOpeningPeriods,
    handleDateChange,
  } = useHorairesContext();

  return (
    <OpeningPeriodWrapper>
      Horaires du :
      <WrapperDates>
        {openingPeriods
          .filter((open) => open.uuid === props.uuid)
          .map((period, index) => (
            <DateRangeWhite
              key={index}
              index={index}
              period={period}
              handleRemoveClosePeriod={handleRemoveOpeningPeriods(props.uuid)}
              handleDateChange={handleDateChange(props.uuid)}
            />
          ))}
        <OpeningAddPeriodButton onClick={handleAddOpeningPeriod(props.uuid)}>
          + Ajouter une période
        </OpeningAddPeriodButton>
      </WrapperDates>
      <OpeningDeletePeriodButton onClick={props.handleRemovePeriod}>
        <CloseIcon />
        Supprimer la période
      </OpeningDeletePeriodButton>
    </OpeningPeriodWrapper>
  );
};
const OpeningPeriodWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  height: 42px;
  margin: 0 5px;
  text-align: center;
  font-size: 15px;
  border: none;
  background: white;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  color: ${(props) => props.theme.colors.dark};
`;
const OpeningAddPeriodButton = styled(Button)``;
const OpeningDeletePeriodButton = styled(Button)`
  margin-left: auto;
`;
const WrapperDates = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CloseIcon = styled(Close)`
  margin: auto 5px auto 0;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;
