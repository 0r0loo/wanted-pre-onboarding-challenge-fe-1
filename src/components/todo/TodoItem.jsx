import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTodoByIdApi } from "../../apis/todoApi";

function TodoItem({ todo }) {
  const { id } = useParams();
  console.log("-> id", id);

  useEffect(() => {
    if (id) {
      (async () => {
        const result = await getTodoByIdApi(id);
      })();
    }
  }, [id]);

  return (
    <>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
    </>
  );
}

export default TodoItem;
