// This is the homepage of the online store.
// This page lets the user enter their name and logs them in
//User cannot enter with out submitting their name

import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Home() {
  const [logButton, setLogButton] = useState("Login");
  const [userName, setUserName] = useState("");
  const [inputType, setInputType] = useState("text");
  const [h1Hidden, seth1Hidden] = useState(``);
  const [intro, setIntro] = useState("Hello! Enter your name to login...");

  return (
    <div id="Home">
      {/* This h1 heading is initially hidden */}
      <h1>{h1Hidden}</h1>
      {/* Intro greets the user and asks them to enter their name */}
      <h4>{intro}</h4>

      <input
        id="HomeInput"
        type={inputType}
        value={userName}
        placeholder="Enter your name here"
        onChange={(e) => {
          setUserName(e.target.value);
        }}></input>
      {/* Once user clicks the button, it changes from Login to Logout 
      and Welcome to user is displayed */}
      <Button
        value={logButton}
        onClick={(e) => {
          // Checking if user entered a username
          if (userName === "") {
            setIntro(`Please enter your name below.`);
          } else {
            if (e.target.value === "Login") {
              setInputType("hidden");
              setLogButton("Logout");
              seth1Hidden(`Welcome ${userName}!`);
              setIntro("");
            } else {
              setIntro("Hello! Enter your name to login...");
              seth1Hidden(``);
              setInputType("text");
              setLogButton("Login");
              setUserName("");
            }
          }
        }}>
        {logButton}
      </Button>
    </div>
  );
}

export default Home;
