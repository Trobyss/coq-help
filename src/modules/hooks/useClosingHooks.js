import { useState } from "react";
import moment from "moment";

export function useClosingHooks() {
  const [closedPeriods, setClosedPeriods] = useState([]);

  const handleAddClosingPeriod = () => {
    setClosedPeriods((prev) => [...prev, ...defaultState]);
  };

  const handleRemoveClosingPeriod = (index) => () => {
    setClosedPeriods((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateClosingPeriod = (index) => (date) => {
    if (date === null) {
      return;
    }
    const oldPeriod = closedPeriods;
    oldPeriod[index] = {
      start_date: date[0],
      end_date: date[1],
    };
    setClosedPeriods([...oldPeriod]);
  };

  return {
    handleAddClosingPeriod,
    handleRemoveClosingPeriod,
    closedPeriods,
    handleUpdateClosingPeriod,
  };
}

const defaultState = [
  {
    start_date: moment().toDate(),
    end_date: moment().toDate(),
  },
];
