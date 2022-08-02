import React from "react";
import styled from "styled-components";

function SizedBox({ width, height }) {
  return <Container width={width} height={height} />;
}

const Container = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => height && `${height}px`};
`;

export default SizedBox;
