import React from "react";

const BasicMenu = (props) => (
  <button
    className={props.name}
    onClick={() => props.taskAction(props.id)}
  ></button>
);

export default BasicMenu;
