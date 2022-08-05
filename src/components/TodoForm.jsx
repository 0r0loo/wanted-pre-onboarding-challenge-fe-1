import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { useForm } from "react-hook-form";

function TodoForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("-> data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name={"title"} />
      <Input register={register} name={"content"} />
      <Button title={"추가"} type={"submit"} />
    </form>
  );
}

export default TodoForm;
