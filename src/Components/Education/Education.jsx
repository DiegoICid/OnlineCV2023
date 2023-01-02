import React from "react";
import Educationitem from "./Educationitem";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>

        <Educationitem
          title={"CoderHouse"}
          subtitle={"ReactJS"}
          description={
            "Web Development Track - ReactJS online course. Top ten student."
          }
        ></Educationitem>

        <Educationitem
          title={"CoderHouse"}
          subtitle={"JavaScript"}
          description={
            "Web Development Track - Javascript online course. Top ten student."
          }
        ></Educationitem>

        <Educationitem
          title={"CoderHouse"}
          subtitle={"Web Development"}
          description={
            "Web Development Track - HTML, CSS, SASS, Frameworks. Top ten student."
          }
        ></Educationitem>

        <Educationitem
          title={"UDEMY"}
          subtitle={"Master in Javascript"}
          description={"Online course by Victor Robles"}
        ></Educationitem>

        <Educationitem
          title={"University of Buenos Aires"}
          subtitle={"Posgraduate studies"}
          description={"Specialization in labor & employment law"}
        ></Educationitem>

        <Educationitem
          title={"University of Buenos Aires"}
          subtitle={"Attorney at law"}
          description={""}
        ></Educationitem>
      </div>
    </section>
  );
};

export default Education;
