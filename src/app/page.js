"use client";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [computerPower, setComputerPower] = useState(1000_00);

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePowerChange = (e) => {
    setComputerPower(e.target.value);
  };

  const specialCharRegex = /[!@#$£%^&*()_+\-=`~\[\]{};':"\\|,.<>\/?]/;

  const passwordLength = password.length;
  const minimumLength = passwordLength >= 8;
  const lowerInPassword = /[a-z]/.test(password);
  const upperInPassword = /[A-Z]/.test(password);
  const numberInPassword = /[0-9]/.test(password);
  const characterInPassword = specialCharRegex.test(password);

  let charValue = 0;

  if (lowerInPassword) {
    charValue += 26;
  }
  if (upperInPassword) {
    charValue += 26;
  }
  if (numberInPassword) {
    charValue += 10;
  }
  if (characterInPassword) {
    charValue += 33;
  }

  const score = charValue ** passwordLength / computerPower;

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center text-center bg-gradient-to-br from-[#d852c2] via-[#7940E7] to-[#EE407D]">
      <div className="w-[50vw] max-w-5xl py-24">
        <h1 className="text-6xl font-bold p-4 m-4">
          Password Crack Time Checker
        </h1>
        <div className="flex  flex-col justify-center items-center">
          <div className="flex flex-col items-baseline">
            <label className="font-bold py-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              onChange={handleOnChange}
              value={password}
              className="p-3 m-2 w-[25vw] border-2 border-[#EE407D] outline-none rounded-lg font-medium text-2xl"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-baseline">
            <label className="font-bold py-1" htmlFor="computerPower">
              Computational Power
            </label>
            <input
              id="computerPower"
              onChange={handlePowerChange}
              value={computerPower}
              className="p-1 m-1 w-[25vw] border-2 border-[#EE407D] outline-none rounded-lg font-medium text-2xl "
              type="number"
            />
          </div>
        </div>

        <div
          id="passStrength"
          className="h-[35vh] m-4 border-2 border-[#EE407D] rounded-lg"
        >
          <h2 className="text-2xl font-bold">Password Analysis</h2>

          <div className="h-full flex justify-center items-center ">
            <div className="text-2xl font-med">
              {!password && "Please Enter your password for analysis"}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div>Password length is: {passwordLength}</div>
          <div>Password lower is: {lowerInPassword ? "Yes" : "No"}</div>
          <div>Password upper is: {upperInPassword ? "Yes" : "No"}</div>
          <div>Password number is: {numberInPassword ? "Yes" : "No"}</div>
          <div>Password character is: {characterInPassword ? "Yes" : "No"}</div>
          <div>Password score is: {minimumLength ? "Ok" : "Small"}</div>
        </div>
      </div>
    </div>
  );
}
