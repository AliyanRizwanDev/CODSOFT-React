import React from 'react';

export default function DisplayTasks({ tasks, deleteTask, toggleTaskStatus }) {
  return (
    <div className="container my-4">
      {tasks.map(task => (
        <div className="card mb-3" key={task.id}>
          <div className="card-body">
            <h5 className="card-title">{task.name}</h5>
            <p className="card-text">{task.description}</p>
            <button className="btn btn-danger me-2" onClick={() => deleteTask(task.id)}>Delete</button>
            <button className="btn btn-secondary" onClick={() => toggleTaskStatus(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
