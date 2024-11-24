import React from "react";
import "./TaskItem.css";

const TaskItem = ({ title, assignedBy, due, isCompleted, isFirst }) => {
  const isRedTask = title === "COVID19 Health Guidelines";
  const isRedDue = title === "Steering Check";
  return (
    <div
      className={`taskitem ${isCompleted ? "completed" : ""} ${
        isRedTask ? "red-task" : ""
      }`}
    >
      <div className={`task-checkbox ${isFirst ? "first-checkbox" : ""}`}>
        <input type="checkbox" checked={isCompleted} readOnly />
      </div>
      <div className="task-details">
        <p
          className={`task-title ${isCompleted ? "strike-through" : ""} ${
            isRedTask ? "red-title" : ""
          }`}
        >
          {title}
        </p>
        <p className="task-meta">
          Assigned by {assignedBy}
          {due && (
            <>
              {" "}
              | <span className={`${isRedDue ? "red-due" : ""}`}>{due}</span>
            </>
          )}
        </p>
      </div>
      <div className="task-options">
        <img src="/src/assets/more.svg" alt="" />
      </div>
    </div>
  );
};

export default TaskItem;
