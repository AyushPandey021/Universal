import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ContactPage from './controller/ContactPage'
import Home from './controller/Home'
import Courses from './controller/Courses';
import SignUp from './Auth/Signup';
import Login from './Auth/Login';

import PhotoGallery from './controller/PhotoGallery';
import EnrollForm from './controller/EnrollForm';

const App = () => {
  return (
    <div>  
  <Routes>
    <Route  path='/'  element={<Home/>}></Route>
    <Route  path='/contact'  element={<ContactPage/>}></Route>
    <Route  path='/Courses'  element={<Courses  />}></Route>
    <Route  path='/signup'  element={<SignUp  />}></Route>
    <Route  path='/login'  element={<Login  />}></Route>
    <Route  path='/Gallary'  element={<PhotoGallery  />}></Route>
    <Route  path='/enrollment'  element={<EnrollForm  />}></Route>
  </Routes>
    </div>
  )
}

export default App
