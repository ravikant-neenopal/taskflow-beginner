import React, { useState } from "react";
import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ setTaskList }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    // Handle task submission logic here
    setTaskList((prev) => [
      ...prev,
      {
        text: task,
        status: "pending",
        id: uuidv4(),
      },
    ]);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">Task:</label>
      <input
        type="text"
        id="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task"
        autoComplete="off"
      />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
