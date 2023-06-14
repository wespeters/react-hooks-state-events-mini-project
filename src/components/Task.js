import React from "react";

function Task({ id, category, text, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
