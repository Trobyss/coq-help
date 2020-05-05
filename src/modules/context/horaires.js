import { createContext, useContext } from "react";
import { useSimilitude } from "../hooks/useSimilitudeHooks";
import { usePeriods } from "../hooks/usePeriodHooks";
import { useClosingHooks } from "../hooks/useClosingHooks";
import { useOpeningPeriod } from "../hooks/useOpeningPeriod";

// Create context
const HorairesContext = createContext(null);

// Export provider
export const HorairesContextProvider = HorairesContext.Provider;

// Export consumer
export function useHorairesContext() {
  // As long as Horairescontext is wrapping the whole app, we are sure that this is not null (that's why I use !)
  return useContext(HorairesContext);
}

/**
 * Export horaires initializer
 */
export function useHorairesContextSubscriber() {
  const { handleSimilitude, similitude } = useSimilitude();
  const {
    handleAddPeriod,
    handlePaste,
    handleRemovePeriod,
    handleUpdateOptions,
    handleUpdateTime,
    periods,
    resetPeriods,
  } = usePeriods();
  const {
    closedPeriods,
    handleAddClosingPeriod,
    handleRemoveClosingPeriod,
    handleUpdateClosingPeriod,
  } = useClosingHooks();
  const {
    openingPeriods,
    setOpeningPeriods,
    handleAddOpeningPeriod,
    handleRemoveOpeningPeriods,
    handleDateChange,
  } = useOpeningPeriod();

  return {
    closedPeriods,
    handleAddOpeningPeriod,
    handleAddClosingPeriod,
    handleAddPeriod,
    handleDateChange,
    handlePaste,
    handleRemoveClosingPeriod,
    handleRemoveOpeningPeriods,
    handleRemovePeriod,
    handleSimilitude,
    handleUpdateClosingPeriod,
    handleUpdateOptions,
    handleUpdateTime,
    openingPeriods,
    periods,
    resetPeriods,
    setOpeningPeriods,
    similitude,
  };
}
