import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { useEffect } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";



const Unit = () => {
    const [units, setUnits] = useState([])
    const [loading, setLoading] = useState(true)

    const { subjectId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchUnit = async () => {
            try {
                const res = await api.get(`/unit/${subjectId}`)

                setUnits(res.data)
            } catch (error) {
                console.log("fetch unit error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchUnit()
    }, [subjectId])

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <h1 className="text-white text-xl">
                    Loading...
                </h1>
            </div>
        )
    }

    if (units.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-5 text-center">
                <h1 className="text-4xl font-bold text-purple-500">
                    📚 Notes Coming Soon
                </h1>

                <p className="text-gray-400 mt-4 max-w-md">
                    We are currently preparing notes for this subject.
                    Please check back later.
                </p>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-lg text-white transition-all duration-300"
                >
                    Back to Subjects
                </button>
            </div>
        )
    }
    return (

        <div className='w-full bg-slate-950 min-h-screen flex flex-col  gap-[25px] pb-6'>
            <div className='text-white flex flex-col items-center p-5 '>

                <h1 className='text-[40px] font-bold font-serif'>Pick an <span className='text-purple-500'>unit</span></h1>
                <p className='text-[15px] text-center lg:text-[18px] text-gray-400'>Explore the available units for this subject. Tap any unit to open its note.</p>

            </div>
            <div
                onClick={() => navigate(-1)}
                className='flex justify-center items-center gap-[10px] border border-gray-800 w-[200px] rounded-[20px] ml-[50px] lg:ml-[180px] p-2 cursor-pointer hover:border-gray-500'>
                <FaArrowLeftLong className='text-gray-400  ' />
                <h1 className='text-[15px] text-gray-400 font-semibold' >Back to Course</h1>
            </div>

            {units.map((unit) => (
                <div className='flex flex-col lg:flex-row items-center px-9'>
                    <div
                        key={unit._id}
                        onClick={() => navigate(`/note/${unit._id}`)}
                        className="w-full lg:w-[70%]  lg:ml-[180px] bg-[#060b1f] border border-[#1b2440] rounded-3xl px-6 py-5 pb-[55px] lg:pb-5 flex items-center lg:justify-between justify-center shadow-lg relative cursor-pointer hover:border-purple-500 hover:-translate-y-2 duration-300">


                        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-5">


                            <div className="w-10 lg:w-16 h-10 lg:h-16 rounded-2xl border border-purple-600 flex items-center justify-center">
                                <span className="text-purple-500 text-2xl lg:text-3xl font-bold">0{unit.unitNumber}</span>
                            </div>


                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-white text-xl lg:text-2xl font-semibold text-center">
                                        Unit {unit.unitNumber} - {unit.unitName}
                                    </h2>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-4">

                            <FaArrowRightLong className='text-purple-500 text-[35px] absolute lg:right-[80px] lg:top-[33px] right-[160px] bottom-2' />

                        </div>
                    </div>
                </div>
            ))
            }

        </div>


    )
}

export default Unit