import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import logo from "../../assets/logo.png";
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const ManageNotes = () => {
  const [notes, setNotes] = useState([])
  const [editNoteId, setEditNoteId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const res = await api.get("/note/all")
        console.log(res.data)
        setNotes(res.data)

      } catch (error) {
        console.log("get all notes error", error)
      }
    }
    getAllNotes()
  }, [])


  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/note/${id}`)

      setNotes((prev) => prev.filter((note) => note._id !== id))
    } catch (error) {
      // console.log("delete note error", error.message)
      console.log(error.message)
    }
  }



  const handleEdit = (note) => {
    setEditNoteId(note._id);
    setUpdatedTitle(note.title);
    setIsEditing(true);
  };


  const handleUpdate = async () => {
    try {
      const res = await api.put(`/note/${editNoteId}`, {
        title: updatedTitle,

      });

      setNotes((prev) =>
        prev.map((note) =>
          note._id === editNoteId
            ? {
              ...note,
              title: updatedTitle,

            }
            : note
        )
      );

      setIsEditing(false);
      setEditNoteId(null);
      setUpdatedTitle("");



    } catch (error) {
      console.log("update note error", error);
    }
  };


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
            Available <span className="text-purple-500">Notes</span>
          </h1>
        </div>

        {
          isEditing && (
            <div className="max-w-2xl mx-auto mb-6 bg-slate-900 border border-purple-500 rounded-xl p-4">
              <h2 className="text-white text-lg mb-3">
                Edit Note
              </h2>

              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-600"
              />
             

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Update
                </button>

                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditNoteId(null);
                    setUpdatedTitle("");
                   
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )
        }

        <div className="space-y-4 max-w-6xl mx-auto">
          {notes.map((note) => (
            <div
              key={note._id}
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
                  <span className="text-[10px] font-medium">UNIT</span>


                  <span className="text-lg lg:text-xl font-bold">
                    {note.unitId?.unitNumber}

                  </span>

                </div>


                <div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white break-words">
                    {/* {note.title} - {note.unitId?.unitName} */}
                    {note.title}
                  </h2>

                  {/* <p className="text-sm text-purple-300">
                    ({note.subjectId?.subjectCode})

                  </p> */}


                </div>
              </div>


              <div className="flex gap-2 w-full lg:w-auto">
                <button
                onClick={() => handleEdit(note)}
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
                  onClick={() => handleDelete(note._id)}
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
  )
}

export default ManageNotes