import React from "react";
import styled from "styled-components";

import { DateRange } from "./range";
import { useHorairesContext } from "../../context/horaires";

export const FermeturePeriod = (props) => {
  const {
    closedPeriods,
    handleAddClosingPeriod,
    handleRemoveClosingPeriod,
    handleUpdateClosingPeriod,
  } = useHorairesContext();

  return (
    <FermeturePeriodWrapper>
      {closedPeriods.map((period, index) => (
        <DateRange
          index={index}
          handleDateChange={handleUpdateClosingPeriod}
          handleRemoveClosePeriod={handleRemoveClosingPeriod}
          period={period}
        />
      ))}
      <FermeturePeriodButton onClick={handleAddClosingPeriod}>
        + Ajouter une période de fermeture
      </FermeturePeriodButton>
    </FermeturePeriodWrapper>
  );
};
const FermeturePeriodWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  background: white;
  width: 100%;
  padding: 30px 20px;
`;
const FermeturePeriodButton = styled.div`
  display: flex;
  align-items: center;
  color: #66a3ff;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
`;
