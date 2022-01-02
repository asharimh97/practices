import { useState } from "react";

function useForm(initialState = "") {
  const [value, setValue] = useState(initialState);

  const handleChageValue = (e) => {
    setValue(e.target.value)
  }

  const clearValue = () => {
    setValue(initialState);
  }

  return [value, handleChageValue, clearValue];
}

export default useForm;