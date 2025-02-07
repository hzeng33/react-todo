import React, { useEffect, useRef } from "react";
import style from "./Input.module.css";
import propTypes from "prop-types";

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

InputWithLabel.propTypes = {
  children: propTypes.node,
  todoTitle: propTypes.string,
  handleTitleChange: propTypes.func,
};

export default InputWithLabel;
