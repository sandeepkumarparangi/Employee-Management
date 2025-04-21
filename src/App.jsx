import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  

  return (
    <>
   
      <HeaderComponent />
       <Routes>
         <Route path='/' element = {<ListEmployeeComponent />} />
         <Route path='/employee' element = {<ListEmployeeComponent />} />
         <Route path='/add-employee' element={<EmployeeComponent />} />
         <Route path='/editemployee/:id' element={<EmployeeComponent />} />
         {/* <Route path='/deleteemployee/:id' element={<ListEmployeeComponent />} /> */}
       </Routes>
      
      <FooterComponent />
    
    </>
  )
}

export default App
