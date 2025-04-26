import React from 'react'
import {BrowserRouter,Routes, Route, UNSAFE_DataRouterStateContext} from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import Profileupdate from './pages/Profileupdate/Profileupdate'
import { ToastContainer, toast } from 'react-toastify';


const App=() =>{
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/chat' element={<Chat/>}/>
<Route path='/profile' element={<Profileupdate></Profileupdate>}/>
      </Routes>
      
      </BrowserRouter>
  )
}

export default App

