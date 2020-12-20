import React, { Component } from "react";
import ActiveTask from "./ActiveTask";
import "./NewTask.css";
import InactiveTask from "./InactiveTask";
class NewTask extends Component {
  state = {
    isSaved: false,
    isClicked: false,
    isDeadline: false,
    content: this.props.task.content,
    beginDate: this.props.task.beginDate,
    endDate: this.props.task.endDate,
    id: this.props.task.id,
    color: "",
  };
  getEffect = () => {
    if (this.state.isClicked) return String("isClicked");
    else {
      return this.props.task.endDate <= new Date().toISOString().slice(0, 10)
        ? String("taskDone important")
        : String("taskDone");
    }
  };

  handleEndDate = (event) => this.setState({ endDate: event.target.value });
  handleBeginDate = (event) => this.setState({ beginDate: event.target.value });
  handleContent = (event) => this.setState({ content: event.target.value });
  EditCurrentTask = () => {
    this.props.editTask(this.props.task.id);
    this.setState({ isSave: !this.state.isSave });
    if (this.state.isSave) {
      const { content, beginDate, endDate, id } = this.state;
      if (content.length < 2) alert("Too short task content");
      else if (beginDate > endDate) alert("Wrong dates!");
      else {
        this.props.editExistingTask(content, beginDate, endDate, id);
      }
    }
  };
  checkDeadline = () => {
    if (this.props.task.endDate <= new Date().toISOString().slice(0, 10)) {
      setInterval(() => {
        this.setState({ isDeadline: !this.state.isDeadline });
      }, 1000);
    }
  };

  render() {
    const { isClicked } = this.state;
    const { deleteTask, changeTask, returnTask } = this.props;
    const { priority, finishDate, edit, active } = this.props.task;
    const { content, beginDate, endDate, id } = this.state;
    if (active) {
      return (
        <ActiveTask
          content={content}
          id={id}
          isClicked={isClicked}
          edit={edit}
          handleContent={this.handleContent}
          beginDate={beginDate}
          endDate={endDate}
          effect={this.getEffect()}
          handleEndDate={this.handleEndDate}
          handleBeginDate={this.handleBeginDate}
          editCurrentTask={this.EditCurrentTask}
          deleteTask={deleteTask}
          changeTask={changeTask}
          priority={priority}
          click={() => this.setState({ isClicked: !isClicked })}
        />
      );
    } else {
      return (
        <InactiveTask
          id={id}
          doubleClick={() => this.setState({ isClicked: !isClicked })}
          isClicked={isClicked}
          content={content}
          finishDate={finishDate}
          deleteTask={deleteTask}
          changeTask={changeTask}
          priority={priority}
          click={() => this.setState({ isClicked: !isClicked })}
          returnTask={returnTask}
        />
      );
    }
  }
}
export default NewTask;
