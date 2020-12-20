import React, { Component } from "react";
import NavigationInput from "./NavigationInput"
import NavigationButton from "./NavigationButton"
import NavigationTextArea from "./NavigationTextArea"
import NavigationSelect from "./NavigationSelect"
class AddNewTask extends Component {

  state = {
    content: "",
    priority: "low",
    beginDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    };
  handleEndDate = (event) => this.setState({ endDate: event.target.value });
  handleBeginDate = (event) => this.setState({ beginDate: event.target.value });
  handleContent = (event) => this.setState({ content: event.target.value });
  handlePriority = (event) => this.setState({ priority: event.target.value });
  AddElement = () => {
    const { content, priority, beginDate, endDate } = this.state;
    if (content.length < 2) alert("Too short task content");
    else if (beginDate > endDate) alert("Wrong dates!");
    else {
      const add = this.props.addTask(content, priority, beginDate, endDate);
      if (add) {
        this.setState({
          content: "",
          priority: "low",
          beginDate: new Date().toISOString().slice(0, 10),
          endDate: new Date().toISOString().slice(0, 10),
          });
        }
      }
  };
  render() {
    return (
      <div className="form">
        <NavigationTextArea
          name={"textContent"}
          placeholder={"add new task"}
          value={this.state.content}
          change = {this.handleContent}
        />
        <NavigationSelect
        name="priority"
        text="Priority"
        value={this.state.priority}
        change={this.handlePriority}/>
          
        <NavigationInput
            name ={"beginDate"}
            date = {this.state.beginDate}
            handleDate= {this.handleBeginDate}
          />
        <NavigationInput
            name ={"endDate"}
            date = {this.state.endDate}
            handleDate= {this.handleEndDate}
          />
        <NavigationButton 
            id={"add"}
            click = {this.AddElement}
            text={"+Add"}
          />
        </div>
        );
    }
  }
  export default AddNewTask;