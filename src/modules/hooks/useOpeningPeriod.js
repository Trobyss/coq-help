import { useState, useEffect } from "react";
import moment from "moment";

export function useOpeningPeriod() {
  const [openingPeriods, setOpeningPeriods] = useState([]);

  const handleAddOpeningPeriod = (uuid) => () => {
    const isAlready = openingPeriods.filter((open) => open.uuid === uuid);

    setOpeningPeriods((prev) => [
      ...prev,
      {
        uuid: uuid,
        index: isAlready.length,
        start_date: moment().toDate(),
        end_date: moment().toDate(),
      },
    ]);
  };

  const handleRemoveOpeningPeriods = (uuid) => (index) => () => {
    const oldPeriod = openingPeriods.filter(
      (open) =>
        (open.uuid === uuid && open.index !== index) || open.uuid !== uuid
    );
    setOpeningPeriods(oldPeriod);
  };

  const handleDateChange = (uuid) => (index) => (date) => {
    if (date === null) {
      return;
    }
    let oldPeriod = openingPeriods.filter(
      (open) => open.uuid === uuid && open.index === index
    );
    oldPeriod = {
      ...oldPeriod[0],
      start_date: date[0],
      end_date: date[1],
    };

    setOpeningPeriods([
      ...openingPeriods.filter(
        (open) =>
          open.uuid !== uuid || (open.uuid === uuid && open.index !== index)
      ),
      oldPeriod,
    ]);
  };

  useEffect(() => {
    console.log(openingPeriods);
  }, [openingPeriods]);

  return {
    openingPeriods,
    setOpeningPeriods,
    handleAddOpeningPeriod,
    handleRemoveOpeningPeriods,
    handleDateChange,
  };
}
