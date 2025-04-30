import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SocialWall from './controller/SocialWall'
import Testimonials from './controller/Testomonal'
import ContactPage from './controller/ContactPage'
import Home from './controller/Home'
import Courses from './controller/Courses';
const App = () => {
  return (
    <div>  
  <Routes>
  <Route  path='/'  element={<Home/>}></Route>
    <Route  path='/contact'  element={<ContactPage/>}></Route>
    <Route  path='/testimonials'  element={<Testimonials/>}></Route>
    <Route  path='/socialwall'  element={<SocialWall  />}></Route>
    <Route  path='/Courses'  element={<Courses  />}></Route>
  
  </Routes>
    </div>
  )
}

export default App
