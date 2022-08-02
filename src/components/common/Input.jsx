import React from "react";
import styled from "styled-components";

function Input({ placeholder, type }, ref) {
  return (
    <>
      <CustomInput placeholder={placeholder} type={type} ref={ref} />
    </>
  );
}

const CustomInput = styled.input``;

export default React.forwardRef(Input);
