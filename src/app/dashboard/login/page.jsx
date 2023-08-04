"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"

const Login = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password})
    

  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <Link href="/dashboard/login">Login with an existing account!</Link>
    </div>
  );
};

export default Login;
