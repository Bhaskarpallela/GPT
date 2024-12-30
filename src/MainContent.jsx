import Search from "./components/input"
import Compo from "./components/compo"
import Footer from "./footer"
import { useState } from "react"
import { SideAtom } from "./components/Recoilatom"
import { useRecoilState } from "recoil"
import Topbar from "./Topbar"

export default function MainContent(){
    
    return(
      <div className="flex-1">
      <div className="flex-col">
      <div className="h-[62px] flex-row">
      <Topbar/>
      </div>
      <div className="flex-1 pt-48 text-center font-semibold text-white text-3xl  mb-7"><h1>What can I help with?</h1></div>
      <div className="mt-6"><Search/></div>
      <Compo/>
      <div className="flex-1">
      <Footer/>
      </div>
    
      </div>
      </div>
   
     
    )
}