import React from "react";
import styled from "styled-components";

export const AddPeriodBlock = (props) => {
  return (
    <AddPeriodBlockWrapper>
      <AddPeriodBlockButton onClick={props.handleAddPeriod}>
        + Ajouter une période d'horaire
      </AddPeriodBlockButton>
    </AddPeriodBlockWrapper>
  );
};
const AddPeriodBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  background: white;
  width: 100%;
  padding: 30px 20px;
  margin: 15px 0;
`;
const AddPeriodBlockButton = styled.div`
  display: flex;
  align-items: center;
  color: #66a3ff;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
  margin: auto;
`;
