import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import  Home  from "./Components/Home";
import AssignTask from "./Components/AssignTask";
import ViewTask from "./Components/ViewTask";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Navbar />} />
            <Route path="/assigntask" element={<AssignTask />} />
            <Route path="/home" element={<Home />} />
            <Route path="/viewtask" element={<ViewTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
