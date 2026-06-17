import React, { useState } from 'react'
import logo from "../assets/logo.png"
import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post("/auth/login", {
                email,
                password
            })

            console.log(response.data);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            )

            toast.success("Login successful");
            
            navigate("/")

            setEmail("")
            setPassword("")

        } catch (error) {

            console.log(error.response?.data);
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }

    }
    return (
        <>
            <div className='bg-slate-950 p-5 border-b border-gray-700'>
                <div className="flex justify-center items-center">
                    <div
                        onClick={() => navigate("/")}
                        className="flex items-center cursor-pointer"
                    >
                        <img src={logo} alt="" className='h-[70px] w-[70px]' />

                        <h1 className='text-gray-300 text-[30px] font-bold'>
                            Uni<span className='text-purple-400 font-serif'>Notes</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className='bg-slate-950 min-h-screen w-full flex flex-col items-center py-8 px-4 gap-8'>

                <div className='bg-slate-900 py-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-[20px]'>

                    <div className='flex flex-col items-center justify-center px-4'>
                        <h1 className='text-purple-800 text-3xl sm:text-4xl font-bold font-serif text-center'>
                            Welcome Back!
                        </h1>
                    </div>

                    <div className='flex items-center justify-center'>

                        <form
                            onSubmit={handleSubmit}
                            className='w-[85%] sm:w-[75%] flex flex-col gap-5 pt-8'
                        >

                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label className='text-gray-300 text-[15px]'>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full h-[40px] px-3 bg-slate-950 text-gray-300 rounded border hover:border-purple-800 outline-none border-slate-700'
                                />
                            </div>

                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label className='text-gray-300 text-[15px]'>
                                    Password
                                </label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full h-[40px] px-3 bg-slate-950 text-gray-300 rounded border hover:border-purple-800 outline-none border-slate-700'
                                />
                            </div>

                            <div className='flex items-center justify-center pt-4'>
                                <button
                                
                                    type='submit'
                                    className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 transition-all duration-300'
                                >
                                    Login
                                </button>
                            </div>

                            <p className='text-[14px] sm:text-[16px] text-center px-2 text-gray-300'>
                                Don't Have An Account?{" "}
                                <span
                                    onClick={() => navigate("/signup")}
                                    className='text-purple-500 cursor-pointer hover:text-purple-400'
                                >
                                    Sign Up
                                </span>
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}


export default Login