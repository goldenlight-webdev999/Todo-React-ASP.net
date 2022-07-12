import React from "react";
import { Todo } from "./types";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoDetail: React.FC<TodoListItemProps> = ({
  todo,
}) => {
  return (
    <ul>
      <li className="item">
        <span className="label">Key:</span>
        <span>{todo.key}</span>
      </li>
      <li className="item">
        <span className="label">Name:</span>
        <span>{todo.name}</span>
      </li>
      <li className="item">
        <span className="label">Status:</span>
        <span>{todo.isComplete ? "Done" : "In progress"}</span>
      </li>
    </ul>
  );
};
