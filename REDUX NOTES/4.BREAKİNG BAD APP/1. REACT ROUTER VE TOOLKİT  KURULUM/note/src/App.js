import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/users"> Users </Link>
          </li>
        </ul>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/users" element={<Users />}/>        
      </Routes>
    </BrowserRouter>

    </>
  )
}

function Home(){
  return <h1>Home</h1>
}

function About(){
  return <h1>About</h1>
}

function Users(){
  return <h1>Users</h1>
}
export default App;