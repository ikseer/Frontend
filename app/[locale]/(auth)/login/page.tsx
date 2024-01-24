"use client";
import "../../globals.css";
import "./login.css";
import * as React from "react";

// icons
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import AuthButton from "../../../../components/Buttons/TealButton/AuthButton";
import { Link } from "../../../../navigation";
import DividerText from "../../../../components/Divider/Divider";
import Google from "../../../../public/images/auth/Google.svg";
import Facebook from "../../../../public/images/auth/Facebook.svg";
import AuthShape from "../../../../components/ThridParthAuth/ThridPartyAuth";
import AuthTextField from "../../../../components/TextField/AuthTextField";
import { useState } from "react";

export default function Login() {
  interface formDataType {
    username: string;
    password: string;
  }
  const [formData, setFormData] = useState<formDataType>({
    username: "",
    password: "",
  });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };
  return (
    <form
      className="pt-2 login-parent flex items-center justify-center"
      autoComplete="off"
      onSubmit={handleLoginSubmit}
    >
      <article className="login flex items-center justify-center flex-col rounded-lg">
        <h1 className="mt-4">Welcome to IKSIR</h1>
        <div className="input-field mt-5">
          <AuthTextField
            Icon={<MdEmail />}
            placeholder="Email or Username"
            onChange={(val: string) => handleInputChange("username", val)}
          />
          <AuthTextField
            Icon={<FaKey />}
            placeholder="password"
            onChange={(val: string) => handleInputChange("password", val)}
          />
        </div>
        <AuthButton title="Login" width="76%" height="42px" />

        <div className="auth-actions">
          <Link href="/register">Forgot your password?</Link>
          <section>
            <span>Don’t have an account, </span>
            <Link
              href="/register"
              style={{ color: "#0B9992", fontWeight: "600" }}
            >
              Register now
            </Link>
            ?
          </section>
        </div>
        <DividerText text="or" />
        <AuthShape authImage={Google} text="google" width="76%" />
        <AuthShape authImage={Facebook} text="facebook" width="76%" />
      </article>
    </form>
  );
}
