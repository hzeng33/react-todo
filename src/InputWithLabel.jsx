import React, { useEffect, useRef } from "react";
import style from "./Input.module.css";

function InputWithLabel({ children, todoTitle, handleTitleChange }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle" className={style.Label}>
        {children}{" "}
      </label>
      <input
        id="todoTitle"
        name="title"
        type="text"
        className={style.Input}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
}

export default InputWithLabel;
