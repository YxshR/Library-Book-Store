import React from 'react'
import Homee from './Home/Homee'
import { Route, Routes } from "react-router-dom"
import Books from './Books/Books'

const App = () => {
  return (
    <>
        <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
        </div>
    </>
  )
}

export default App