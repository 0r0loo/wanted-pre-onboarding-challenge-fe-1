import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getTodosApi } from "../apis/todoApi";

function TodosPage() {
  const getTodos = async () => {
    const result = await getTodosApi();
    console.log("-> result", result);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>투두리스트페이지</h1>

      <Outlet />
    </>
  );
}

export default TodosPage;
