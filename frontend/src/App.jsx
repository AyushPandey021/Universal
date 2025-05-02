import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SocialWall from './controller/SocialWall'
import Testimonials from './controller/Testomonal'
import ContactPage from './controller/ContactPage'
import Home from './controller/Home'
import Courses from './controller/Courses';
import SignUp from './Auth/Signup';
import Login from './Auth/Login';
import Gallery from './controller/Gallery';

const App = () => {
  return (
    <div>  
  <Routes>
    <Route  path='/'  element={<Home/>}></Route>
    <Route  path='/contact'  element={<ContactPage/>}></Route>
    <Route  path='/Courses'  element={<Courses  />}></Route>
    <Route  path='/signup'  element={<SignUp  />}></Route>
    <Route  path='/login'  element={<Login  />}></Route>
    <Route  path='/Gallary'  element={<Gallery  />}></Route>
  </Routes>
    </div>
  )
}

export default App
