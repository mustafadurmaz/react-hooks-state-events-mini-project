import React from "react";

function Task({ key, text, category, removeTask }) {
  function delTask() {
    removeTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={delTask}>
        X
      </button>
    </div>
  );
}

export default Task;
