import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const removeTask = (text) => {
    setTasks(tasks.filter((task)=>(task.text !== text)))
  };

  function handleFilter(e) {
    setCategory(e.target.textContent);
  }

  function handleTaskFormSubmit(newData) {
    setTasks([...tasks, newData]);
  }

  const filteredTasks = tasks.filter((task) => {
    return category === "All" ? true : task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onClickCategoryName={handleFilter}
        selectCategory={category}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
