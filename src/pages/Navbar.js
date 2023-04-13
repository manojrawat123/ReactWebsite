import react, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import "../input.css";

const Navbar = ()=>{
    const [display, setdisplay] = useState("hidden my-[3rem]");
    const handleClick = ()=>{
        if (display == "hidden my-[3rem]"){
            setdisplay("block my-[3rem] text-center shadow-2xl")
        }
        else{
            setdisplay("hidden my-[3rem]")
        }
    }
    return (
        <>
        <div className="lg:flex h-[4rem] shadow-2xl items-center justify-center hidden">
        <div className="ml-[4rem] font-bold text-white bg-red-600 px-3 py-2 rounded-[50%]"><i>M</i></div>
            <div className="ml-auto mx-[2rem] underline"><NavLink to="/">Home </NavLink></div>
             <div className="mx-[2rem] underline"><NavLink to="/dashboard">  Dashboard </NavLink></div>
            <div className="mx-[2rem] underline"><NavLink to="/contact"> Contact </NavLink></div>
           <div className="mr-auto mx-[2rem] underline"><NavLink to="/about">   About </NavLink></div>
      <div className="mr-8 relative">
        <input type="text" className="border-2 border-solid border-gray-700 pl-2 w-[20rem] h-[2rem] rounded" placeholder="Search"/> 
      </div>
           
        </div>

{/* Mobile Start */}

        <div className="lg:hidden flex items-center h-[4rem] justify-center shadow-2xl">
        <div className="ml-[4rem]  font-bold text-white bg-red-600 px-3 py-2 rounded-[50%]"><i>M</i></div>
        <button onClick={handleClick} className="ml-auto mr-4 border border-blue-700 text-blue-700 rounded hover:border-transparent hover:bg-blue-500 hover:text-white font-semibold py-2 px-4">
            Nav</button></div>
        <div className="flex-col items-center justify-center">
           
            <div className={display}>
            <NavLink to="/"><div className=" underline block">Home </div></NavLink>
            <NavLink to="/dashboard"> <div className=" underline">  Dashboard </div></NavLink>
            <NavLink to="/contact">  <div className=" underline">Contact  </div></NavLink>
            <NavLink to="/about">  <div className=" underline">   About  </div></NavLink>
            <br/> 
            <br/> 
      {/* <div className="mr-8 relative">
        <input type="text" className="border-2 border-solid border-gray-700 pl-2 w-[20rem] h-[2rem] rounded" placeholder="Search"/> 
            </div>
             */}
            
            
        
    </div>
    </div>

        </>
    )
}

export default Navbar;