// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import {
//     FaPlus,
//     FaBookOpen,
//     FaFolderPlus,
//     FaArrowRight,
// } from "react-icons/fa6";
// import { FiUpload } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";

// const Admin = () => {

//     const navigate = useNavigate()
//         const cards = [

//             {
//                 icon: <FaBookOpen size={24} />,
//                 title: "Create Subject",
//                 desc: "Add subjects under any semester.",
//                 path:"/admin/subject"
//             },
//             {
//                 icon: <FaFolderPlus size={24} />,
//                 title: "Create Unit",
//                 desc: "Break subjects into clean units.",
//                 path:"/admin/unit"
//             },
//             {
//                 icon: <FiUpload size={24} />,
//                 title: "Upload Notes",
//                 desc: "Push PDFs straight to Cloudinary.",
//                 path:"/admin/note"
//             },
//             {
//                 icon: <IoSettingsOutline size={24} />,
//                 title: "Manage Subjects",
//                 desc: "Edit or remove subjects.",
//                 path:"/admin/manage-subject"
//             },
//              {
//                 icon: <IoSettingsOutline size={24} />,
//                 title: "Manage Units",
//                 desc: "Edit or remove Units.",
//                 path:"/admin/manage-unit"
//             }, {
//                 icon: <IoSettingsOutline size={24} />,
//                 title: "Manage Notes",
//                 desc: "Edit or remove Notes.",
//                 path:"/admin/manage-note"
//             },
//         ];

//         return (

//             <section className="relative min-h-screen bg-[#030712] overflow-hidden">


//                 <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-20 relative z-10">
//                     <div className="grid lg:grid-cols-2 gap-14 items-center">
//                         {/* Left Side */}
//                         <div>
//                             <p className="uppercase tracking-[4px] text-purple-500 font-semibold text-sm mb-5">
//                                 For Admins
//                             </p>

//                             <h1 className="text-white font-bold leading-tight text-5xl md:text-6xl lg:text-7xl">
//                                 Full control
//                                 <br />
//                                 over{" "}
//                                 <span className=" text-purple-500  ">
//                                     academic
//                                 </span>
//                                 <br />
//                                 <span className="text-purple-500">
//                                     content
//                                 </span>
//                             </h1>

//                             <p className="mt-8 text-gray-400 text-lg max-w-lg leading-relaxed">
//                                 A dedicated admin panel to publish, organize, and update notes
//                                 across every semester.
//                             </p>

//                             <button className="mt-10 flex items-center gap-3 px-8 py-4 rounded-2xl bg-purple-700 text-white font-semibold text-lg  hover:scale-105 transition-all duration-300">
//                                 Admin Login
//                                 <FaArrowRight />
//                             </button>
//                         </div>

//                         {/* Right Side */}
//                         <div className="grid md:grid-cols-2 gap-5">
//                             {cards.map((card, index) => (
//                                 <div
//                                     key={index}
//                                     onClick={() => navigate(card.path)}
//                                     className={`bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-pointer
//                                  ${index === 6
//                                             ? "md:col-span-2 md:w-[48%]"
//                                             : ""
//                                         }`}
//                                 >
//                                     {/* Icon */}
//                                     <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
//                                         {card.icon}
//                                     </div>

//                                     {/* Content */}
//                                     <div>
//                                         <h3 className="text-white font-semibold text-xl">
//                                             {card.title}
//                                         </h3>

//                                         <p className="text-gray-400 mt-1">{card.desc}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     };




// export default Admin    


// <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
//     <div className='flex gap-[20px]  justify-center '>
//         <div
//             onClick={() => navigate("/admin/semester")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Semester
//         </div>

//         <div
//             onClick={() => navigate("/admin/subject")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Subject
//         </div>

//         <div
//             onClick={() => navigate("/admin/unit")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Unit
//         </div>

//         <div
//             onClick={() => navigate("/admin/note")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Note
//         </div>


//         <div
//             onClick={() => navigate("/admin/manage-subject")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Manage Subjects
//         </div>

//         <div
//             onClick={() => navigate("/admin/manage-unit")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Manage Units
//         </div>

//             <div
//             onClick={() => navigate("/admin/manage-note")}
//             className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Manage Notes
//         </div>
//     </div>
// </div>




import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBookOpen,
    FaFolderPlus,
    FaArrowRight,
} from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../assets/logo.png"
import { HiOutlineSparkles } from "react-icons/hi";
import { RiBookShelfLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";

const Admin = () => {
    const [stats, setStats] = useState({
        totalSubjects: 0,
        totalUnits: 0,
        totalNotes: 0
    })

    const navigate = useNavigate();

    useEffect(() => {
        const getStats = async () => {
            try {
                const result = await api.get("/dashboard/stats") 

                setStats(result.data)
            } catch (error) {
                console.log("get stats error",error)
            }
        }
        getStats()
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


            <section className="min-h-screen bg-slate-950 overflow-hidden">

                <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-10">


                    <div className='flex flex-col lg:flex-row gap-5 items-center lg:justify-center pb-12' >

                        <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[5px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
                            <LuGraduationCap className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
                            <p className='text-[18px] font-semibold text-center text-gray-300'>8</p>
                            <p className='text-[14px] text-center text-gray-400'>SEMESTERS
                            </p>
                        </div>



                        <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[5px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
                            <FiBookOpen className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
                            <p className='text-[18px] font-semibold text-center text-gray-300'>{stats.totalSubjects}</p>
                            <p className='text-[14px] text-center text-gray-400'>SUBJECTS
                            </p>
                        </div>





                        <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[5px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
                            <HiOutlineSquare3Stack3D className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
                            <p className='text-[18px] font-semibold text-center text-gray-300'>{stats.totalUnits}</p>
                            <p className='text-[14px] text-center text-gray-400'>UNITS
                            </p>
                        </div>




                        <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[5px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
                            <CgNotes className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
                            <p className='text-[18px] font-semibold text-center text-gray-300'>{stats.totalNotes}</p>
                            <p className='text-[14px] text-center text-gray-400'>NOTES
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-14 items-center">

                        {/* Left Side */}
                        <div className="lg:w-[40%]">
                            <p className="uppercase tracking-[4px] text-purple-500 font-semibold text-sm mb-5">
                                For Admins
                            </p>

                            <h1 className="text-white font-bold leading-tight text-5xl md:text-6xl lg:text-6xl">
                                Full control
                                <br />
                                over{" "}
                                <span className="text-purple-500">
                                    academic
                                </span>
                                <br />
                                <span className="text-purple-500">
                                    content
                                </span>
                            </h1>

                            <p className="mt-8 text-gray-400 text-lg max-w-lg leading-relaxed">
                                A dedicated admin panel to publish, organize, and update notes
                                across every semester.
                            </p>

                            <button
                                onClick={() => navigate("/login")}
                                className="mt-10 flex items-center gap-3 px-8 py-4 rounded-2xl bg-purple-700 text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
                                Admin Login
                                <FaArrowRight />
                            </button>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-wrap gap-5 lg:w-[60%]">

                            {/* Create Subject */}
                            <div
                                onClick={() => navigate("/admin/subject")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <FaBookOpen size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Create Subject
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Add subjects under any semester.
                                    </p>
                                </div>
                            </div>

                            {/* Create Unit */}
                            <div
                                onClick={() => navigate("/admin/unit")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <FaFolderPlus size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Create Unit
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Break subjects into clean units.
                                    </p>
                                </div>
                            </div>

                            {/* Upload Notes */}
                            <div
                                onClick={() => navigate("/admin/note")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <FiUpload size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Upload Notes
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Push PDFs straight to Cloudinary.
                                    </p>
                                </div>
                            </div>

                            {/* Manage Subjects */}
                            <div
                                onClick={() => navigate("/admin/manage-subject")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <IoSettingsOutline size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Manage Subjects
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Edit or remove subjects.
                                    </p>
                                </div>
                            </div>

                            {/* Manage Units */}
                            <div
                                onClick={() => navigate("/admin/manage-unit")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <IoSettingsOutline size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Manage Units
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Edit or remove units.
                                    </p>
                                </div>
                            </div>

                            {/* Manage Notes */}
                            <div
                                onClick={() => navigate("/admin/manage-note")}
                                className="w-full md:w-[48%] bg-[#060b1f] border border-[#1b2440] rounded-3xl p-6 flex items-center gap-5 cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-400">
                                    <IoSettingsOutline size={24} />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl">
                                        Manage Notes
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Edit or remove notes.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Admin;