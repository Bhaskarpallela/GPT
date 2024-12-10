import './inp.css'
export default function Search(){
    return(
        <div className="flex-col w-[768px] h-[96px] rounded-3xl" style={{background:'#2f2f2f'}}>
        <div><input id='inp' type="text" placeholder="Message ChatGpt" className="m-4 w-[700px] border-0 " style={{background:"#2f2f2f"}}/></div>
        <div></div>
        </div>
    )
}