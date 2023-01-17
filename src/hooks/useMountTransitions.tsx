import { useEffect } from "react";

function useMountTransition(duration: number) {
  useEffect(() => {}, []);

  return {
    open: false,
  };
}

export default useMountTransition;
