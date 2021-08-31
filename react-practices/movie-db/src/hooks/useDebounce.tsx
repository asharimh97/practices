import { useEffect, useState } from "react";

interface useDebounceProps {
  value?: string;
  duration?: number;
}

function useDebounce({ value = "", duration = 500 }: useDebounceProps): string {
  const [val, setVal] = useState<string>(value);
  const [timeInterval, setTimeInterval] = useState<any>(0);

  useEffect(() => {
    if (value.length > 2) {
      if (timeInterval) {
        clearTimeout(timeInterval);
      }

      setTimeInterval(
        setTimeout(() => {
          setVal(value);
        }, duration),
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return val;
}

export default useDebounce;
