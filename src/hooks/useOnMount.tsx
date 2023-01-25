import { useEffect, useRef } from "react";

function useOnMount(callback: () => any) {
  useEffect(callback, []);
}

export default useOnMount;
