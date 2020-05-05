import React from "react";
import styled from "styled-components";
import { Select } from "../../../theme/components";

import { ReactComponent as Interrogation } from "../../../theme/icons/interrogation.svg";

export const YearlySimilitude = (props) => {
  return (
    <YearlySimilitudeWrapper>
      Hormis vos périodes de fermeture; avez-vous les mêmes horaires toute
      l'année ?
      <CustomInterrogation />
      <Select onChange={props.changeSimilitude}>
        <option selected disabled>
          Choisir
        </option>
        <option value={true} key={true}>
          Oui
        </option>
        <option value={false} key={false}>
          Non
        </option>
      </Select>
    </YearlySimilitudeWrapper>
  );
};
const YearlySimilitudeWrapper = styled.div`
  background: white;
  width: 100%;
  padding: 30px 20px;
  margin: 0 0 15px 0;
`;
const CustomInterrogation = styled(Interrogation)`
  max-width: 24px;
  top: 6px;
  position: relative;
  margin: 0 15px;
`;
