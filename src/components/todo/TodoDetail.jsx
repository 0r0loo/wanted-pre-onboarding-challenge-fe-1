import React from "react";
import { useEffect } from "@types/react";
import { getTodoByIdApi } from "../../apis/todoApi";
import { useParams } from "react-router-dom";

function TodoDetail() {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      (async () => {
        const result = await getTodoByIdApi(id);
        console.log("-> result", result);
      })();
    }
  }, [id]);

  return;
}

export default TodoDetail;
