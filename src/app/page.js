"use client";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [computerPower, setComputerPower] = useState(10000)

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const specialCharRegex = /[!@#$£%^&*()_+\-=`~\[\]{};':"\\|,.<>\/?]/;

  const passwordLength = password.length
  const lowerInPassword = /[a-z]/.test(password)
  const upperInPassword = /[A-Z]/.test(password)
  const numberInPassword = /[0-9]/.test(password)
  const characterInPassword = specialCharRegex.test(password)

 let charValue = 0

  if (lowerInPassword){
    charValue += 26
  }
  if (upperInPassword){
    charValue += 26
  }
  if (numberInPassword){
    charValue += 10
  }
  if (characterInPassword){
    charValue += 33
  }

  const score = charValue**passwordLength


  return (
    <div className="h-screen w-screen flex justify-center items-center text-center bg-gradient-to-br from-[#d852c2] via-[#7940E7] to-[#EE407D]">
      <div className="h-[50vh] w-[50vw]">
        <h1 className="text-4xl font-bold p-4 m-4">Password Crack Time Checker</h1>
        <div>
        <input
          id="password"
          onChange={handleOnChange}
          value={password}
          className="p-4 m-4 w-[25vw] border-2 border-[#EE407D] outline-none rounded-lg font-medium text-2xl"
          placeholder="Enter your password"
        />
        </div>
        <input className="p-1 m-1 w-[25vw] border-2 border-[#EE407D] outline-none rounded-lg font-medium text-2xl" 
        type="number"/>

        <div>Password length is: {passwordLength}</div>
        <div>Password lower is: {lowerInPassword? "Yes":"No"}</div>
        <div>Password upper is: {upperInPassword? "Yes":"No"}</div>
        <div>Password number is: {numberInPassword? "Yes":"No"}</div>
        <div>Password character is: {characterInPassword? "Yes":"No"}</div>
        <div>Password score is: {score}</div>
        
      </div>

    </div>
  );
}
