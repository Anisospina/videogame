import React from "react";
import character01 from "../../images/p01.png";
import character02 from "../../images/p02.png";
import "./styles.css";

const Accordion = () => {
  return (
    <div className="containerAccordion">
      <div className="square">
        <img src={character01} alt="personaje 1" className="image" />
        <div className="information">
          <div className="titleCharacter">Sister</div>

          <div className="conButton">
            <div className="date">
              <div className="divTable">
                <div className="col1">Power:</div>
                <div className="col2">Hit with hands</div>
              </div>
              <div className="divTable">
                <div className="col1">Power:</div>
                <div className="col2">Hit with hands</div>
              </div>
              <div className="divTable">
                <div className="col1">Power:</div>
                <div className="col2">Hit with hands</div>
              </div>
            </div>

            <div className="buttonMore">+</div>
          </div>
        </div>
      </div>
      <div className="square">
        <img src={character02} alt="personaje 1" className="image" />
      </div>
    </div>
  );
};

export default Accordion;
