"use client";

import React, { useState } from "react";
import { fields } from "./constant";
import Input from "@/components/Input/Input";
import Link from "next/link";
import Button from "@/components/Button/Button";
import style from "../page.module.css";
import Seprator from "@/components/seprator/Seprator";

import InputWithButton from "@/components/Input/InputwithButton";
import { confirmSignup, signup } from "@/services/auth";

const SignUp = (props) => {
  const [info, setInfo] = useState({
    name: "Mehak",
    email: "b7mehak@gmail.com",
    password: "NotToday@123",
    confirmPassword: "",
  });

  const [confirmationCode, setConfirmationCode] = useState("");

  const onCodeUpdate = (code, value) => {
    console.log("on", code, value);
    setConfirmationCode(value);
  };

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    const data = await signup({
      email: info.email,
      password: info.password,
      name: info.name,
    });
  };

  const confirmationSingUp = async () => {
    console.log("inside this confriamtaion");

    const response = await confirmSignup({
      confirmationCode: confirmationCode,
      email: info.email,
    });

    if (response.data) {
    } else {
    }
  };

  return (
    <div className={style.centered}>
      <div className={style.card}>
        {fields.map((item, index) => (
          <Input
            key={index}
            {...item}
            onChange={onChange}
            value={info[item.name]}
          />
        ))}
        <InputWithButton
          input={confirmationCode}
          onChange={onCodeUpdate}
          onClick={handleSignUp}
          placeholder={"Enter code"}
          label={"Enter code"}
          name="code"
        >
          Get Code
        </InputWithButton>

        {confirmationCode?.length > 0 && (
          <Button onClick={confirmationSingUp}>Singup</Button>
        )}
        <div className={style.info}>
          Already have an account? <Link href={"/login"}> Login</Link>
        </div>
        <Seprator />
        <Button onClick={() => {}}> Continue as Guest</Button>
      </div>
    </div>
  );
};

export default SignUp;
