import React from "react";
import styled from "styled-components";

function Input({ placeholder, type, register, name }) {
  return (
    <>
      <CustomInput placeholder={placeholder} type={type} {...register(name)} />
    </>
  );
}

const CustomInput = styled.input``;

export default Input;
