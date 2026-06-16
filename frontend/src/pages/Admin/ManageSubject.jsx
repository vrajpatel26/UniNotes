import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import logo from "../../assets/logo.png"

const ManageSubject = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const fetchAllSubject = async () => {
      try {
        const res = await api.get("/subject/all")
      
        return setSubjects(res.data)

      } catch (error) {
        console.log("fetch all subject error", error);

      }
    }
    fetchAllSubject()
  }, [])
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
    
    <div className="space-y-4 bg-slate-950 w-full min-h-screen p-5  ">
      {subjects.map((subject) => (
        <div
          key={subject._id}
          className="flex items-center justify-between rounded-2xl border border-purple-500/30 bg-slate-900 px-6 py-4 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]"
        >
          {/* Semester Box */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-purple-500 text-purple-400">
              <span className="text-[10px] font-medium">SEM</span>
              <span className="text-xl font-bold">
                {subject.semesterId?.semesterNumber}
              </span>
            </div>

            {/* Subject Name */}
            <h2 className="text-xl font-semibold text-white">
              {subject.subjectName} <span className='text-purple-300'>( {subject.subjectCode} )</span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-purple-700 px-4 py-2 text-white">
              <FiEdit />
              Edit
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white">
              <FiTrash2 />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default ManageSubject