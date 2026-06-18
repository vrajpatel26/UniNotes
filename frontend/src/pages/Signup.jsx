import React, { useState } from 'react'
import logo from "../assets/logo.png"
import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await api.post("/auth/signup", {
                name,
                email,
                password
            })

            // console.log(response.data);

            toast.success("Account created successful");


            setName("")
            setEmail("")
            setPassword("")
            setIsLoading(false)

            navigate("/login")


        } catch (error) {

            console.log(error.response?.data);
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
            setIsLoading(false)
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


            <div className='bg-slate-950 min-h-screen w-full flex flex-col items-center py-8 px-4 gap-5'>

                <div className='bg-slate-900 py-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-[20px]'>

                    <div className='flex flex-col items-center justify-center px-4'>
                        <h1 className='text-purple-800 text-2xl sm:text-3xl font-bold font-serif text-center'>
                            Create Your Account
                        </h1>
                    </div>

                    <div className='flex items-center justify-center'>

                        <form
                            onSubmit={handleSubmit}
                            className='w-[85%] sm:w-[75%] flex flex-col gap-5 pt-8'
                        >

                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label className='text-gray-300 text-[15px]'>
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='w-full h-[40px] px-3 bg-slate-950 text-gray-300 border hover:border-purple-800 rounded outline-none border-slate-700'
                                />
                            </div>

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
                                <div className='relative'>
                                    <input
                                        type={show ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='w-full h-[40px] px-3 bg-slate-950 text-gray-300 rounded border hover:border-purple-800 outline-none border-slate-700'
                                    />
                                    <span
                                        className='absolute top-[9px] lg:top-[5px] right-[10px] text-[15px] sm:text-[19px] text-purple-500 cursor-pointer'
                                        onClick={() => setShow(prev => !prev)}
                                    >
                                        {show ? "hidden" : "show"}
                                    </span>
                                </div>
                            </div>

                            <div className='flex items-center justify-center pt-4'>
                                <button

                                    type='submit'
                                    className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 transition-all duration-300'
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating Account..." : "Create Account"}
                                </button>
                            </div>

                            <p className='text-[14px] sm:text-[16px] text-center px-2 text-gray-300'>
                                Already Have An Account?{" "}
                                <span
                                    onClick={() => navigate("/login")}
                                    className='text-purple-500 cursor-pointer hover:text-purple-400'
                                >
                                    Login
                                </span>
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Signup