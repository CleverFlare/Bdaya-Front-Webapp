import { useEffect, useRef } from "react";

function useOnMounts(callback: () => any) {
  useEffect(callback, []);
}

export default useOnMounts;
