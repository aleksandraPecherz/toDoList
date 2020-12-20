import React from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation.jsx";
import TaskList from "./TaskList.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.editExistingTask = this.editExistingTask.bind(this);
  }
  taskCounter = 3;
  state = {
    tasks: [
      {
        id: 0,
        content: "create Your own To do list",
        beginDate: "2020-01-01",
        endDate: "2020-12-31",
        priority: "high",
        active: true,
        edit: false,
        deadline: false,
        finishDate: null,
      },
    ],
  };
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(taskIndex, 1);
    this.setState({ tasks });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex].active = false;
    tasks[taskIndex].finishDate = new Date().getTime();
    this.setState({ tasks });
  };
  editTask = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);

    tasks[taskIndex].edit = !tasks[taskIndex].edit;
    this.setState({ tasks });
  };
  returnTask = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    console.log(id);

    tasks[taskIndex].active = !tasks[taskIndex].active;
    this.setState({ tasks });
  };
  addTask = (content, priority, beginDate, endDate) => {
    const newTask = {
      id: this.taskCounter,
      content,
      beginDate,
      endDate,
      priority,
      active: true,
      edit: false,
      finishDate: null,
    };
    this.taskCounter++;
    this.setState((previosStep) => ({
      tasks: [...previosStep.tasks, newTask],
    }));
    return true;
  };

  editExistingTask = (content, beginDate, endDate, id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex].content = content;
    tasks[taskIndex].beginDate = beginDate;
    tasks[taskIndex].endDate = endDate;
    this.setState({ tasks });

    return true;
  };
  checkDeadline = () => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => console.log(task.id));
    setInterval(() => {
      this.setState({ tasks });
      this.setState({ tasksdeadline: !this.state.deadline });
    }, 10000);
  };
  render() {
    return (
      <div className="App">
        <Navigation addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          returnTask={this.returnTask}
          changeTask={this.changeTaskStatus}
          addTask={this.addTask}
          editTask={this.editTask}
          editExistingTask={this.editExistingTask}
        />
      </div>
    );
  }
}

export default App;
