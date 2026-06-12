import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
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
                <ul className='flex text-gray-300 gap-[40px] text-xl'>
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
                    <li className='text-[20px] font-semibold cursor-pointer hover:text-purple-400 transition-all duration-300' >
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400 font-bold border-b-2 border-purple-400 pb-1"
                                    : "text-gray-300"
                            }
                        >
                            About
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
                    className='h-[40px] px-5 bg-purple-900 hover:bg-purple-800 transition-all duration-300 text-gray-300 rounded-md'
                >
                    Get Started
                </button>
            </div>

        </div>
    )
}

export default Navbar