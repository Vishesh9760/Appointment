import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contect from './pages/Contect';
import MyPofile from './pages/MyPofile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/my-profile' element={<MyPofile />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;