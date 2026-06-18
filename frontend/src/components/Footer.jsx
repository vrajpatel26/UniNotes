import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"


const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full bg-slate-950 border-t border-gray-800 flex justify-center py-10 px-4'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-6xl gap-10'>

          <div className='w-full md:w-1/2 flex flex-col'>
            <div
              className='flex items-center cursor-pointer'
              onClick={() => {
                navigate("/")
                window.scrollTo(0, 0)
              }}
            >
              <img src={logo} alt="" className='h-[50px] w-[50px]' />
              <h1 className='text-gray-300 text-[25px] font-bold'>
                Uni<span className='text-purple-400 font-serif'>Notes</span>
              </h1>
            </div>

            <p className='text-gray-500 text-sm mt-2 max-w-md'>
              UniNotes helps college students access study materials in an organized hierarchy:
              semester → subject → unit → notes.
            </p>
          </div>

          
          <div className='w-full md:w-auto flex flex-col gap-3'>
            <h2 className='font-semibold text-white'>Quick Links</h2>

            <ul className='text-gray-500 flex flex-col gap-2'>
              <li>
                <Link
                  to="/"
                  
                  className='hover:text-purple-400 transition-all duration-300'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/howitworks"
           
                  className='hover:text-purple-400 transition-all duration-300'
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/semester"
                 
                  className='hover:text-purple-400 transition-all duration-300'
                >
                  Notes
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>


      <div className='w-full border-t bg-slate-950 border-gray-800 flex justify-center items-center py-4 px-4'>
        <p className='text-gray-500 text-center text-sm'>
          © 2026 UniNotes. Built for students, by students.
        </p>
      </div>
    </>
  )
}

export default Footer