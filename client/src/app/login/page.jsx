"use client";

import React, { useState } from "react";
import { fields } from "./constant";
import Input from "@/components/Input/Input";
import Link from "next/link";
import Button from "@/components/Button/Button";
import style from "../page.module.css";
import Seprator from "@/components/seprator/Seprator";

const Login = (props) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (name, value) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
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
        <span className={style.forgetPassword}> Forget password</span>
        <Button>Login</Button>
        <div className={style.info}>
          Don't have an account? <Link href={"/signup"}> Sign Up</Link>
        </div>
        <Seprator />
        <Button> Continue as Guest</Button>
      </div>
    </div>
  );
};

export default Login;
