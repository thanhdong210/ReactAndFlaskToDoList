import logo from './logo.svg';
import './App.css';
import React from 'react'
import { TodoPage } from './Pages/TodoPage'
import { Show } from './Pages/Show'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={
            <TodoPage/>
          }>
          </Route>
          <Route path='/:id'element={
            <Show/>
          }>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

