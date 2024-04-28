import React, { useState } from "react";
import styles from "./InputField.module.scss";

import { GrTextAlignLeft } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

import { useTodoContext } from "../../context/TodoContext";

import { v4 as uuidv4 } from "uuid";
import { TodoTypes } from "../../types/Types";

const minDate = new Date().toISOString().slice(0, 10);

const InputField = () => {
  const { AddTodos } = useTodoContext();

  const [input, setInput] = useState<TodoTypes>({
    todoTitle: "",
    todoDate: minDate,
  } as TodoTypes);

  const [add, setAdd] = useState<boolean>(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const [name, value] = [e.target.name, e.target.value];
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddTodos({
      todoId: uuidv4(),
      todoTitle: input.todoTitle,
      todoDescription: input.todoDescription,
      todoCompleted: false,
      todoDate: input.todoDate,
    });
    setInput({
      todoTitle: "",
      todoDescription: "",
      todoDate: minDate,
    } as TodoTypes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["input-box"]}>
        <button
          type="button"
          className={styles["option"]}
          onClick={() => setAdd((p) => !p)}
        >
          <GrTextAlignLeft className={styles["logo"]} />
        </button>
        <input
          type="text"
          value={input.todoTitle}
          onChange={handleChange}
          placeholder="Add a task..."
          className={styles["input"]}
          name="todoTitle"
          autoComplete="off"
          maxLength={45}
          required
        />
        <button type="submit" className={styles["arrow-btn"]}>
          <FaArrowRightLong className={styles["logo"]} />
        </button>
      </div>
      {add && (
        <div className={styles["description-box"]}>
          <textarea
            cols={40}
            rows={3}
            value={input.todoDescription}
            onChange={handleChange}
            placeholder="Add some description..."
            className={styles["description"]}
            name="todoDescription"
            autoComplete="off"
          ></textarea>

          <input
            type="date"
            className={styles["date"]}
            min={minDate}
            value={input.todoDate}
            name="todoDate"
            onChange={handleChange}
          />
        </div>
      )}
    </form>
  );
};

export default InputField;
