import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Navbar from "./pages/Navbar";
import Footer from "./pages/Myfooter";


const App = ()=>{
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
        <Footer />
        </>
    )
}



export default App;