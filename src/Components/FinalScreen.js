import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconComponents from "./IconComponents";
import SVGIMGCOMP from "./SVGIMGCOMP";

function FinalScreen() {
  var myJSON = JSON.parse(localStorage.getItem("COLOR_DATA"));
  console.log(myJSON, "COLOR_DATA");

  var myData = [];
  myJSON.forEach((element) => {
    if (element.color != "") {
      myData.push(element);
    }
  });

  console.log(myData);

  return (
    <div className="finalMain">
      <h1>Final Screen result</h1>
      <div className="finalImg">
        <SVGIMGCOMP colorData={myJSON} />
      </div>
      <Link
        className="FinaleBtn"
        to={{
          pathname: "/",
        }}
      >
        HOME
      </Link>
    </div>
  );
}

export default FinalScreen;
