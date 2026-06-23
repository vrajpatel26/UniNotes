import React, { useState } from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import api from '../services/api';
import toast from "react-hot-toast"

const Footer = () => {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const navigate = useNavigate()

  const handleFeedback = async (e) => {
    e.preventDefault()

    if (!message.trim()) {
      return alert("Please enter your feedback")
    }

    try {
      setIsSending(true)

      const res = await api.post("/feedback", {
        message
      })

      toast.success("Thank you for your feedback! 🚀")

      setMessage("")

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send feedback")
    } finally {
      setIsSending(false)
    }
  }
  return (
    <>
      <div className='w-full bg-slate-950 border-t border-gray-800 flex justify-center py-10 px-4'>
        <div className='flex flex-col md:flex-row items-start justify-between w-full max-w-6xl gap-10'>

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

          <div className='w-full md:w-[350px]'>
            <h2 className='font-semibold text-white mb-3'>
              Feedback
            </h2>

            <p className='text-gray-500 text-sm mb-3'>
             Have a Suggestion?
            </p>

            <form onSubmit={handleFeedback}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Write your feedback...'
                rows="4"
                className='w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-purple-500 resize-none'
              />

              <button
                type='submit'
                disabled={isSending}
                className='mt-3 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white px-5 py-2 rounded-lg transition-all duration-300'
              >
                {isSending ? "Sending..." : "Send Feedback"}
              </button>
            </form>
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