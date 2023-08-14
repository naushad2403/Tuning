"use client";
import React, { useState } from "react";

import InputWithButton from "@/components/Input/InputwithButton";
import Input from "@/components/Input/Input";
import { getPasswordCode, resetPassword } from "@/services/auth";

import style from "../page.module.css";
import Button from "@/components/Button/Button";

import { useRouter } from "next/navigation";
import { performValidations, validateEmail } from "@/helper/validator";
import { fields } from "./constant";

const ForgotPassword = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    email: "",
    newPassword: "",
    confirmationCode: "",
  });

  const [isMailSend, setMailSet] = useState(true);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmationCode: "",
  });

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const getCode = async () => {
    setLoading(true);

    if (!validateEmail(info.email)) {
      setErrors((prev) => ({ ...prev, email: "Please Enter a valid Email" }));
    }

    const response = await getPasswordCode({ email: info.email });
    console.log("response", response);
    if (!response.error) {
      setLoading(true);
      setMailSet(true);
    }
    setLoading(false);
  };

  const reset = async () => {
    const error = performValidations(fields, info);

    if (Object.keys(error).length != 0) {
      setErrors(error);
      return;
    }
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
            <p> Please enter the associate email address</p>
            <Input
              label="Email"
              name="email"
              onChange={onChange}
              placeholder={"Enter Email"}
              value={info.email}
              error={errors.email}
              isInvalid={errors?.email?.length != 0}
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
              error={errors?.confirmationCode}
              isInvalid={errors.confirmationCode?.length != 0}
            />

            <Input
              label="password"
              name="newPassword"
              onChange={onChange}
              placeholder={"Enter Password"}
              value={info.newPassword}
              error={errors.newPassword}
              isInvalid={errors?.newPassword?.length != 0}
            />
            <Button onClick={reset}> Reset Password</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
