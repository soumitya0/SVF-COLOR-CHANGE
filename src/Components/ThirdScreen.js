import React, { useState } from "react";
import SelectPartItem from "./SelectPartItem";
import Try from "./Try";

import { Link } from "react-router-dom";

function ThirdScreen(props) {
  console.log(props);
  console.log(props.location.data, "Data BY");

  const sentData = props.location.data;
  localStorage.setItem("DATA_RECIVER", JSON.stringify(sentData));

  var [isEmpty, setEmpty] = useState("false");

  var dataFalse = 0;

  sentData.forEach((element) => {
    if (element.isChecked == "false") {
      dataFalse = dataFalse + 1;
    }
  });
  console.log(dataFalse, "DATATATATATATA");

  const allowDrop = (ev) => {
    ev.preventDefault();
    dataFalse = dataFalse + 1;
  };
  const drag = (ev) => {
    ev.dataTransfer.setData("Text", ev.target.id);
    console.log(ev.dataTransfer);
  };

  const [dropData, setDropData] = useState("");

  const drop = (ev) => {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    console.log("data", data);

    setDropData(...dropData, data);
    ev.preventDefault();

    document.getElementById("ThidScreenMainBtn").style.visibility = "visible";
    document.getElementById("ThidScreenMainToDragItems").style.visibility =
      "hidden";

    document.getElementById("DragDropName").style.visibility = "hidden";
  };
  console.log(dropData);

  return (
    <>
      {dataFalse === 5 ? (
        <div className="finalBtnView">
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to={{
              pathname: "/FinalScreen",
              data: "happy work",
            }}
          >
            <h2>Final Result Result</h2>
          </Link>
        </div>
      ) : (
        <div className="ThidScreenMain">
          <div className="ThidScreenMainTitle"> Drag&Drop List Item </div>

          <div
            id="div2"
            className="DragDropDisplay"
            onDrop={drop}
            onDragOver={allowDrop}
          >
            <p id="DragDropName">Drag and Drop List Item 👉 </p>
          </div>

          <Link
            id="ThidScreenMainBtn"
            to={{
              pathname: "/FourthScreen",
              data: dropData,
            }}
          >
            <p>Move Next</p>
          </Link>

          <div id="ThidScreenMainToDragItems">
            {sentData
              ? sentData.map((value, index) => {
                  return value.isChecked === true ? (
                    <div className="itemListDataThird">
                      <p
                        className="itemListDataThirdName"
                        id={value.name}
                        draggable="true"
                        onDragStart={drag}
                      >
                        {value.name}
                      </p>
                    </div>
                  ) : null;
                })
              : null}
          </div>
        </div>
      )}
      )
    </>
  );
}

export default ThirdScreen;
