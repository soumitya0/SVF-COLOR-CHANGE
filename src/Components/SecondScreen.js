import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import CyclePartItem from "./CyclePartItem";
import SVGcycle from "./IconComponents";
import ThirdScreen from "./ThirdScreen";

const SecondScreen = () => {
  const [items, setItem] = useState([
    { name: "Handle", isChecked: "false" },
    { name: "Tier", isChecked: "false" },
    { name: "Body", isChecked: "false" },
    { name: "Chain Ring", isChecked: "false" },
    { name: "Seat", isChecked: "false" },
  ]);

  const handleCheckChieldElement = (e) => {
    // console.log(e.target);
    // console.log(e.target.checked);
    let itemValue = items;
    // console.log(itemValue, "itemValue");
    // console.log(e.target.value, "VALUE");
    itemValue.forEach((item) => {
      if (item.name === e.target.value) {
        item.isChecked = e.target.checked;
      }
    });

    setItem(itemValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("i am click");
    console.log(items, "NEW ITEM");
  };

  // console.log(passData);
  console.log(items, "second");

  return (
    <form onSubmit={submitHandler}>
      <div className="SecondScreenMain">
        <div className="SecondScreenTitle"> Select Cycle Parts </div>

        <div className="ImgScreen">
          <SVGcycle />
        </div>

        <div className="SecondScreenListItemDiv">
          {items.map((itmeParts) => {
            return (
              <CyclePartItem
                partName={itmeParts}
                handleCheckChieldElement={handleCheckChieldElement}
              />
            );
          })}
        </div>

        <Link
          className="secondScreenBtn"
          to={{
            pathname: "/ThirdScreen",
            data: items,
          }}
        >
          <p className="textBtnHome">Let's Go to Next</p>
          {items.length === 0 ? alert("select item") : null}
        </Link>
      </div>
    </form>
  );
};

export default SecondScreen;
