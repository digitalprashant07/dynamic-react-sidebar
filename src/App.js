import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import FileManager from './Pages/FileManager';
import Messages from './Pages/Messages';
import Order from './Pages/Order';
import Saved from './Pages/Saved';
import Setting from './Pages/Setting';
import Users from './Pages/Users';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/analytics' element={<Analytics/>} />
          <Route path='/file-manager' element={<FileManager/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/saved' element={<Saved/>} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='*' element={<>not found</>} />
        </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
