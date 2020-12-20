import React from "react";
import NewTask from "./NewTask/NewTask";
import "./TaskList.css";
const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => a.finishDate - b.finishDate);
  active.sort((a, b) => {
    if (a.content < b.content) return -1;
    if (a.content > b.content) return 1;
    return 0;
  });

  const activeTasks = active.map((task) => (
    <NewTask
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      changeTask={props.changeTask}
      editTask={props.editTask}
      editExistingTask={props.editExistingTask}
    />
  ));
  const doneTasks = done.map((task) => (
    <NewTask
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      returnTask={props.returnTask}
      changeTask={props.changeTask}
      editTask={props.editTask}
    />
  ));

  return (
    <>
      <div className="activeHeader">
        <h1>Things to do:</h1>
      </div>
      <div className="activeTasks">
        {active.length > 0 ? activeTasks : "Nothing to do!"}
      </div>
      <div className="doneHeader">
        <h1>
          Things done: <em>({doneTasks.length})</em>
        </h1>
      </div>
      <div className="doneTasks">{doneTasks}</div>
    </>
  );
};

export default TaskList;
