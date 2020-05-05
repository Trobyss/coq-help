import React from "react";
import styled from "styled-components";
import { YearlySimilitude } from "./YearlySimilitude";
import { OpeningForm } from "./OpeningForm";
import { AddPeriodBlock } from "./AddPeriodBlock";

import { useHorairesContext } from "../../../context/horaires";

export const Opening = (props) => {
  const {
    handleAddPeriod,
    handleRemovePeriod,
    handleSimilitude,
    periods,
    resetPeriods,
    similitude,
  } = useHorairesContext();

  const changeSimilitude = (e) => {
    e.persist();
    handleSimilitude(e.target.value === "true");
    if (e.target.value === "true") {
      resetPeriods();
    }
  };

  return (
    <OpeningWrapper>
      <YearlySimilitude changeSimilitude={changeSimilitude} />
      {similitude && <OpeningForm period={0} isSimilitude={true} />}
      {!similitude &&
        periods.map((per, index) => (
          <OpeningForm
            key={per.uuid}
            period={index}
            uuid={per.uuid}
            handleRemovePeriod={handleRemovePeriod(per.uuid)}
            isSimilitude={similitude}
          />
        ))}
      {!similitude && <AddPeriodBlock handleAddPeriod={handleAddPeriod} />}
    </OpeningWrapper>
  );
};

const OpeningWrapper = styled.div``;
