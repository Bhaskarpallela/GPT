import { useState } from "react"
//import Icon from "./SidebarIcon"
export default function Sidebar(){
  const [sideToggle,setsideToggle]=useState(true)
  function changeToggle(){
    setsideToggle((prevState)=> !prevState)
    
  }
  function MyIconComponent() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-6"
        onClick={changeToggle}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    );
  }
  
    return(
      <div className={`${
        sideToggle ? "w-64" : "w-0"
      } transition-all duration-300 col-span-1 h-screen bg-black overflow-hidden`}>

        <div className="fixed p-3 hover:bg-stone-700"><MyIconComponent/></div>
        </div>
    )
}