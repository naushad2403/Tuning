"use client";
import React, { useState } from "react";
import styles from "./forgetpassword.module.css"; // Import your CSS module
import InputWithButton from "@/components/Input/InputwithButton";
import Input from "@/components/Input/Input";
import { getPasswordCode } from "@/services/auth";

const ForgotPassword = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    code: "",
  });

  const [isLoading, setLoading] = useState(false);

  const [isMailSend, setMailSet] = useState(false);

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const getCode = async () => {
    setLoading(true);
    const response = await getPasswordCode();
    console.log("response", response);
    if (!response.err) {
      setLoading(true);
      setMailSet(true);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {!isMailSend ? (
          <InputWithButton
            label="Email"
            name="email"
            onChange={onChange}
            placeholder={"Enter Email"}
            input={info.email}
            error=""
            isInvalid={false}
            onClick={getCode}
          >
            Get Code
          </InputWithButton>
        ) : (
          <>
            <Input
              label="Code"
              name="code"
              onChange={onChange}
              placeholder={"Enter Code"}
              input={info.code}
              error=""
              isInvalid={false}
            />

            <Input
              label="password"
              name="password"
              onChange={onChange}
              placeholder={"Enter Password"}
              input={info.code}
              error=""
              isInvalid={false}
            />
            <button onClick={() => {}}>Reset Password</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
