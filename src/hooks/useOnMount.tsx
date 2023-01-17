import { useEffect } from "react";

function useOnMount(callback: () => any) {
  useEffect(callback, []);
}

export default useOnMount;
