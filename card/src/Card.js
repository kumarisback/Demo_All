import React from "react";
import file from "./file.png";
const Card = () => {
  return (
    <div className="container">
      {/* <div> */}
      <div className="inner">
      <div className="line1">
        <div>PS3&SVBIA</div>
        <div>
          <img className="icon" src={file} />
        </div>
      </div>
      <div className="line2">
        <div className="char">Charater Length</div>
        <div>4</div>
      </div>
      <div className="progressbar-line3">
        <div className="progress-bar"></div>
        <div className="progress-slider"></div>
      </div>
      {/* </div> */}

      <div className="c">
        <input type="checkbox" /> Include Uppercase Letters
        <br />
        <input type="checkbox" /> Include Lowercase Letters
        <br />
        <input type="checkbox" /> Include Numbers
        <br />
        <input type="checkbox" /> Include Symbols
        <br />
      </div>

      <div className="strenthline6">
        <div className="strength">STRENGTH</div>
        <div className="str">
          <div className="text">Poor</div>
          <div className="bar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>
      </div>

      <button type="buttonline7">GENERATE</button>
      </div>
    </div>
  );
};

export default Card;
