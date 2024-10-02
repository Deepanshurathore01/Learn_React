import { useState } from "react"


function App() {
  const [color,setColor] =useState("black");

  return (
    <>
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}
   >
     <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=> setColor("red")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=> setColor("green")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=> setColor("blue")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=> setColor("pink")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=> setColor("yellow")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=> setColor("orange")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=> setColor("powderblue")} className="outline-none px-2 py-3 rounded-full"
        style={{backgroundColor:"powderblue"}}>powderblue</button>
      </div>
     </div>
   </div>
    </>
  )
}

export default App
