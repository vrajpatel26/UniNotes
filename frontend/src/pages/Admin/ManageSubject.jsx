import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";


const ManageSubject = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllSubject = async () => {
      try {
        const res = await api.get("/subject/all");

        const sortedSubjects = res.data.sort(
          (a, b) =>
            a.semesterId?.semesterNumber - b.semesterId?.semesterNumber
        );

        setSubjects(sortedSubjects);
      } catch (error) {
        console.log("fetch all subject error", error);
      }
    };

    fetchAllSubject();
  }, []);



  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/subject/${id}`)

      setSubjects((prev) => prev.filter((subject) => subject._id !== id))
    } catch (error) {

      console.log("delete subject error",error)
    }
  }

  return (
    <>

      <div className="bg-slate-950 p-4 border-b border-gray-700">
        <div className="flex justify-center items-center">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px]"
            />

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-300">
              Uni<span className="text-purple-400 font-serif">Notes</span>
            </h1>
          </div>
        </div>
      </div>


      <div className="bg-slate-950 min-h-screen p-4 sm:p-6">

        <div className="flex justify-center items-center py-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 text-center">
            Available <span className="text-purple-500">Subjects</span>
          </h1>
        </div>


        <div className="space-y-4 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <div
              key={subject._id}
              className="
                flex flex-col gap-4
                lg:flex-row lg:items-center lg:justify-between
                rounded-2xl border border-gray-700
                bg-slate-900
                p-4 lg:px-6 lg:py-4
                transition-all duration-300
                hover:border-purple-500
                hover:scale-[1.02]
              "
            >

              <div className="flex items-center gap-3 lg:gap-4">
                {/* Semester Box */}
                <div className="flex h-14 w-14 lg:h-16 lg:w-16 flex-col items-center justify-center rounded-xl border border-purple-500 text-purple-400 flex-shrink-0">
                  <span className="text-[10px] font-medium">SEM</span>

                  <span className="text-lg lg:text-xl font-bold">
                    {subject.semesterId?.semesterNumber}
                  </span>
                </div>


                <div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white break-words">
                    {subject.subjectName}
                  </h2>

                  <p className="text-sm text-purple-300">
                    ({subject.subjectCode})
                  </p>
                </div>
              </div>


              <div className="flex gap-2 w-full lg:w-auto">
                <button
                  className="
                    flex-1 lg:flex-none
                    flex items-center justify-center gap-2
                    rounded-lg bg-purple-600
                    px-4 py-2
                    text-white
                    hover:bg-purple-800
                    transition
                  "
                >
                  <FiEdit />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(subject._id)}
                  className="
                    flex-1 lg:flex-none
                    flex items-center justify-center gap-2
                    rounded-lg bg-red-600
                    px-4 py-2
                    text-white
                    hover:bg-red-800
                    transition
                  "
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageSubject;