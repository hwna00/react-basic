import { useCallback, useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = useCallback(
    (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    },
    [onBefore]
  );
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [handle, onBefore]);
};

export default useBeforeLeave;
