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
            webCode={"https://github.com/diegoicid/crud"}
            webSite={"https://crud-jzjz.vercel.app/"}
            description={
              "Simple CRUD component based in MUI, developed in Typescript and backed by Firebase."
            }
          />
          <Portfolioitem
            webCode={
              "https://github.com/diegoicid/Kase-eCommerce"
            }
            webSite={"https://diegoicid.github.io/Kase-eCommerce/"}
            description={"Käse - Ecommerce developed in React using Firebase."}
          />

          <Portfolioitem
            webCode={"https://github.com/diegoicid/aframe-test"}
            webSite={"https://diegoicid.github.io/aframe-test/"}
            description={
              "Insanity - Labyrinth game. Javascript + libraries (aframe, Howler, etc.)."
            }
          />

          <Portfolioitem
            webCode={"https://github.com/diegoicid/OnlineCV2023"}
            webSite={"https://diegoicid.github.io/OnlineCV2023/"}
            description={"Online CV - Bootstrap template developed in React."}
          />
          <Portfolioitem
            webCode={"https://github.com/diegoicid/LaborCalculator"}
            webSite={"https://diegoicid.github.io/LaborCalculator/"}
            description={
              "Severance Calculator - Vanilla Javascript + libraries (Luxon, Toastify, Numeral, Howler, etc.)"
            }
          />
          <Portfolioitem
            webCode={"https://github.com/diegoicid/Forastero-Onepage"}
            webSite={"https://diegoicid.github.io/Forastero-Onepage/"}
            description={
              "Web page - A single page layout based in Bootstrap for a small chocolate factory."
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
