import React from 'react'
import Home from './pages/Home'
import Event from './pages/Event'
import Login from './pages/Login'
import EventDetails from './pages/EventDetails'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/event' element = {<Event/>} />
        <Route path='/event/:eventId' element = {<EventDetails/>} />
      </Routes>
    </div>
  )
}

export default App