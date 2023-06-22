import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail"
import Quotes from "./pages/Quotes";
import QuotesDetail from "./pages/QuotesDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/char/:char_id" element={<Detail />} />
              <Route exact path="/quotes" element={<Quotes />} />
              <Route  path="/quotes/:quote_id" element={<QuotesDetail />} />
            </Routes>
          </div>
          </div>
      </BrowserRouter>

    </>
  )
}

export default App;