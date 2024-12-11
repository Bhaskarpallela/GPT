import { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'
import MainContent from './MainContent'
function App() {
  return(
    <>
    <div style={{background:'#212121'}} className='flex h-screen w-full'>
    <Sidebar/>
    <MainContent/>
    </div>
    </>
  )
  }
export default App
