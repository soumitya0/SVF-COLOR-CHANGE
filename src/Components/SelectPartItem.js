import React from "react";

function SelectPartItem(props) {
  console.log(props.data);
  return (
    <div>
      <p
        draggable="true"
        onDragStart={props.handleDrop}
        onDragOver={props.dragOver}
      >
        {props.data.name}
      </p>
    </div>
  );
}

export default SelectPartItem;
