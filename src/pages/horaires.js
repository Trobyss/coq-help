import React from "react";
import styled from "styled-components";
import { FermeturePeriod } from "../modules/horaires/components";
import { Opening } from "../modules/horaires/components/ouverture";

import { ReactComponent as Interrogation } from "../modules/theme/icons/interrogation.svg";
import { useHorairesContext } from "../modules/context/horaires";

export const HorairesPage = (props) => {
  const {
    periods,
    closedPeriods,
    openingPeriods,
    similitude,
  } = useHorairesContext();

  const generateJson = () => {
    if (similitude) {
      return {
        same_schedule: similitude,
        closed_periods: [closedPeriods],
        schedules_table: [...periods],
      };
    } else {
      const newPeriod = openingPeriods.map((open) => {
        const period = periods.find((period) => period.uuid === open.uuid);
        return {
          ...period,
          start_date: open.start_date,
          end_date: open.end_date,
        };
      });

      return {
        same_schedule: similitude,
        closed_periods: [closedPeriods],
        schedules_table: [...newPeriod],
      };
    }
  };

  return (
    <HorairesPageWrapper>
      <HorairesSubtitle>
        Période de fermeture (vacances, jours fériés)
        <CustomInterrogation />
      </HorairesSubtitle>
      <FermeturePeriod />
      <HorairesSubtitle>Vos horaires d'ouverture</HorairesSubtitle>
      <Opening />
      <Fake onClick={() => console.log(generateJson())}>
        FAKE SUBMIT (check console.log)
      </Fake>
    </HorairesPageWrapper>
  );
};
const HorairesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.container["container-width"]};
  margin: auto;
  padding: 5px;
`;
const HorairesSubtitle = styled.h3`
  color: ${(props) => props.theme.colors["dark-blue"]};
`;
const CustomInterrogation = styled(Interrogation)`
  max-width: 24px;
  top: 6px;
  position: relative;
  margin: 0 15px;
`;
const Fake = styled.button`
  margin: 15px 0;
  height: 50px;
`;
