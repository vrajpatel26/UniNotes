import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import logo from "../../assets/logo.png";
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import toast from "react-hot-toast";



const ManageUnit = () => {
  const [units, setUnits] = useState([])
  const [editUnitId, setEditUnitId] = useState(null)
  const [updatedUnitName, setUpdatedUnitName] = useState("")
  const [updatedUnitNumber, setUpdatedUnitNumber] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const getAllUnits = async () => {
      try {
        const res = await api.get("/unit/all")
        console.log(res.data)
        setUnits(res.data)

      } catch (error) {
        console.log("get all units error", error)
      }
    }
    getAllUnits()
  }, [])

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to recover this unit!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
      })

      if (!result.isConfirmed) {
        return
      }

      const res = await api.delete(`/unit/${id}`)

      setUnits((prev) => prev.filter((unit) => unit._id !== id))

      toast.success("Unit deleted successfully");

    } catch (error) {
      console.log("delete unit error", error)
      toast.error("Failed to delete unit");

    }
  }


  const handleEdit = (unit) => {
    setEditUnitId(unit._id)
    setUpdatedUnitName(unit.unitName)
    setUpdatedUnitNumber(unit.unitNumber)
    setIsEditing(true)
  }

  const handleUpdate = async () => {
    try {
      setIsLoading(true)

      const res = await api.put(`/unit/${editUnitId}`, {
        unitName: updatedUnitName,
        unitNumber: Number(updatedUnitNumber)
      })

      setUnits(prev =>
        prev.map(unit =>
          unit._id === editUnitId ?
            { ...unit, unitName: updatedUnitName, unitNumber: updatedUnitNumber } : unit
        )
      )

      toast.success("Unit updated successfully");


      setIsEditing(false)
      setEditUnitId(null)
      setUpdatedUnitName("")
      setUpdatedUnitNumber("")
      setIsLoading(false)

    } catch (error) {
      console.log("update unit error", error)
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
      setIsLoading(false)

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
            Available <span className="text-purple-500">Units</span>
          </h1>
        </div>

        {
          isEditing && (
            <div className="max-w-2xl mx-auto mb-6 bg-slate-900 border border-purple-500 rounded-xl p-4">
              <h2 className="text-white text-lg mb-3">
                Edit Unit
              </h2>

              <input
                type="number"
                value={updatedUnitNumber}
                onChange={(e) => setUpdatedUnitNumber(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-600"
              />

              <input
                type="text"
                value={updatedUnitName}
                onChange={(e) => setUpdatedUnitName(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-600"
              />

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  disabled={isLoading}
                >
                 {isLoading ? "Updating..." : "Update"}
                </button>

                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditUnitId(null);
                    setUpdatedUnitNumber("")
                    setUpdatedUnitName("");
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
          {units.map((unit) => (
            <div
              key={unit._id}
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
                    {unit.unitNumber}

                  </span>

                </div>


                <div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white break-words">
                    {unit.subjectId?.subjectName} - {unit.unitName}
                  </h2>

                  <p className="text-sm text-purple-300">
                    ({unit.subjectId?.subjectCode})

                  </p>


                </div>
              </div>


              <div className="flex gap-2 w-full lg:w-auto">
                <button
                  onClick={() => handleEdit(unit)}
                  className="flex-1 lg:flex-none flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2
                 text-white hover:bg-purple-800 transition"
                >
                  <FiEdit />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(unit._id)}
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

export default ManageUnit