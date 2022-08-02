import React from "react";
import styled from "styled-components";

function Button({ title, onClick, disabled }) {
  return (
    <CustomButton onClick={onClick} disabled={disabled}>
      {title}
    </CustomButton>
  );
}

const CustomButton = styled.button``;

export default Button;
