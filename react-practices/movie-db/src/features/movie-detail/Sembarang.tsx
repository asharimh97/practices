import useDebounce from "hooks/useDebounce";
import { useState } from "react";

function Sembarangan() {
  const [keyword] = useState<string>("");
  const debouncedKeyword = useDebounce({ value: keyword });

  console.log(debouncedKeyword);
}

export default Sembarangan;
