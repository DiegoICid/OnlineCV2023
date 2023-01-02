import React from "react";
import "../../styles.css";
import Skillitem from "./Skillitem";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-git"></i>
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <Skillitem
            description={
              "Main stack: Javascript / Typescript / ReactJS / NextJS + usual libraries & frameworks"
            }
          ></Skillitem>
          <Skillitem description={"Agile development & Scrum"}></Skillitem>
          <Skillitem
            description={"Fast learner, results driven, client oriented"}
          ></Skillitem>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
