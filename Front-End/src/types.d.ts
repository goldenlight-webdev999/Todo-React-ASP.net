export type Todo = {
  key: string;
  name: string;
  isComplete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type DeleteComplete = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;
