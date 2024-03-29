import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return ref;
};

export default useClick;
