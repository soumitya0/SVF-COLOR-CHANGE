import React, { useState } from "react";

import SVG_IMG from "./IconComponents";

import { Link } from "react-router-dom";

const rememberColor = [
  { nameItem: "Handle", color: "" },
  { nameItem: "Tier", color: "" },
  { nameItem: "Body", color: "" },
  { nameItem: "Chain Ring", color: "" },
  { nameItem: "Seat", color: "" },
];

function FourthScreen(props) {
  console.log(props, "PROPS PROPS PROPS");

  const [colorPicker, setColorPicker] = useState("");

  const getData = props.location.data;

  console.log(getData, "DTATA TATATATATATATA A A");

  const handleColor = (e) => {
    setColorPicker(e.target.value);
  };

  var myJSON = JSON.parse(localStorage.getItem("DATA_RECIVER"));
  console.log(myJSON, "DATA_RECIVER");

  const myData = myJSON.map((value) => {
    console.log(value.name, "hahhahahaha");

    console.log(getData, "HAHHAHAAH");
    if (value.name === getData) {
      value.isChecked = "false";
    } else {
      console.log("NO");
    }
  });

  let colorData = rememberColor;
  colorData.forEach((item) => {
    if (item.nameItem === getData) {
      item.color = colorPicker;
    }
  });

  console.log("REMEMBER-COLOR", rememberColor);

  localStorage.setItem("COLOR_DATA", JSON.stringify(rememberColor));

  console.log("REMEMBER-COLOR", colorData);

  return (
    <div className="FourthScreen">
      <h1 className="FourthTitle">FourthScreen color</h1>

      <div className="bicycleDimension">
        <SVG_IMG change={getData} colorApply={colorPicker} />
      </div>

      <div>
        <input
          type="color"
          className="coloPicker"
          value="#e66465"
          onChange={handleColor}
        />
        <h3>PICK ME ☝️</h3>
      </div>

      <Link
        id="ForthScreenMainBtn"
        to={{
          pathname: "/ThirdScreen",
          data: myJSON,
        }}
      >
        <p>Next</p>
      </Link>
    </div>
  );
}

export default FourthScreen;
