import React, { useEffect, useState } from 'react'
import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { motion } from "framer-motion";

const Semester = () => {

    const [semesters, setSemesters] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [allSubjects, setAllSubjects] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSemester = async () => {
            try {
                const res = await api.get("/semester")

                setSemesters(res.data)

            } catch (error) {
                console.log("fetch semester error", error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchSemester()
    }, [])

  
    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const res = await api.get("/subject/all")

                setAllSubjects(res.data)

            } catch (error) {
                console.log("fetch subject error", error)
            }
        }

        fetchSubjects()
    }, [])

    

    const filteredSubjects = allSubjects.filter(subject =>
        subject.subjectName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )

      if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <h1 className="text-white text-[40px]">
                    Loading...
                </h1>
            </div>
        )
    }

    return (

        <>
            {/* search-bar */}
            <div className='w-full bg-slate-950 flex items-center justify-center border-b border-gray-800'>
                <div className='h-[200px] w-[80%]  flex justify-center'>
                    <div className=' w-full flex flex-col'>
                        <div className='flex justify-center p-5'>
                            <h1 className='text-gray-500 text-[20px]'>All Semesters</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative w-full lg:w-[70%]">
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="text"
                                    className="h-[50px] w-full bg-slate-900 border border-gray-700 rounded-[18px] hover:border-purple-800 transition-all duration-300 pl-4 pr-12 outline-none text-white"
                                    placeholder="Search subjects - e.g. Mathematics"
                                />

                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xl"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {searchTerm.trim() !== "" && filteredSubjects.length === 0 && (
                <div className="flex min-h-[60vh] flex-col items-center justify-center py-11 bg-slate-950">
                    <h2 className="text-2xl font-semibold text-gray-300">
                        No Subject Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Try searching with another subject name.
                    </p>
                </div>
            )}

            {searchTerm.trim() !== "" && filteredSubjects.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap justify-center gap-5 py-6 bg-slate-950">
                    {filteredSubjects.map((subject, index) => (
                        <motion.div
                            key={subject._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1
                            }}
                            className='h-[430px] w-[300px] lg:w-[380px] bg-slate-900 rounded-[16px] text-white border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300 flex flex-col gap-[15px]'
                        >
                            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden rounded-t-[16px]">
                                <img
                                    src={subject.imageUrl}
                                    alt={subject.subjectName}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className='flex flex-col items-start px-5 h-[60px]'>
                                <h1 className='text-[20px] font-semibold'>
                                    {subject.subjectName}
                                </h1>
                            </div>

                            <div className='ml-5 border border-gray-700 w-[100px] text-center rounded-[20px]'>
                                <h1 className='text-[15px] font-semibold'>
                                    {subject.subjectCode}
                                </h1>
                            </div>

                            <div className='flex justify-center mt-auto mb-5'>
                                <button
                                    onClick={() => navigate(`/unit/${subject._id}`)}
                                    className='bg-purple-800 h-[40px] w-[90%] rounded text-gray-300 hover:bg-purple-600 font-semibold'
                                >
                                    Explore Course
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}


            {searchTerm.trim() === "" && (
                <div className='w-full bg-slate-950 min-h-screen flex flex-col gap-[50px]'>
                    <div className='text-white flex flex-col items-center p-5'>

                        <h1 className='text-[30px] lg:text-[40px] font-bold font-serif'>Choose Your <span className='text-purple-500'>Semester</span></h1>
                        <p className='text-[14px] lg:text-[18px] text-center text-gray-400'>Eight semesters of curated notes. Pick yours to dive into subjects and units.</p>
                    </div>


                    <div className='w-full flex justify-center'>
                        <div className=''>
                            <div className='flex flex-wrap justify-center gap-5 overflow-x-auto lg:overflow-x-visible pb-5'>
                                {semesters.map((sem) => (
                                    <div
                                        className='h-[170px] w-[320px]  bg-slate-900 rounded-[16px] text-white cursor-pointer border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300 '
                                        key={sem._id}
                                        onClick={() => navigate(`/subject/${sem._id}`)}
                                    >
                                        <div className='flex relative'>

                                            <div className='p-5 '>
                                                <h1 className='text-[15px] text-gray-300'>SEMESTER</h1>
                                                <h1 className='text-[30px] text-purple-500 font-bold'>0{sem.semesterNumber}</h1>
                                            </div>
                                            <FaArrowRightLong className='text-gray-300 text-[20px] absolute right-7 top-5' />

                                        </div>


                                        <div className='flex pt-5 pl-5 gap-[10px]'>
                                            <div className='flex items-center gap-[5px]'>
                                                <FiBookOpen className='h-[17px] w-[17px] text-purple-500' />
                                                <h1 className='text-gray-300' >{sem.subjectCount} subjects</h1>
                                            </div>

                                            <div className='flex items-center gap-[5px]'>
                                                <HiOutlineSquare3Stack3D className='h-[17px] w-[17px] text-purple-500' />
                                                <h1 className='text-gray-300'>{sem.unitCount} units</h1>
                                            </div>
                                        </div>

                                    </div>
                                ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Semester