import React from "react";
import Button from "./button";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4 ">
          <p>САМОЕ ВРЕМЯ ОТПРАВИТЬСЯ В ЗАЛ</p>
          <h1 className="uppercase font-semibold text4xl sm:text-5xl md:6xl lg:7xl">
            <span className="text-blue-400">БРО</span>ЙСКИ
          </h1>
        </div>
        <p className="text-sm md:text-base font-light">
          Я подтверждаю, что готов стать{" "}
          <span className="font-medium text-blue-400">
            чудовищной горой мышц{" "}
          </span>
          и огромной{" "}
          <span className="font-medium text-blue-400">
            перекаченной махиной{" "}
          </span>
          , неспособной протиснуться в дверь.
        </p>
        <Button
          func={() => {
            window.location.href = "#generate";
          }}
          text={"Принять и начать!"}
        />
      </div>
    </>
  );
}
