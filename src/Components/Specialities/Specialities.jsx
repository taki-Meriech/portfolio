import React from "react";
import "./specialities.css";
import Card from "./Card";

function Specialities() {
  return (
    <div className="specializecontainer">
      <h2 className="services"> - S E R V I C E S</h2>
      <h1 className="specializein"> Specilized in</h1>
      <div className="card_container">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Specialities;
