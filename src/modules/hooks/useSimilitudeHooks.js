import { useCallback, useState } from "react";

export function useSimilitude() {
  const [similitude, setSimilitude] = useState(true);

  const handleSimilitude = useCallback(async (boolean) => {
    setSimilitude(boolean);
  }, []);

  return { similitude, handleSimilitude };
}
