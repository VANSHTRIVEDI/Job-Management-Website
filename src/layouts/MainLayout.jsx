import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from '../components/ScrollToTop'
const MainLayout = () => {
  return (
    <>
     <Navbar/>
     <ScrollToTop/>
     <Outlet/>
     <ToastContainer/>
    </>
   
  )
}

export default MainLayout
