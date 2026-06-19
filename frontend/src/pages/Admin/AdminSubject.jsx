import React from 'react'
import logo from "../../assets/logo.png"
import { useState } from 'react'
import api from '../../services/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const AdminSubject = () => {

    const navigate = useNavigate()

    const [subjectName, setSubjectName] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [semesterId, setSemesterId] = useState("")
    const [semesters, setSemesters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)

            const formData = new FormData()

            formData.append("subjectName", subjectName)
            formData.append("subjectCode", subjectCode)
            formData.append("semesterId", semesterId)
            formData.append("image", image)

            const res = await api.post("/subject", formData)

            console.log(res.data);
            toast.success("Subject created successfully");


            setSubjectName("")
            setSubjectCode("")
            setSemesterId("")
            setIsLoading(false)
            setImage(null)

        } catch (error) {
            console.log(error.response.data)
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
            setIsLoading(false)


        }
    }

    useEffect(() => {
        const fetchSemester = async () => {
            try {
                const res = await api.get("/semester")

                setSemesters(res.data)

            } catch (error) {
                console.log("semester fetch error", error)
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

                <div className='bg-slate-900 w-full lg:w-[30%] rounded-[20px] py-[30px] '>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-purple-800 text-[40px] font-bold font-serif'>Create Subject </h1>

                    </div>

                    <div className='flex items-center justify-center'>

                        <form
                            onSubmit={handleSubmit}
                            className='w-[70%] flex flex-col gap-[20px] pt-[30px]'>


                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label className='text-gray-300 text-[15px]'>Subject Name</label>
                                <input
                                    value={subjectName}
                                    onChange={(e) => setSubjectName(e.target.value)}
                                    className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
                            </div>

                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label className='text-gray-300 text-[15px]'>Subject Code</label>
                                <input
                                    value={subjectCode}
                                    onChange={(e) => setSubjectCode(e.target.value)}
                                    className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border  hover:border-purple-800 outline-none border-slate-700' />
                            </div>

                            <div className='flex flex-col justify-start gap-[5px]'>
                                <label htmlFor="semesters" className='text-gray-300 text-[15px]'>Select Semester</label>
                                <select
                                    id='semesters'
                                    value={semesterId}
                                    onChange={(e) => setSemesterId(e.target.value)}
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
                                <label className='text-gray-300 text-[15px]'>
                                    Select Subject Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className='w-[100%] h-[40px] px-3 bg-slate-950 text-gray-300 rounded border hover:border-purple-800 outline-none border-slate-700'
                                />
                            </div>

                            <div className='flex items-center justify-center pt-[20px]' >
                                <button
                                    type='submit'
                                    className='bg-purple-800 h-[40px] w-full rounded text-gray-300 hover:bg-purple-700 '
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating Subject..." : "Create Subject"}
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSubject