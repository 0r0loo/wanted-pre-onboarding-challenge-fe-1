import React, { useEffect, useMemo, useRef, useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import styled from "styled-components";
import CenterLayout from "../components/common/CenterLayout";
import SizedBox from "../components/common/SizedBox";
import Utils from "../utils/index";
import { useForm } from "react-hook-form";
import { loginApi } from "../apis/userApi";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await loginApi(data);
    navigate("/todos");
  };

  const onClickSignUp = () => {
    console.log("회원가입 클릭");
    navigate("/auth", { replace: true });
  };

  const isEmail = Utils.checkEmail(watch("email", false));
  const isPassword = Utils.checkPassword(watch("password", false));

  useEffect(() => {
    if (isEmail && isPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isEmail, isPassword]);

  return (
    <CenterLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>로그인 페이지</h1>
        <Input placeholder={"아이디"} register={register} name={"email"} />
        <SizedBox height={16} />
        <Input
          type={"password"}
          placeholder={"비밀번호"}
          register={register}
          name={"password"}
        />
        <SizedBox height={16} />
        <Button type={"submit"} title={"로그인"} disabled={disabled} />
        <SizedBox height={16} />
        <Button type={"button"} title={"회원가입"} onClick={onClickSignUp} />
      </Form>
    </CenterLayout>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default LoginPage;
