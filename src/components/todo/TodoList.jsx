import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onClickDeleteTodo, onClickModifyTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onClickDeleteTodo={onClickDeleteTodo}
          onClickModifyTodo={onClickModifyTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
