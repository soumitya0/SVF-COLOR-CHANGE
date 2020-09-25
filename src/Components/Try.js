import React from "react";

function Try() {
  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  const drag = (ev) => {
    ev.dataTransfer.setData("Text", ev.target.id);
  };

  const drop = (ev) => {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  };

  return (
    <div>
      <div id="div1" onDrop={drop} onDragOver={allowDrop}></div>
      <br />
      <p id="drag1" draggable="true" onDragStart={drag}>
        This is a draggable paragraph. Drag this element into the rectangle.
      </p>
    </div>
  );
}

export default Try;
