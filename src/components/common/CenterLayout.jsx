import React from "react";
import styled from "styled-components";

function CenterLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default CenterLayout;
