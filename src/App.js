import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Card from "./Card";
import Button from "./Button";

function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log("Promise", response);
        let welcome = document.getElementById("welcome-message");
        welcome.innerText = "";
        console.log(welcome);
        setAdvice(response.data.slip.advice);
        // showAdvice(response);
        // const advice = response.data.slip.advice;
        // console.log(advice);
        // return advice;
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="body-container">
      <header className="title">
        <h1>Advice Generator</h1>
      </header>
      <Card advice={advice} />
      <Button getAdvice={getAdvice} />
    </div>
  );
}

export default App;
