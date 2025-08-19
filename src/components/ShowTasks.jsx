import React, { useState } from "react";
import "./ShowTasks.css";

function ShowTasks({ taskList, setTaskList }) {
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  const filteredTasks =
    filter === "all"
      ? taskList
      : taskList.filter((task) => task.status === filter);

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tasks:</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="task-filter" style={{ marginRight: "10px" }}>
          Show:
        </label>
        <select
          id="task-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px" }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <ul>
        {filteredTasks && filteredTasks.length !== 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`${
                task.status === "completed" ? "completed-task" : ""
              } task-row`}
            >
              <div className="taskinfo">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.status === "completed"}
                  onChange={() => toggleStatus(task.id)}
                />
                <span
                  className={`${
                    task.status === "completed" ? "completed" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <li>No tasks yet.</li>
        )}
      </ul>
    </>
  );
}

export default ShowTasks;
