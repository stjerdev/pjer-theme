import { useEffect, useState } from "react";

// Hook
function useIsClient() {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient;
}

export default useIsClient;
