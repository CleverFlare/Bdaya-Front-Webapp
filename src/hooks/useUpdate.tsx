import { useEffect, useRef } from "react";

function useUpdate(callback: () => void, deps: any[]) {
  const initialMount = useRef<boolean>(true);
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    callback();
  }, deps);
}
export default useUpdate;
