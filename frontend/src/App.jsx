import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>   
    </>
  )
}

export default App