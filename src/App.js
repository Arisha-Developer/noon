import React from "react";
import Navigation from "./components/Navigation";
import "./App.css"
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
 
export default function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/"></Route> */}
            </Routes>
           
        </div>
    )
}