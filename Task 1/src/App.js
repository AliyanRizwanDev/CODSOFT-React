import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Tasks from './Components/Tasks';
import DisplayTasks from './Components/DisplayTasks';
import ViewTasks from './Components/ViewTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };
  const [style,setStyle] = useState({

    fontSize : "50px"
  })
  const [stylebg,setStylebg] = useState({
     backgroundColor:"white",width:"50%",borderRadius:"30px", border:"2px solid black",marginTop:"100px",
     padding:"30px"
  })
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<center><div style={stylebg} >
      <h1 style={style} className = "my-4"><b>TASK TRACKER APPLICATION</b></h1>
      <Link to="/AddTasks"><button style={style} className="btn btn-danger">ADD TASK</button></Link></div>
      </center>} />
        <Route path='/AddTasks' element={<Tasks addTask={addTask} stylebg ={stylebg}/>} />
        <Route path='/ChangeTasks' element={<DisplayTasks tasks={tasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />} />
        <Route path='/ViewTasks' element={<ViewTasks tasks={tasks} />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
