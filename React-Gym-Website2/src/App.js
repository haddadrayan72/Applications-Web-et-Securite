import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import JoinUs from "./components/JoinUs/JoinUs";
import Features from "./components/Features/Features";
import Trainers from "./components/Trainers/Trainers";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Main />
      <JoinUs />
      <Features />
      <Trainers />
      <Footer />
    </div>
  );
};

export default App;
