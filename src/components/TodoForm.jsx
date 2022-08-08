import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { useForm } from "react-hook-form";
import { createTodoApi } from "../apis/todoApi";

function TodoForm({ setTodos }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("-> data", data);
    if (!data.content) return null;
    if (!data.title) return null;

    const result = await createTodoApi(data);
    console.log(result);
    setTodos((prev) => [...prev, result.data.data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        제목
        <Input register={register} name={"title"} />
      </label>
      <br />
      <label>
        내용
        <Input register={register} name={"content"} />
      </label>
      <br />
      <Button title={"추가"} type={"submit"} />
    </form>
  );
}

export default TodoForm;
