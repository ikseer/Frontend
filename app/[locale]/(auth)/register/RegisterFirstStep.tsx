"use client";
// main
import * as React from "react";
import { useState, useContext } from "react";
import { Link } from "@/navigation";

// components
import AuthButton from "@/components/Buttons/TealButton/AuthButton";
import DividerText from "@/components/Divider/Divider";
import AuthShape from "@/components/ThridParthAuth/ThridPartyAuth";
import AuthTextField from "@/components/TextField/AuthTextField";
import Radio from "@/components/Radio/Radio";
import { nextRefProvider } from "./page";


// icons & images
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Google from "@/public/images/auth/Google.svg";
import Facebook from "@/public/images/auth/Facebook.svg";
import { FaKey } from "react-icons/fa";

// css
import "../../globals.css";
import "./register.css";

// interface

interface formDataType {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  gender: string;
}

export default function RegisterMainData() {
  const [formData, setFormData] = useState<formDataType>({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    gender: "",
  });

  const contextData = useContext(nextRefProvider);
  if (!contextData) throw new Error("Context is null");
  const { triggerFunction }: any = contextData;

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(triggerFunction);
    if (triggerFunction && triggerFunction.current)
      triggerFunction.current.click();
  };
  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const radioList = ["male", "female", "Prefer not to say"];
  const TextFieldName = [
    ["First name", "first_name"],
    ["Last name", "last_name"],
  ];
  const TextFieldOther = [
    [<MdEmail key="email" />, "Email", "email"],
    [<FaUser key="username" />, "Username", "username"],
    [<FaKey key="password" />, "Password", "password"],
  ];
  const authShape = [
    [Google, "google"],
    [Facebook, "facebook"],
  ];

  return (
    <form
      className=" flex items-center justify-center "
      autoComplete="off"
      onSubmit={handleLoginSubmit}
    >
      <article
        className="register flex items-center justify-center flex-col rounded-lg"
        data-hs-stepper
      >
        <h1 className="pt-5">Welcome to IKSIR</h1>
        <div className="input-field mt-5">
          <div className="grid grid-cols-2 gap-5">
            {TextFieldName.map((textField, indx) => (
              <AuthTextField
                key={indx}
                placeholder={textField[0]}
                onChange={(val: string) => handleInputChange(textField[1], val)}
              />
            ))}
          </div>
          {TextFieldOther.map((textField, indx) => (
            <AuthTextField
              key={indx}
              Icon={textField[0]}
              placeholder={textField[1] as string}
              onChange={(val: string) =>
                handleInputChange(textField[2] as string, val)
              }
            />
          ))}

          <div className="flex gap-x-6">
            {radioList.map((e, indx) => (
              <Radio
                key={indx}
                text={e}
                onChange={(val: string) => handleInputChange("gender", val)}
              />
            ))}
          </div>
        </div>

        {/* <StepperNavigationButtons /> */}
        <AuthButton
          title="Login"
          width="76%"
          height="42px"
          data-hs-stepper-next-btn
        />

        <section className="auth-actions">
          <span>Already have an account, </span>
          <Link href="/login" style={{ color: "#0B9992", fontWeight: "600" }}>
            Login now
          </Link>
          ?
        </section>
        <DividerText text="or" />
        <div className="grid grid-cols-2 w-full px-4 gap-2">
          {authShape.map((shape, indx) => (
            <AuthShape key={indx} authImage={shape[0]} text={shape[1]} />
          ))}
        </div>
      </article>
    </form>
  );
}
