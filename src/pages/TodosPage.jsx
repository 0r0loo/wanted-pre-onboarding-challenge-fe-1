import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTodosApi } from "../apis/todoApi";
import Button from "../components/common/Button";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/todo/TodoList";

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const result = await getTodosApi();
    setTodos(result.data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>투두리스트페이지</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <Outlet />
    </>
  );
}

export default TodosPage;
