import React from "react";
import Instruction from "./Instruction";
import AddNewTask from "./AddNewTask";
import NavigationButton from "./NavigationButton"
import "./Navigation.css";
const Navigation = (props) => {
  
  
    return (
      <nav className="addNavigation">
        <NavigationButton 
          className={"howTo"}
          text={"How to"}/>
        <NavigationButton 
          className={"addNavigationTrigger"}
          text={"Add new task"}/>
        <Instruction/>
        <AddNewTask 
          addTask={props.addTask}/>
      </nav>
    );
  }

export default Navigation;
