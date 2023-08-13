"use client";

import React, { useState } from "react";
import { fields } from "./constant";
import Input from "@/components/Input/Input";
import Link from "next/link";
import Button from "@/components/Button/Button";
import style from "../page.module.css";
import Seprator from "@/components/seprator/Seprator";
import { login } from "@/services/auth";

const Login = (props) => {
  const [info, setInfo] = useState({
    email: "b7mehak@gmail.com",
    password: "NotToday@123",
  });

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onClick = () => {
    console.log("entering as a guest");
  };

  const handleLogin = async () => {
    console.log("info", info);
    const respoinse = await login(info);
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
        <span className={style.forgetPassword}>
          {" "}
          <Link href={"/forgetpassword"}>Forget password</Link>
        </span>
        <Button onClick={handleLogin}>Login</Button>
        <div className={style.info}>
          Don't have an account? <Link href={"/signup"}> Sign Up</Link>
        </div>
        <Seprator />
        <Button onClick={onClick}> Continue as Guest</Button>
      </div>
    </div>
  );
};

export default Login;
