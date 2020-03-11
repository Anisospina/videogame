import React from "react";
import Accordion from "../../components/Accordion/index";
import "./index.css";

const Home = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="left">
          <div className="title">VideoGame S4N</div>
          <div className="contentLeft">
            <h4>Personajes</h4>
            <Accordion />
          </div>
        </div>
        <div className="right">
          <div className="Content">Here making magic!</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
