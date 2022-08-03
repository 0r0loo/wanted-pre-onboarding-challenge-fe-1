import React from "react";
import CenterLayout from "../components/common/CenterLayout";
import Input from "../components/common/Input";
import SizedBox from "../components/common/SizedBox";
import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import Utils from "../utils/index";
import { signUpApi } from "../apis/userApi";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("-> data", data);
    const isCheckEmail = Utils.checkEmail(data.email);
    const isCheckPassword = Utils.checkPassword(data.password);

    if (!isCheckEmail) {
      return alert("이메일에 @ . 포함해주세요.");
    }

    if (!isCheckPassword) {
      return alert("비밀번호는 8자 이상 입력해주세요.");
    }

    signUpApi(data);
    navigate("/");
  };

  return (
    <CenterLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={"이메일"} register={register} name={"email"} />
        <SizedBox height={16} />
        <Input
          placeholder={"비밀번호"}
          register={register}
          name={"password"}
          type={"password"}
        />
        <SizedBox height={16} />
        <Button title={"회원가입"} type={"submit"} />
      </form>
    </CenterLayout>
  );
}

export default SignUpPage;
