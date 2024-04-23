import { RefObject, useEffect } from "react";

export const useClickOutside = (ref: RefObject<HTMLDivElement>, cb: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
};
