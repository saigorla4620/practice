import React from "react";
import taskStore from "./store";
import { observer } from "mobx-react";
import Card from "antd/es/card/Card";
import Nav from "./Nav";

const PendingTasks = observer(() => {
    console.log(taskStore.completeTasks)
  return (
    <>
    <Nav/>
    <h1>Your Tasks</h1>
    <div className="complete">
      {taskStore.tasks.map((item, index) => (
        <Card className="card-add" key={index} title={`task ${item.id}`}  variant="borderless" style={{ width: 500 }}>
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

export default PendingTasks;
