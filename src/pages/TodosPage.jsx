import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { deleteTodoApi, getTodosApi, updateTodoApi } from "../apis/todoApi";
import Button from "../components/common/Button";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/todo/TodoList";

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const result = await getTodosApi();
    setTodos(result.data.data.reverse());
  };

  const onClickDeleteTodo = async (id) => {
    await deleteTodoApi(id);
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };
  const onClickModifyTodo = async (todo) => {
    await updateTodoApi(todo);

    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === todo.id
          ? {
              ...prevTodo,
              title: todo.title,
              content: todo.content,
            }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>투두리스트페이지</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList
        todos={todos}
        onClickDeleteTodo={onClickDeleteTodo}
        onClickModifyTodo={onClickModifyTodo}
      />
      <Outlet />
    </>
  );
}

export default TodosPage;
