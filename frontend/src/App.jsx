import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Semester from './pages/Semester'
import Subject from './pages/Subject'
import Unit from './pages/Unit'
import Note from './pages/Note'

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


      </Routes>

   )
}

export default App