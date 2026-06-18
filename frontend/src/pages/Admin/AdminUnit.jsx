import React from 'react'
import { useState } from 'react'
import api from '../../services/api'
import logo from "../../assets/logo.png"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const AdminUnit = () => {

  const navigate = useNavigate()

  const [unitNumber, setUnitNumber] = useState("")
  const [unitName, setUnitName] = useState("")
  const [subjectId, setSubjectId] = useState("")
  const [semesterId, setSemesterId] = useState("")
  const [semesters, setSemesters] = useState([])
  const [subjects, setSubjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.log({
        unitNumber,
        unitName,
        subjectId
      })

      const res = await api.post("/unit", {
        unitNumber,
        unitName,
        subjectId
      })

      console.log(res.data);
      toast.success("Unit created successfully");


      setUnitNumber("")
      setUnitName("")
      setSubjectId("")
      setSemesterId("")
      setSubjects([])
      setIsLoading(false)

    } catch (error) {
      console.log(error.response.data)
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
      setIsLoading(false)

    }
  }

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        if (!semesterId) return
        const res = await api.get(`/subject/${semesterId}`)

        setSubjects(res.data)

      } catch (error) {
        console.log("fetch subjects error", error)
      }
    }
    fetchSubjects()
  }, [semesterId])


  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const res = await api.get("/semester")

        setSemesters(res.data)

      } catch (error) {
        console.log("fetch semester error", error)
      }
    }
    fetchSemester()
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


      <div className='bg-slate-950 min-h-screen w-full flex flex-col items-center pt-[150px] lg:py-[30px] px-[40px] lg:px-0 gap-[40px]'>


        <div className='bg-slate-900  w-full lg:w-[30%] rounded-[20px] py-[30px] '>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-purple-800 text-[40px] font-bold font-serif'>Create Unit </h1>

          </div>

          <div className='flex items-center justify-center'>

            <form
              onSubmit={handleSubmit}
              className='w-[70%] flex flex-col gap-[20px] pt-[30px]'>

              <div className='flex flex-col justify-start gap-[5px]'>
                <label htmlFor="semesters" className='text-gray-300 text-[15px]'>Select Semester</label>
                <select
                  id='semesters'
                  value={semesterId}
                  onChange={(e) => {
                    setSemesterId(e.target.value)
                    setSubjectId("")
                  }}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700'
                >
                  <option value="">Select Semester</option>

                  {semesters.map((sem) => (
                    <option
                      key={sem._id}
                      value={sem._id}
                    >
                      Semester {sem.semesterNumber}
                    </option>
                  ))}
                </select>
              </div>

              <div className='flex flex-col justify-start gap-[5px]'>
                <label htmlFor="subjects" className='text-gray-300 text-[15px]'>Select subjects</label>
                <select
                  id='subjects'
                  value={subjectId}
                  onChange={(e) => setSubjectId(e.target.value)}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700'
                >
                  <option value="">Select Subject</option>

                  {subjects.map((subject) => (
                    <option
                      key={subject._id}
                      value={subject._id}
                    >
                      {subject.subjectName}
                    </option>
                  ))}
                </select>
              </div>


              <div className='flex flex-col justify-start gap-[5px]'>
                <label className='text-gray-300 text-[15px]'>Unit Number</label>
                <input
                  type='number'
                  value={unitNumber}
                  onChange={(e) => setUnitNumber(e.target.value)}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
              </div>

              <div className='flex flex-col justify-start gap-[5px]'>
                <label className='text-gray-300 text-[15px]'>Unit Name</label>
                <input
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
              </div>


              <div className='flex items-center justify-center pt-[20px]' >
                <button
                  type='submit'
                  className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 '
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Unit..." : "Create Unit"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminUnit