import React from "react";
import "./MyDay.css";
import TaskItem from "../TaskItem/TaskItem";

const MyDay = () => {
  const tasks = [
    {
      title: 'Deck Log | 1200 - 1600 Watch',
      assignedBy: 'Wayship',
      due: '',
      isCompleted: true,
      isFirst: true,
    },
    {
      title: 'COVID19 Health Guidelines',
      assignedBy: 'Technical',
      due: 'Due in 2 days',
      isCompleted: false,
    },
    {
      title: 'Steering Check',
      assignedBy: 'Captain',
      due: 'Due in 2 hours',
      isCompleted: false,
    },
    {
      title: 'ECDIS Check',
      assignedBy: 'Chief Officer',
      due: 'Due in 6 hours',
      isCompleted: false,
    },
    {
      title: 'Review Noon Report',
      assignedBy: 'Self',
      due: 'Due in 8 hours',
      isCompleted: false,
    },
  ];
  return (
    <div className="myday">
      <div className="myday-header">
        <div className="myday-headerleft">
          <h2>My Day</h2>
          <p>Tuesday, March 2</p>
        </div>
        <img src="/src/assets/cloud.svg" alt="" />
      </div>
      <div className="task-list">
        {tasks.map((task,index)=>(
          <TaskItem key={index} title={task.title} assignedBy={task.assignedBy} due={task.due} isCompleted={task.isCompleted} isFirst={index === 0}/>
        ))}
      </div>
      <div>
      <button className="add-task-button"><img src="/src/assets/plus.svg" alt="" /> Add a to-do reminder</button>
      </div>
    </div>
  );
};

export default MyDay;
