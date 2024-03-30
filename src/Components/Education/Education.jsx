import React from "react";
import "./Education.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Education() {
  return (
    <div className="education_container">
      <div className="content">
        <div className="title">
          <h2 className="sub_title">- career path</h2>
          <h1 className="exp_title">Work Experices</h1>
        </div>
        <div className="inside_edu">
          <div className="left">
            <div className="education_card">
              <h2 className="edu_title">Kingston university</h2>
              <p className="edu_level">
                Master's degree - Software Engineering
              </p>
              <p className="edu_duration">2019 - 2021</p>
            </div>
            <div className="education_card">
              <h2 className="edu_title">Kingston university</h2>
              <p className="edu_level">
                Master's degree - Software Engineering
              </p>
              <p className="edu_duration">2019 - 2021</p>
            </div>
            <div className="education_card">
              <h2 className="edu_title">Kingston university</h2>
              <p className="edu_level">
                Master's degree - Software Engineering
              </p>
              <p className="edu_duration">2019 - 2021</p>
            </div>
          </div>
          <div className="right">
            <p className="desc_edu">
              For 5+ years, I have been continuously learning in the field of
              front-end and experimenting with new technologies and frameworks,
              and here you can see a summary of my skills.
            </p>

            <div className="right_content">
              <label htmlFor="ProgressBar" className="">
                {" "}
                React :
              </label>
              <ProgressBar
                completed={60}
                height="10px"
                labelClassName="label"
              />
            </div>
            <div className="right_content">
              <label htmlFor="ProgressBar" className="">
                {" "}
            css
              </label>
              <ProgressBar
                completed={80}
                height="10px"
                labelClassName="label"
              />
            </div>
            <div className="right_content">
              <label htmlFor="ProgressBar" className="">
                {" "}
                Javascript
              </label>
              <ProgressBar
                completed={50}
                height="10px"
                labelClassName="label"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
