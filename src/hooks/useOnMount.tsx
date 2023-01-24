import { useEffect, useRef } from "react";

function useOnMount(callback: () => any) {
  const initMount = useRef(true);
  useEffect(() => {
    if (initMount.current === false) return;
    callback();
    initMount.current = false;
  }, []);
}

export default useOnMount;
