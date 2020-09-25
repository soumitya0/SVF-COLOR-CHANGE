import React from "react";
import SVGcycle from "./IconComponents";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="main">
        <div className="bicycleDimension">
          <SVGcycle />
        </div>
        <Link to="/SecondScreen" className="btn">
          <p className="textBtnHome">Let's Go Start</p>
        </Link>
      </div>
    </div>
  );
}
export default Home;
