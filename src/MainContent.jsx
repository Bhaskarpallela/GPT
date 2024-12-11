import Search from "./components/input"
export default function MainContent(){
    return(
      
       <div className="flex-1 content-center" >
       <div className="gap-8" style={{ display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       
       <Search/>
       </div>
       </div>  
    )
}