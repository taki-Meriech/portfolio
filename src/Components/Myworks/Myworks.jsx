import React from "react";
import "./Myworks.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import  projectimg from '../../assets/Portfolio item.jpg'
import WorkCard from "./WorkCard";

function Myworks() {
  return (
    <div className="Myworkscontainer" id='Myworkscontainer'>
      {" "}
      <div>
        <h2 className="Myworkstitle">-M Y W O R K S</h2>
        <div className="tophere">
          <h1>Featured Portfolios </h1>
          <div className="nextback">
            <button>
              <MdArrowBackIosNew size={25} />
            </button>
            <button>
              <MdArrowForwardIos size={25} />
            </button>
          </div>
        </div>
        <div className="cards_container">
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
        </div>
      </div>
    </div>
  );
}

export default Myworks;
