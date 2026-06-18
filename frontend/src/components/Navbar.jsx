import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import Swal from "sweetalert2";
import api from '../services/api';
import toast from 'react-hot-toast';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Logout!",
                cancelButtonText: "Cancel"
            })

            if (!result.isConfirmed) {
                return
            }

            await api.get("/auth/logout")

            console.log("logged out successful")

            localStorage.removeItem("user")

            toast.success("Logged out successfully")

            navigate("/")
        }
        catch (error) {
            toast.error("Failed to logout")
        }
    }
    return (
        <div className='w-full bg-slate-950 py-[10px] px-4 md:px-10 border-b border-gray-500 
        sticky top-0 z-50  '>
            <div className='flex justify-between items-center '>
                <div
                    className='flex items-center cursor-pointer'
                    onClick={() => {
                        navigate("/")
                        window.scrollTo(0, 0)
                    }
                    } >

                    <img src={logo} alt="" className='h-[50px] w-[50px]' />
                    <h1 className='text-gray-300 text-lg sm:text-xl md:text-[25px] font-bold'>Uni<span className='text-purple-400 font-serif'>Notes</span></h1>
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


                {user?.role === "user" && (
                    <div className='hidden md:flex gap-5'>
                        <button
                            onClick={() => navigate("/profile")}
                            className='hidden md:block h-[40px] px-5 bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-gray-300 rounded-md font-semibold'
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => handleLogout()}
                            className='hidden md:block h-[40px] px-5 bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-gray-300 rounded-md font-semibold'
                        >
                            Log Out
                        </button>
                    </div>
                )}

                {!user && (
                    <button
                        onClick={() => navigate("/login")}
                        className='hidden md:block h-[40px] px-5 bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-gray-300 rounded-md font-semibold'
                    >
                        Get Started
                    </button>

                )}

                {user?.role === "admin" && (

                    <div className='hidden md:flex gap-5'>
                        <button
                            onClick={() => navigate("/admin")}
                            className='hidden md:block h-[40px] px-5 bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-gray-300 rounded-md font-semibold'
                        >
                            Dashboard
                        </button>

                        <button
                            onClick={() => handleLogout()}
                            className='hidden md:block h-[40px] px-5 bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-gray-300 rounded-md font-semibold'
                        >
                            Logout
                        </button>
                    </div>
                )}

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

                            {!user && (<button
                                onClick={() => navigate("/login")}
                                className='h-[40px] px-5 bg-purple-900 rounded-md'
                            >
                                Get Started
                            </button>)}

                            {user?.role === "user" && (<button
                                onClick={() => navigate("/login")}
                                className='h-[40px] px-5 bg-purple-900 rounded-md'
                            >
                                Log Out
                            </button>)}

                            {user?.role === "admin" && (
                                <div className='flex flex-col gap-4'>
                                    <button
                                        onClick={() => navigate("/admin")}
                                        className='h-[40px] px-5 bg-purple-900 rounded-md'
                                    >
                                        Dashboard
                                    </button>

                                    <button
                                        onClick={() => navigate("/login")}
                                        className='h-[40px] px-5 bg-purple-900 rounded-md'
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}


                        </ul>
                    </div>
                )
            }
        </div>
    )
}


export default Navbar