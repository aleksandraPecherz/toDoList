import React from "react";
import Button from "./Button";
const TaskButtons = (props) => {
  if (props.name === "active") {
    return (
      <div className={props.isClicked ? "buttonsActive" : "inactive"}>
        <Button
          name={props.edit ? "icon-floppy" : "icon-cog-outline"}
          taskAction={props.editCurrentTask}
        />
        <Button name="icon-check" id={props.id} taskAction={props.changeTask} />
        <Button
          name="icon-trash-empty"
          id={props.id}
          taskAction={props.deleteTask}
        />
      </div>
    );
  } else {
    return (
      <div className={props.isClicked ? "buttonsActive" : "inactive"}>
        <Button name="icon-back" id={props.id} taskAction={props.returnTask} />
        <Button
          name="icon-trash-empty"
          id={props.id}
          taskAction={props.deleteTask}
        />
      </div>
    );
  }
};

export default TaskButtons;
