import React, { useState } from 'react';

export default function Tasks({ addTask, stylebg }) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleSubmit = () => {
    if (taskName && taskDesc) {
      addTask({ name: taskName, description: taskDesc });
      setTaskName('');
      setTaskDesc('');
      alert("Task Added")
    }
    
  };

  return (
    <div className="container my-4"style={stylebg} >
      <div className="mb-3" >
        <input type="text" className="form-control" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} placeholder="Task Description" rows="3"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
