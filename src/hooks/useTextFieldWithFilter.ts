import {useState} from "react";

function useTextFieldWithFilter(filter: (_: string) => string) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(filter(e.target.value));
  };

  return {
    bind: {
      value,
      onChange,
    },
    value,
    setValue,
  };
}

export default useTextFieldWithFilter;