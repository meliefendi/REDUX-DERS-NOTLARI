
import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//pages
import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"
import Product from "./pages/Products";
import Profile from "./pages/Profile";


export default function App() {
  return (
    <>
	


       <BrowserRouter>
        <div>
          <Navbar />
          <div id="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
function Home() {
  return <h2>Home</h2>;
}