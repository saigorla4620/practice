import React, { useState } from "react";
import { Space, Button, Input, TimePicker } from "antd";
import { observer } from "mobx-react";
import taskStore from "./store";
import "./todo.css"
import { EditOutlined,DeleteOutlined } from "@ant-design/icons";

import dayjs from 'dayjs';
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

const Home = observer(() => {
    const format = 'HH:mm';
    const [data, setData] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null);
    const [StartTime,setStartTime] = useState(null)
    const [EndTime,setEndTime] = useState(null)
    const location = useLocation()
    const selectedDate = location.state?.selectedDate 
    function handleChange(e) {
        setData(e.target.value);
    }

    function addTask() {
        if (data.trim() !== "") {
            taskStore.addTask(selectedDate, data, StartTime?.format(format), EndTime?.format(format));
            setData("");
            setStartTime(null);
            setEndTime(null);
            

        }
    }

    function editTask(id, task) {
        setData(task);
        setIsEditing(true);
        setEditTaskId(id);
    }

    function updateTask() {
        if (editTaskId !== null) {
            taskStore.updateTask(editTaskId, data);
            setData("");
            setIsEditing(false);
            setEditTaskId(null);
        }
    }
   
    return (
        <>
     
      
       <Nav/>
        <div className="main">
            <div className="task">
                <label htmlFor="">Selected Date</label>
              <Input placeholder="Selected Date" value={selectedDate} readOnly  />
                <label htmlFor="">Start Time: </label>
                <TimePicker className="TimePicker" defaultValue={dayjs('00:00', format)} format={format} value={StartTime} onChange={setStartTime}/><br></br>
                <label>End Time: </label>
                <TimePicker className="TimePicker" defaultValue={dayjs('00:00', format)} format={format} value={EndTime} onChange={setEndTime}/>
                <h2>{isEditing ? "Edit Task" : "Add Task"}</h2>
                
                    <Input placeholder="Enter Your Task..." value={data} onChange={handleChange} className="input"/>
                    {isEditing ? (
                        <Button type="primary"  className="btn" onClick={updateTask}>Update Task</Button>
                    ) : (
                        <Button type="primary" className="btn" onClick={addTask}>Add Task</Button>
                    )}
                
               
     
                

                <div>
                    {taskStore.tasks.map((item) => (
                        <div key={item.id} className="tasks">
                            <div className="taskDisplay">
                            <h3>{item.date}</h3>
                            <p>starttime: {item.starttime}</p>
                            <p>endtime: {item.endtime}</p>
                            <h3>Task: {item.task}</h3>
                            </div>
                            <div>
                            <Button onClick={() => editTask(item.id, item.task)}><EditOutlined /></Button>
                            <Button onClick={() => taskStore.completeTask(item.id)}><DeleteOutlined /></Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
});

export default Home;
