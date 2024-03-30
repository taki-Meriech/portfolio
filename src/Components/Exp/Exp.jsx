import React from "react";
import "./Exp.css";

function Exp() {
  return (
    <div className="exp_container" id='exp_container'>
      <div className="left">
        <div className="title">
          <h2 className="sub_title">- career path</h2>
          <h1 className="exp_title">Work Experices</h1>
        </div>
        <ul>
          <li>Apple</li>
          <li>Microsoft</li>
          <li>FaceBook</li>
          <li>Slack</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title_exp">Front-end Developer Apple .Inc</h3>
        <p className="title_sub">Front-end Developer Apple .Inc</p>
        <p className="duration">Nov 2020 - Present · Full-time</p>
        <div className="langauge">
          <p>React </p>
        </div>
        <p className="desc">
          Improving overall website performance for mobile users. Collaborate
          with back-end developers and web designers to improve usability Add
          voice search feature for mobile app. Developing an admin panel to
          manage contents, users, products and ...
        </p>
      </div>
    </div>
  );
}

export default Exp;
