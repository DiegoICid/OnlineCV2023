import React from "react";
import "../../styles.css";

const Main = () => {
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Diego Ignacio
            <span className="text-primary"> Cid</span>
          </h1>
          <div className="subheading mb-5">
            <a href="mailto:diegoigcid@gmail.com">diegoigcid@gmail.com</a>
          </div>
          <p className="lead mb-5">
            With a background as an attorney providing services in top level law
            firms and as an inhouse counselor, I discovered a passion for web
            development, computer programming and IT in general. Educated in web
            development, JavaScript, Typescript, ReactJS with NextJS, Python,
            and other languages, libraries and frameworks.{" "}
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://github.com/DiegoI-code"
            >
              <i className="fab fa-github"></i>
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/diego-i-048694268/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
