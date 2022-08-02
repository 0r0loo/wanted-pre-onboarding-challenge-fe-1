import React, { useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import styled from "styled-components";
import CenterLayout from "../components/common/CenterLayout";
import SizedBox from "../components/common/SizedBox";
import Utils from "../utils/index";

function LoginPage() {
  const idRef = useRef("");
  const pwRef = useRef("");
  const [disabled, setDisabled] = useState("disabled");

  const onClickLogin = () => {
    console.log("로그인클릭");
  };

  const onClickSignUp = () => {
    console.log("회원가입 클릭");
  };

  return (
    <CenterLayout>
      <Container>
        <h1>로그인 페이지</h1>
        <Input placeholder={"아이디"} ref={idRef} />
        <SizedBox height={16} />
        <Input placeholder={"비밀번호"} ref={pwRef} />
        <SizedBox height={16} />
        <Button title={"로그인"} onClick={onClickLogin} disabled={disabled} />
        <SizedBox height={16} />
        <Button title={"회원가입"} onClick={onClickSignUp} />
      </Container>
    </CenterLayout>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export default LoginPage;
