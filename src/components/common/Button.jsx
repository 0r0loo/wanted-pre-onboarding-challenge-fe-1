import React from "react";
import styled from "styled-components";
import { useWatch } from "react-hook-form";

function Button({ type = "button", title, onClick, disabled }) {
  return (
    <CustomButton type={type} onClick={onClick} disabled={disabled}>
      {title}
    </CustomButton>
  );
}

const CustomButton = styled.button``;

export default Button;
