import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todoSlice';

export const TodoItem = ({
  id,
  completed,
  title,
}) => {

  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span> {title} </span>
      <span  onClick={() => dispatch(deleteTodo(id))}>
        {" "}
        &times;{" "}
      </span>
    </li>
  );
};
