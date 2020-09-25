import React, { useState } from "react";

function CyclePartItem(props) {
  return (
    // <div>
    //   <label className="checkbox-label">
    //     {props.partName.name}
    //     <input
    //       onChange={props.handleCheckChieldElement}
    //       type="checkbox"
    //       value={props.partName.name}
    //     />
    //     <span className="checkbox-custom"></span>
    //   </label>
    // </div>

    <label className="container">
      {props.partName.name}
      <input
        onChange={props.handleCheckChieldElement}
        type="checkbox"
        value={props.partName.name}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default CyclePartItem;
