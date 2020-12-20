import React from "react";
import BasicMenu from "./BasicMenu";
import TaskButtons from "./TaskButtons";
const editStyle = {
  display: "none",
};
const ActiveTask = (props) => (
  <div className={props.effect}>
    <div
      className={
        props.isClicked
          ? props.edit
            ? "contentActiveBigEdit"
            : "contentActiveBig"
          : "contentActiveSmall"
      }
    >
      <strong style={props.edit ? editStyle : null}>
        {props.content.length > 45 && !props.click
          ? props.content.slice(0, 45) + "..."
          : props.content}
      </strong>
      <textarea
        value={props.content}
        onChange={props.handleContent}
        style={props.edit ? null : editStyle}
      />
    </div>
    <div className={props.isClicked ? "datesActive" : "inactive"}>
      <em style={props.edit ? editStyle : null}>{props.beginDate}</em>
      <input
        type="date"
        value={props.beginDate}
        onChange={props.handleBeginDate}
        style={props.edit ? null : editStyle}
      />
      {" ÷ "}
      <em type="date" style={props.edit ? editStyle : null}>
        {props.endDate}
      </em>
      <input
        type="date"
        value={props.endDate}
        onChange={props.handleEndDate}
        style={props.edit ? null : editStyle}
      />
    </div>
    <TaskButtons
      name="active"
      isClicked={props.isClicked}
      editCurrentTask={props.editCurrentTask}
      changeTask={props.changeTask}
      deleteTask={props.deleteTask}
      id={props.id}
    />
    <BasicMenu click={props.click} priority={props.priority} />
  </div>
);

export default ActiveTask;
