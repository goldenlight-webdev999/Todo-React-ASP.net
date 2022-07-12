import React, { useEffect, useState } from "react";
import { initialSelectedTodo, initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { AddTodo, DeleteComplete, GoDetail, Todo, ToggleComplete } from "./types";
import { API_URL } from "./services/constants";
import { get, post, put, del } from "./services/axios";
import "./App.css"
import { TodoDetail } from "./TodoDetail";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [selectTodo, setSelectTodo] = useState<Todo>(initialSelectedTodo);
  const [showDetail, setShowDetail] = useState(false);

  const toggleComplete: ToggleComplete = selectedTodo => {    
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    updateTodo(selectedTodo, updatedTodos);
  };

  const updateTodo = async (data: Todo, updatedTodos: Todo[]) => {
    const param = data.key;
    const url = API_URL + param;    

    const formData = {
      "key": data.key,
      "name": data.name,
      "isComplete": data.isComplete ? 0 : 1
    }
  
    try {
      await put(url, formData);
      setTodos(updatedTodos);
    } catch (err) {
      console.log(err)
    }
  };

  const getAllTodos = async () => {
    const param = "";
    const url = API_URL + param;
  
    try {
      const response: any = await get(url, null);
      setTodos(response.data);
      
    } catch (err) {
      console.log(err)
    }
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      addNewTodo(newTodo)
  };

  const addNewTodo = async (todo: string) => {    
    const param = "";
    const url = API_URL + param;

    const data = {
      "name": todo,
      "isComplete": 0
    }
  
    try {
      const response: any = await post(url, data);
      setTodos([...todos, response.data]);
      
    } catch (err) {
      console.log(err)
    }
  };

  const deleteComplete: DeleteComplete = selectedTodo => {    
    const updatedTodos = todos.filter((todo: Todo) => {
      return todo.key !== selectedTodo.key;
    });
    deleteTodo(selectedTodo, updatedTodos);
  };

  const deleteTodo = async (data: Todo, updatedData: Todo[]) => {
    const param = data.key;
    const url = API_URL + param;    

    const formData = {
      "key": data.key,
      "name": data.name,
      "isComplete": data.isComplete ? 0 : 1
    }
  
    try {
      await del(url, formData);
      setTodos(updatedData);
      
    } catch (err) {
      console.log(err)
    }
  };

  const goDetail: GoDetail = (selectedTodo: Todo) => {
    setSelectTodo(selectedTodo)
    setShowDetail(true);
    
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="container">
      {showDetail && (
        <div>
          <h1 className="title text-center">Todo Detail</h1>
          <TodoDetail todo={selectTodo}/>
          <div 
            className="btn text-center"
            onClick={() => {setShowDetail(false)}}
          >
            Return to List
          </div>
        </div>
      )}
      {!showDetail && (
        <>
          <h1 className="title text-center">Todo List</h1>
          <React.Fragment>
            <TodoList 
              todos={todos}
              toggleComplete={toggleComplete}
              deleteComplete={deleteComplete}
              goDetail={goDetail}
            />
            <AddTodoForm addTodo={addTodo} />
          </React.Fragment>
        </>
      )}
    </div>
    
  );  
};

export default App;
