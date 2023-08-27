"use client";
import style from "../page.module.css";

import React, { useState } from "react";
import Login from "./login";
const LoginWrapper = () => {
  return (
    <div className={style.centered}>
      <Login />
    </div>
  );
};

export default LoginWrapper;
