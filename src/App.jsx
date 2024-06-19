import { useState } from 'react'


function App() {
  const [color , setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white'style={{backgroundColor:"red"}} >
          RED</button>
        <button onClick={()=>setColor("olive")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"olive"}}>
          OLIVE</button>
        <button onClick={()=>setColor("purple")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"purple"}}>
          PURPLE</button>
        <button onClick={()=>setColor("blue")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"blue"}}>
          BLUE</button>
        <button onClick={()=>setColor("black")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"black"}}>
          BLACK</button>
        <button onClick={()=>setColor("yellow")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"yellow"}}>
          YELLOW</button>
        <button onClick={()=>setColor("pink")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"pink"}}>
          PINK</button>  

      </div>
    </div>
   </div>
  )
}

export default App

// on click function h isliye ase pass kiye
// hr button p on click lga skte or uspe function hoga jo state pass krega using props 