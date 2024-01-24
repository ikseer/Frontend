"use client";
// main
import * as React from "react";
import { useState, useContext } from "react";
import { Link } from "@/navigation";

// components
import AuthButton from "@/components/Buttons/TealButton/authButton"
import DividerText from "@/components/Divider/divider";
import AuthShape from "@/components/ThridParthAuth/thridPartyAuth";
import AuthTextField from "@/components/TextField/authTextField";
import Radio from "@/components/Radio/Radio"
import StepperNavigationButtons from "@/components/Stepper/stepperNavigationButtons"
import {nextRefProvider} from './page'

// icons & images
import { MdEmail } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Google from "@/public/images/auth/Google.svg";
import Facebook from "@/public/images/auth/Facebook.svg";
// css
import "../../globals.css";
import "./register.css";

export default function RegisterMainData() {
  interface formDataType {
    username: string,
    email: string,
    first_name:string,
    last_name:string,
    password: string,
    gender:string
  }
  const [formData, setFormData] = useState<formDataType>({
    username: "",
    email: "",
    first_name:"",
    last_name:"",
    password: "",
    gender: "",
  });

  const {triggerFunction, setTriggerFunction} = useContext(nextRefProvider)


  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    console.log(triggerFunction)
  
    triggerFunction.current.click()
  };
  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const radioList = ["male", "female", "Prefer not to say"]
  const TextFieldName = [["first name", "first_name"], ["last name", "last_name"]]
  const TextFieldOther = [[<MdEmail />, "Email", "email"], [<FaUser />, "user name", "username"], [<MdOutlineRemoveRedEye />, "password", "password"]]
  const authShape = [[Google, "google"], [Facebook, "facebook"]]

  return (
    <form
      className=" flex items-center justify-center "
      autoComplete="off"
      onSubmit={handleLoginSubmit}
      
    >
      <article className="register flex items-center justify-center flex-col rounded-lg" data-hs-stepper>
        <h1 className="pt-5">Welcome to IKSIR</h1>
        <div className="input-field mt-5">
          <div className="grid grid-cols-2 gap-5">
              {TextFieldName.map(textField => (
                <AuthTextField
                  labels={textField[0]}
                  onChange={(val: string) => handleInputChange(textField[1], val)}
                  isRequired={true}
                />
              ))}
          </div>
          {TextFieldOther.map(textField => (
              <AuthTextField
                Icon={textField[0]}
                labels={textField[1]}
                onChange={(val: string) => handleInputChange(textField[2], val)}
                isRequired={true}
              />
          ))}
       
          <div className="flex gap-x-6">
            {radioList.map((e, indx)=> (
                <Radio key={indx} text={e} onChange={(val: string) => handleInputChange("gender", val)}/>
            ))}
          </div>

        </div>

        {/* <StepperNavigationButtons /> */}
        <AuthButton title="Login" width="76%" height="42px"  data-hs-stepper-next-btn/>


        <section className="auth-actions">
            <span>Already have an account, </span>
            <Link href="/login" style={{ color: "#0B9992", fontWeight: "600" }}>
              Login now
            </Link>?
        </section>
        <DividerText text="or" />
        <div className="grid grid-cols-2 w-full px-4 gap-2">
          {authShape.map(shape => (
              <AuthShape authImage={shape[0]} text={shape[1]}  />
          ))}
        </div>
      </article>
    </form>
  );
}
