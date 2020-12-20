import React from "react";

const highImportantStyle = {
  color: "red",
};
const lowImportantStyle = {
  color: "green",
};

const BasicMenu = (props) => (
  <div className="basicMenu">
    <button
      className={props.click ? "icon-resize-small" : "icon-resize-full"}
      onClick={props.click}
    ></button>
    <strong
      className="currentPriority"
      style={
        props.priority === "high"
          ? highImportantStyle
          : props.priority === "low"
          ? lowImportantStyle
          : null
      }
    >
      {props.priority}
    </strong>
  </div>
);

export default BasicMenu;
