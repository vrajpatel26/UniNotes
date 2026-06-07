import React, { useState } from 'react'
import logo from "../assets/logo.png"
import api from '../services/api.js'



const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post("/auth/signup", {
                name,
                email,
                password
            })

            // console.log(response.data);

            setName("")
            setEmail("")
            setPassword("")
            alert("Account created successfully")

        } catch (error) {
            console.log(error.response?.data);
        }
    }
    return (
        <div className='bg-slate-950 min-h-screen w-full flex flex-col items-center py-[30px] gap-[20px]'>

            <div className='flex justify-center items-center'>
                <img src={logo} alt="" className='h-[70px] w-[70px]' />
                <h1 className='text-gray-300 text-[30px] font-bold'>Uni<span className='text-purple-400 font-serif'>Notes</span></h1>
            </div>

            <div className='bg-slate-900 py-[30px] w-[30%] rounded-[20px] '>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-purple-800 text-[30px] font-bold font-serif '>Create Your Account</h1>

                </div>

                <div className='flex items-center justify-center'>

                    <form onSubmit={handleSubmit} className='w-[70%] flex flex-col gap-[20px] pt-[30px]'>

                        <div className='flex flex-col justify-start gap-[5px]'>
                            <label className='text-gray-300 text-[15px]'>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 border hover:border-purple-800 rounded outline-none border-slate-700'
                            />
                        </div>

                        <div className='flex flex-col justify-start gap-[5px]'>
                            <label className='text-gray-300 text-[15px]'>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
                        </div>

                        <div className='flex flex-col justify-start gap-[5px]'>
                            <label className='text-gray-300 text-[15px]'>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
                        </div>

                        <div className='flex items-center justify-center pt-[20px]' >
                            <button
                                type='submit'
                                className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 '>
                                Create Account
                            </button>
                        </div>

                        <p className='text-[14px] sm:text-[16px] text-center px-2 text-gray-300'>
                            Already Have An Account?{" "}
                            <span 
                            className='text-purple-800 cursor-pointer'>
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup