import React from "react";
import BasicMenu from "./BasicMenu";
import TaskButtons from "./TaskButtons";
const InactiveTask = (props) => (
  <div
    className={props.isClicked ? "isClicked" : "taskDone"}
    onDoubleClick={props.doubleClick}
  >
    <div className={props.isClicked ? "contentDoneBig" : "contentDoneSmall"}>
      <strong>{props.content} </strong>
    </div>
    <div className={props.isClicked ? "endDateDone" : "inactive"}>
      <em>
        End date:
        {new Date(props.finishDate).toLocaleString()}
      </em>
    </div>
    <TaskButtons
      name="inactive"
      isClicked={props.isClicked}
      returnTask={props.returnTask}
      deleteTask={props.deleteTask}
      id={props.id}
    />
    <BasicMenu click={props.click} priority={props.priority} />
  </div>
);

export default InactiveTask;
