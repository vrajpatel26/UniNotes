import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Semester from './pages/Semester'
import Subject from './pages/Subject'
import Unit from './pages/Unit'
import Note from './pages/Note'
import Admin from './pages/Admin/Admin'
import AdminSemester from './pages/Admin/AdminSemester'
import AdminSubject from './pages/Admin/AdminSubject'
import AdminUnit from './pages/Admin/AdminUnit'
import AdminNote from './pages/Admin/AdminNote'

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/semester" element={<Semester/>} />
         <Route path="/subject/:semesterId" element={<Subject/>} />
         <Route path="/unit/:subjectId" element={<Unit/>}/>
         <Route path="/note/:unitId" element={<Note/>}/>
         <Route path="/admin" element={<Admin/>} />
         <Route path="/admin/semester" element={<AdminSemester/>}/>
         <Route path="/admin/subject" element={<AdminSubject/>}/>
         <Route path="/admin/unit" element={<AdminUnit/>}/>
         <Route path="/admin/note" element={<AdminNote/>}/>


      </Routes>

   )
}

export default App