"use client";
import React, { useState } from "react";

import InputWithButton from "@/components/Input/InputwithButton";
import Input from "@/components/Input/Input";
import { getPasswordCode, resetPassword } from "@/services/auth";

import style from "../page.module.css";
import Button from "@/components/Button/Button";

import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    email: "",
    newPassword: "",
    confirmationCode: "",
  });

  const [isMailSend, setMailSet] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const getCode = async () => {
    setLoading(true);
    const response = await getPasswordCode({ email: info.email });
    console.log("response", response);
    if (!response.error) {
      setLoading(true);
      setMailSet(true);
    }
    setLoading(false);
  };

  const reset = async () => {
    setLoading(true);
    const response = await resetPassword(info);

    if (!response.error) {
      setLoading(true);
      setMailSet(true);
      router.push("/login");
    }
    setLoading(false);
  };

  return (
    <div className={style.centered}>
      <div className={style.card}>
        {!isMailSend ? (
          <>
            <p> Please enter the used email address</p>
            <Input
              label="Email"
              name="email"
              onChange={onChange}
              placeholder={"Enter Email"}
              value={info.email}
              error=""
              isInvalid={false}
            />
            <Button onClick={getCode}> Get Code</Button>
          </>
        ) : (
          <>
            <Input
              label="Code"
              name="confirmationCode"
              onChange={onChange}
              placeholder={"Enter Code"}
              value={info.confirmationCode}
              error=""
              isInvalid={false}
            />

            <Input
              label="password"
              name="newPassword"
              onChange={onChange}
              placeholder={"Enter Password"}
              value={info.newPassword}
              error=""
              isInvalid={false}
            />
            <Button onClick={reset}> Reset Password</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
