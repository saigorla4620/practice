import React from "react";
import taskStore from "./store";
import { observer } from "mobx-react";
import Card from "antd/es/card/Card";
import Nav from "./Nav";

const CompleteTasks = observer(() => {
    console.log(taskStore.completeTasks)
  return (
    <>
    <Nav/>
    <h1>Completed tasks Here</h1>
    <div className="complete">
      {taskStore.completeTasks.map((item, index) => (
        <Card className="card" key={index} title={`task ${item.id}`}  variant="borderless" style={{ width: 500 }}>
        <p>Date: {item.date}</p>
        <p>Start Time: {item.starttime}</p>
        <p>End Time: {item.endtime}</p>
         <p>Task: {item.task}</p>
         
         
        </Card>
      ))}
    </div>
    </>
  );
});

export default CompleteTasks;
