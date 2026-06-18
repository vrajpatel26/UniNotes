import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { FiFileText } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdGridView } from "react-icons/md";


const Note = () => {

    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    const { unitId } = useParams()

    useEffect(() => {

        const fetchNote = async () => {
            try {
                const res = await api.get(`/note/${unitId}`)

                setNotes(res.data)
            } catch (error) {
                console.log("fetch note error", error)
            }
        }
        fetchNote()
    }, [unitId])

    return (
      
        <div className='w-full bg-slate-950 min-h-screen flex flex-col  gap-[50px] pb-6'>

            <div className='text-white flex flex-col items-center p-5'>

                <h1 className='text-[40px] font-bold font-serif'>Pick a <span className='text-purple-500'>PDF</span></h1>
                <p className='text-[15px] text-center lg:text-[18px] text-gray-400'>Explore the available notes for this unit. Tap Note to open PDF</p>

            </div>
            <div
                onClick={()=>navigate(-1)}
                className='flex justify-center items-center gap-[10px] border border-gray-800 w-[200px] rounded-[20px] ml-[50px] lg:ml-[180px] p-2 cursor-pointer hover:border-gray-500'>
                <FaArrowLeftLong className='text-gray-400  ' />
                <h1 className='text-[15px] text-gray-400 font-semibold' >Back to Unit</h1>
            </div>


            {notes.map((note) => (
                <div
                    key={note._id}
                    // onClick={() => navigate(`/note/${unit._id}`)}
                    className="w-[70%] lg:w-[70%]  ml-[50px] lg:ml-[180px] bg-[#060b1f] border border-[#1b2440] rounded-3xl px-6 lg:py-5 py-10 flex lg:flex-row flex-col items-center justify-center lg:justify-between shadow-lg relative hover:border-purple-500 hover:-translate-y-2 duration-300">


                    <div className="flex lg:flex-row flex-col items-center gap-3 lg:gap-5">


                        <div className="w-10 lg:w-16 h-10 lg:h-16 rounded-2xl border border-purple-600 flex items-center justify-center">
                            <span className="text-purple-500 text-3xl font-bold"><MdGridView /></span>
                        </div>


                        <div>
                            <div
                                className="flex lg:flex-row flex-col items-center lg:gap-2 gap-1">
                                <h2 className="text-white text-2xl font-semibold">
                                    {note.title}
                                </h2>

                                <span
                                    className="bg-[#141b35] text-gray-400 text-xs px-2 py-1 rounded-md">
                                    PDF
                                </span>
                            </div>
                        </div>
                    </div>


                    <div
                        className="flex items-center gap-4">
                        <button
                            key={note._id}
                            onClick={() => window.open(note.fileUrl, "_blank")}
                            className="flex items-center gap-2 px-5 py-3 mt-5 lg:mt-0 rounded-2xl border border-[#1b2440] text-gray-300 hover:bg-[#0f1731] transition">
                            <FiFileText />
                            <span>View</span>
                        </button>


                    </div>
                </div>

            ))
            }
        </div>
    )

}


export default Note