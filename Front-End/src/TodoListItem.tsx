import React from "react";
import { DeleteComplete, GoDetail, Todo, ToggleComplete } from "./types";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteComplete: DeleteComplete;
  goDetail: GoDetail;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteComplete,
  goDetail
}) => {
  return (
    <li className="item flex">
      <div>
        <label className={todo.isComplete ? "complete" : undefined}>
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo)}
            checked={todo.isComplete}
          />      
        </label>
        <span 
          className="item-detail"
          onClick={() => goDetail(todo)}
        >
        {todo.name}
        </span>
      </div>
        
      <span onClick={() => deleteComplete(todo)} className="link">
        Delete
      </span>
    </li>
  );
};
