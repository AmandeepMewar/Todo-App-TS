import React, { useState } from "react";

const InputField = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};

export default InputField;
