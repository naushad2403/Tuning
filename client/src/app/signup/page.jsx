"use client";

import React, { useState } from "react";
import { fields } from "./constant";
import Input from "@/components/Input/Input";
import Link from "next/link";
import Button from "@/components/Button/Button";
import style from "../page.module.css";
import Seprator from "@/components/seprator/Seprator";

const SignUp = (props) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

        <Button>Singup</Button>
        <div className={style.info}>
          Already have an account? <Link href={"/login"}> Login</Link>
        </div>
        <Seprator />
        <Button> Continue as Guest</Button>
      </div>
    </div>
  );
};

export default SignUp;
