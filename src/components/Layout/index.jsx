import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './Layout.scss'
export default function index() {
  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}
