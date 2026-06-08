import React from 'react'
import api from '../services/api'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const getMe = async () => {
    try {
      const response = await api.get("/user/me")

      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data);
    }

  }


  const handleLogout = async () => {
    try {
      const response = await api.get("/auth/logout")
      console.log("logout successfully");

      navigate("/login")

    }
    catch (error) {
      console.log(error.response?.data);

    }
  }
  return (
    <div className='w-full min-h-screen flex flex-col  gap-[70px] justify-center items-center'>

      <button onClick={getMe} className='h-[50px] w-[150px] rounded-lg bg-slate-950 text-gray-300'>get Me</button>


      <button onClick={handleLogout} className='h-[50px] w-[150px] rounded-lg bg-slate-950 text-gray-300'>logout</button>
    </div>
  )
}

export default Home