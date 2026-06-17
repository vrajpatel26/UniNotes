import React from 'react'
import { useState } from 'react'
import logo from "../../assets/logo.png"
import { useEffect } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const AdminNote = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const [title, setTitle] = useState("")
  const [pdf, setPdf] = useState(null)

  const [semesterId, setSemesterId] = useState("")
  const [subjectId, setSubjectId] = useState("")
  const [unitId, setUnitId] = useState("")

  const [semesters, setSemesters] = useState([])
  const [subjects, setSubjects] = useState([])
  const [units, setUnits] = useState([])

  // const [uploadedBy, setUploadedBy] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()

      formData.append("title", title)
      formData.append("unitId", unitId)
      formData.append("uploadedBy", user._id)
      formData.append("pdf", pdf)

      console.log(title)
      console.log(unitId)
      console.log(pdf)

      const res = await api.post("/note", formData)

      console.log(res.data)
      toast.success("Note created successfully");


      setTitle("")
      setPdf(null)

      setSemesterId("")
      setSubjectId("")
      setUnitId("")

      setSubjects([])
      setUnits([])


    } catch (error) {
      console.log(error.response.data, error)
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );

    }
  }


  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const res = await api.get("/semester")

        setSemesters(res.data)

      } catch (error) {
        console.log("get all semester error", error)
      }
    }
    fetchSemester()
  }, [])


  useEffect(() => {
    const fetchSubject = async () => {
      try {
        if (!semesterId) return

        const res = await api.get(`/subject/${semesterId}`)

        setSubjects(res.data)

      } catch (error) {
        console.log("get subject error", error)
      }
    }
    fetchSubject()
  }, [semesterId])


  useEffect(() => {
    const fetchUnit = async () => {
      try {
        if (!subjectId) return
        const res = await api.get(`/unit/${subjectId}`)

        setUnits(res.data)

      } catch (error) {
        console.log("get unit error", error)
      }
    }
    fetchUnit()
  }, [subjectId])





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


      <div className='bg-slate-950 min-h-screen w-full flex flex-col items-center py-[30px] gap-[40px]'>


        <div className='bg-slate-900  w-[30%] rounded-[20px] py-[30px] '>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-purple-800 text-[40px] font-bold font-serif'>Create Note </h1>

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
                    setUnitId("")
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
                  onChange={(e) => {
                    setSubjectId(e.target.value)
                    setUnitId("")
                  }
                  }
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
                <label htmlFor="subjects" className='text-gray-300 text-[15px]'>Select Unit</label>
                <select
                  id='units'
                  value={unitId}
                  onChange={(e) => setUnitId(e.target.value)}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700'
                >
                  <option value="">Select Unit</option>

                  {units.map((unit) => (
                    <option
                      key={unit._id}
                      value={unit._id}
                    >
                      {unit.unitNumber}
                    </option>
                  ))}
                </select>
              </div>


              <div className='flex flex-col justify-start gap-[5px]'>
                <label className='text-gray-300 text-[15px]'>select PDF</label>
                <input
                  type='file'
                  accept=".pdf"
                  onChange={(e) => setPdf(e.target.files[0])}
                  className='w-[100%] h-[40px] px-3 bg-slate-950  text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
              </div>


              <div className='flex flex-col justify-start gap-[5px]'>
                <label className='text-gray-300 text-[15px]'>Enter Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
              </div>


              <div className='flex items-center justify-center pt-[20px]' >
                <button
                  type='submit'
                  className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 '>
                  Add
                </button>
              </div>


            </form>
          </div>
        </div >
      </div >
    </>
  )
}

export default AdminNote