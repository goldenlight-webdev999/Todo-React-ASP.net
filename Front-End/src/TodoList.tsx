import React from "react";
import { DeleteComplete, GoDetail, Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteComplete: DeleteComplete;
  goDetail: GoDetail;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteComplete,
  goDetail
  
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.key}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteComplete={deleteComplete}
          goDetail={goDetail}
        />
      ))}
    </ul>
  );
};
