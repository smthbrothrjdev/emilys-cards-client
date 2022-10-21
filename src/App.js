import "./App.css";
import FlashcardList from "./components/FlashcardList.js";
import React, { useState, useEffect } from "react";
import LandingModal from "./components/LandingModal.js";

function App() {
  const url = "http://localhost:8080";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url + "/flashcards")
      .then((res) => {
        return res.json();
      })
      .then((dat) => {
        setData(dat);
        console.log(dat);
      });
  }, []);

  return (
    <div className="App">
      <LandingModal />
    </div>
  );
}

export default App;
