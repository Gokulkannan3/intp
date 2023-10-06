import React from "react";
import Navbar from "../Navi"
import Footer from '../Footer'
import { Link } from "react-router-dom";
import Fetch from "../Fetch/fetch";
function Home() {
  return (
    
  
    <div className="bg-white ">
    <div className="fixed top-0 left-0 w-full">
      <Navbar/>
    </div>
    
        <button className="m-96">
          <Link to='/map'>Map</Link>
          <Link to='/login'>Login</Link>
          <Link to='./signup'>Signup</Link>
        </button>
        <Fetch/>
        <div>
          <Footer/>
        </div>
    
    </div>
    
  );
}

export default Home