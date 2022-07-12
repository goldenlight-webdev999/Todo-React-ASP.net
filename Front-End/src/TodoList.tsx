import React from "react";
import { DeleteComplete, Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteComplete: DeleteComplete;
}


export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteComplete
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.key}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteComplete={deleteComplete}
        />
      ))}
    </ul>
  );
};
