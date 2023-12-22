import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/navbar'

import Autolender from './components/autolender/Autolender'
import Loanscheme from './components/loanscheme/Loanscheme'
import Gallery from './components/gallery/Gallery'
import Login from './components/loginsignup/Login'
import Signup from './components/loginsignup/Signup'

import Modelai from './components/aimodel/Modelai'

import Error from './components/error/Error'

import Footer from './components/footer/Footer'


const App = () => {
  return (

    <div>

      <Router>

        <Navbar />

        <Routes>

          <Route path='/' element={<Autolender />} />
          <Route path='/loanscheme' element={<Loanscheme />} />
          {/* //no space in element */}
          
          <Route path='/modelai' element={<Modelai />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/*' element={<Error />} />

        </Routes>

        <Footer />

      </Router>

    </div >

  )
}

export default App