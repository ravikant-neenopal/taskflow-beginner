import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./app.css";
import TaskForm from "./components/TaskForm";
import ShowTasks from "./components/ShowTasks";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem("taskList");
    return saved ? JSON.parse(saved) : [];
  });
    const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].content || "");
      })
      .catch(() => setQuote("Could not fetch quote."));
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="app">
      <Header />
      <main>
        <h1 style={{ textAlign: "center" }}>Capstone project for beginner</h1>
        <h1 style={{ textAlign: "center" }}>Quote of the Day
        </h1>
        <p style={{ textAlign: "center", fontStyle: "italic", color: "#555" }}>
          {quote}
        </p>
        <TaskForm setTaskList={setTaskList} />
        <ShowTasks taskList={taskList} setTaskList={setTaskList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
