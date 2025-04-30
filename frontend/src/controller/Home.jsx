import React from "react";
import { Link } from 'react-router-dom';

import '../index.css'
export default function MedicapsLandingPage() {
  return (
    <div className="min-h-screen bg-white  ">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow">
        <div className="text-2xl font-bold ">
        <span id="U" className="Uca">UNIVERSAL</span>{' '}
<span className="Uca text-blue-900 ">
  COMPUTER ACADEMY
</span>

        </div>
        <ul className="hidden md:flex gap-6 text-blue-900 font-medium hover:cursor-pointer" >
         <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/courses">Courses</Link></li>
  <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex gap-3">
          <button className="bg-blue-100 text-blue-900 px-4 py-1 rounded hover:cursor-pointer">Admissions</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:cursor-pointer">Apply Now</button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center px-8 py-16 gap-10">
        <div className="md:w-1/2 space-y-6 mt-[9vw] px-[5vw]">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Enroll to Join the Ranks of Excellence
          </h1>
          <p className="text-gray-700">Find Your Study Options at UCA</p>
          <div className="flex gap-4 flex-wrap">
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">UNDERGRADUATE</button>
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">POSTGRADUATE</button>
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">DOCTORAL</button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            className="rounded-[100px_0px_100px_0px] shadow-lg"
          />
       
        </div>
      </div>


    
    </div>
  );
}