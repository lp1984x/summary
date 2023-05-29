import React, { useState } from "react";
import "./main.scss";
import Header from "../Header/Header";
import About from "../About/About";
import { ru } from "../data/ru";
import { en } from "../data/en";

export default function Main() {
  const [laguage, setLanguage] = useState("RU");

  return (
    <main className="main">
      <Header setLang={setLanguage} />
      <About props={laguage === "RU" ? ru : en} state={laguage} />
    </main>
  );
}
