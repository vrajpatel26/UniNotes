import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='w-full bg-slate-950 py-[10px] px-[40px] border-b border-gray-500 
        sticky top-0 z-50  '>
            <div className='flex justify-between items-center '>
                <div
                    className='flex items-center cursor-pointer'
                    onClick={() => navigate("/")} >

                    <img src={logo} alt="" className='h-[50px] w-[50px]' />
                    <h1 className='text-gray-300 text-[25px] font-bold'>Uni<span className='text-purple-400 font-serif'>Notes</span></h1>
                </div>
                <ul className='hidden md:flex text-gray-300 gap-[40px] text-xl'>
                    <li className='text-[20px] font-semibold cursor-pointer hover:text-purple-400 transition-all duration-300'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400 font-bold border-b-2 border-purple-400 pb-1"
                                    : "text-gray-300"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='text-[20px] font-semibold cursor-pointer hover:text-purple-400 transition-all duration-300'>
                        <NavLink
                            to="/semester"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400 font-bold border-b-2 border-purple-400 pb-1"
                                    : "text-gray-300"
                            }
                        >
                            Notes
                        </NavLink>

                    </li>
                    <li className='text-[20px] font-semibold cursor-pointer hover:text-purple-400 transition-all duration-300'>
                        <NavLink
                            to="/howitworks"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400 font-bold border-b-2 border-purple-400 pb-1"
                                    : "text-gray-300"
                            }
                        >
                            How It Works
                        </NavLink>

                    </li>
                </ul>

                <button
                    onClick={() => navigate("/login")}
                    className='hidden md:block h-[40px] px-5 bg-purple-900 hover:bg-purple-800 transition-all duration-300 text-gray-300 rounded-md'
                >
                    Get Started
                </button>

                <button
                    className='md:hidden text-gray-300 text-3xl'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            {
                isOpen && (
                    <div className='md:hidden mt-4'>
                        <ul className='flex flex-col items-center gap-4 text-gray-300'>

                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/semester">Notes</NavLink>
                            </li>

                            <NavLink to="/howitworks">
                                How It Works
                            </NavLink>

                            <button
                                onClick={() => navigate("/login")}
                                className='h-[40px] px-5 bg-purple-900 rounded-md'
                            >
                                Get Started
                            </button>

                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar