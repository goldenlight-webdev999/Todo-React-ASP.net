import React from "react";
import "./TodoListItem.css";
import { DeleteComplete, Todo, ToggleComplete } from "./types";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteComplete: DeleteComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteComplete
}) => {
  return (
    <li>
      <label className={todo.isComplete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.isComplete}
        />
        {todo.name}
        <span className="separator"></span>        
      </label>
      <span onClick={() => deleteComplete(todo)} className="link">
        Delete
      </span>
    </li>
  );
};
