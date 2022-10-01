import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Navbar from './navbar'
import logo from '../../assets/images/log.png';

export default function HomePage() {
   
    return (
     <>
     <Link to="/home">
     <Navbar />
     </Link> 
     <div class=" py-32" >
     
     <div >
     <img src={logo} class="  mx-auto mb-6  px-auto block justify-center "  alt='some value' />
     </div>
     
   

         <h1 class="text-center font-bold text-4xl py-7 animate__animated animate__delay-1s animate__pulse ">Welcome To Stellar Acadamey  </h1>

         <div class="flex justify-around  gap-4">
            <div class="text-center ">
               
               <Link to="/login1">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Staff Login </button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Home</button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/register">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Student Login</button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/userdashboard">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">User dashboard</button>

               </Link>
            </div>
            
         </div>
         
     </div>    
   
    <Footer />
      
     
     
    </>
    
    )
}

