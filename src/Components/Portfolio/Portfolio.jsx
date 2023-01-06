import React from "react";
import "../../styles.css";
import Portfolioitem from "../Portfolioitem/Portfolioitem";

const Portfolio = () => {
  return (
    <section className="resume-section" id="portfolio">
      <div className="resume-section-content">
        <h2 className="mb-5">Portfolio</h2>
        <div className="subheading mb-3">
          A few of the projects I worked in...
        </div>

        <ul className="fa-ul mb-0">
          <Portfolioitem
            webCode={"https://github.com/DiegoIgnacioCid/crud"}
            webSite={"https://crud-smoky-six.vercel.app/"}
            description={
              "Simple CRUD component based in MUI, developed in Typescript and backed by Firebase."
            }
          ></Portfolioitem>
          <Portfolioitem
            webCode={
              "https://github.com/DiegoIgnacioCid/DiegoIgnacioCid.github.io"
            }
            webSite={"https://diegoignaciocid.github.io/"}
            description={"Käse - Ecommerce developed in React using Firebase."}
          ></Portfolioitem>
          <Portfolioitem
            webCode={"https://github.com/DiegoIgnacioCid/aframe-test"}
            webSite={"https://diegoignaciocid.github.io/aframe-test/"}
            description={
              "Insanity - Labyrinth game. Javascript + libraries (aframe, Howler, etc.)."
            }
          ></Portfolioitem>

          <Portfolioitem
            webCode={"https://github.com/DiegoIgnacioCid/OnlineCV"}
            webSite={"https://diegoignaciocid.github.io/OnlineCV/"}
            description={"Online CV - Bootstrap template developed in React."}
          ></Portfolioitem>
          <Portfolioitem
            webCode={
              "https://github.com/DiegoIgnacioCid/ProyectoFinal-JS-DiegoCid"
            }
            webSite={
              "https://diegoignaciocid.github.io/ProyectoFinal-JS-DiegoCid/"
            }
            description={
              "Severance Calculator - Vanilla Javascript + libraries (Luxon, Toastify, Numeral, Howler, etc.)"
            }
          ></Portfolioitem>
          <Portfolioitem
            webCode={"https://github.com/DiegoIgnacioCid/Forastero-Onepage"}
            webSite={"https://diegoignaciocid.github.io/Forastero-Onepage/"}
            description={
              "Web page - A single page layout based in Bootstrap for a small chocolate factory."
            }
          ></Portfolioitem>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
