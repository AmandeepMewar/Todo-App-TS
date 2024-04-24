import React, { useState } from "react";
import styles from "./InputField.module.scss";

import { GrTextAlignLeft } from "react-icons/gr";

const InputField = () => {
  const [input, setInput] = useState<string>("");

  const [add, setAdd] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className={styles["input-box"]}>
        <button className={styles["option"]} onClick={() => setAdd((p) => !p)}>
          <GrTextAlignLeft className={styles["logo"]} />
        </button>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a task..."
          className={styles["input"]}
        />
      </div>
      {add && <textarea />}
    </div>
  );
};

export default InputField;
