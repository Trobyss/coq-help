import { useState } from "react";
import { v4 } from "uuid";

export function usePeriods() {
  const [periods, setPeriods] = useState([...defaultState]);

  const handleRemovePeriod = (uuid) => () => {
    setPeriods((prev) => prev.filter((pr) => pr.uuid !== uuid));
  };

  const handleAddPeriod = () => {
    setPeriods((prev) => [
      ...prev,
      { uuid: v4(), start_date: "", end_date: "", days: defaultDays },
    ]);
  };

  const resetPeriods = () => {
    setPeriods([...defaultState]);
  };

  const handleUpdateTime = (period) => (day) => (type) => (time) => {
    const oldPeriods = periods;
    const oldWeek = oldPeriods[period].days;
    oldWeek[day] = {
      ...oldWeek[day],
      [type]: {
        hours: Number(time.split(":")[0]),
        minutes: Number(time.split(":")[1]),
      },
    };

    setPeriods([...oldPeriods]);
  };

  const handleUpdateOptions = (period) => (day) => (type) => (value) => {
    const oldPeriods = periods;
    const oldWeek = oldPeriods[period].days;

    if (type === "has_pause") {
      oldWeek[day] = {
        ...oldWeek[day],
        options: {
          ...oldWeek[day].options,
          [type]: !oldWeek[day].options[type],
        },
      };
    } else {
      oldWeek[day] = {
        ...oldWeek[day],
        options: {
          ...oldWeek[day].options,
          [type]: value,
        },
      };
    }

    oldPeriods[period].days = oldWeek;

    setPeriods([...oldPeriods]);
  };

  const handlePaste = (period, parent, child) => {
    const oldPeriods = periods;
    const oldWeek = oldPeriods[period].days;
    oldWeek[child] = oldWeek[parent];
    setPeriods([...oldPeriods]);
  };

  return {
    periods,
    handleRemovePeriod,
    handleAddPeriod,
    handleUpdateOptions,
    resetPeriods,
    handleUpdateTime,
    handlePaste,
  };
}

const defaultDays = [
  {
    name: "Lundi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Mardi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Mercredi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Jeudi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Vendredi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Samedi",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
  {
    name: "Dimanche",
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
    start_pause: {
      hours: 0,
      minutes: 0,
    },
    end_pause: {
      hours: 0,
      minutes: 0,
    },
    options: {
      closed: false,
      has_pause: false,
    },
  },
];

const defaultState = [
  {
    uuid: v4(),
    start_date: "",
    end_date: "",
    days: [...defaultDays],
  },
];
