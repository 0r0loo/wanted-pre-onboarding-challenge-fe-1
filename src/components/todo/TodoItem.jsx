import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTodoApi, getTodoByIdApi } from "../../apis/todoApi";
import Button from "../common/Button";
import Input from "../common/Input";
import { useForm } from "react-hook-form";

function TodoItem({ todo, onClickDeleteTodo, onClickModifyTodo }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: todo.title,
      content: todo.content,
    },
  });
  const [isModify, setIsModify] = useState(false);

  const onClcikModifyTodo = (_todo) => {
    onClickModifyTodo({
      ...todo,
      title: _todo.title,
      content: _todo.content,
    });
    setIsModify(false);
  };

  return (
    <>
      {isModify ? (
        <form onSubmit={handleSubmit(onClcikModifyTodo)}>
          <Input name={"title"} register={register} />
          <Input name={"content"} register={register} />
          <Button title={"완료"} type={"submit"} />
        </form>
      ) : (
        <>
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
          <Button title={"수정"} onClick={() => setIsModify(true)} />
        </>
      )}

      <Button title={"삭제"} onClick={() => onClickDeleteTodo(todo.id)} />
    </>
  );
}

export default TodoItem;
