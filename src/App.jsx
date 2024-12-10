import { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'
import MainContent from './MainContent'
function App() {
  return (
    <>
    <div style={{background:'rgba(33,33,33,255)'}} className='grid grid-cols-2 h-screen w-full '>
    <Sidebar/>
    <MainContent/>
    </div>
    </>
  )
  }
export default App
