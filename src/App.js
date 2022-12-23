import { useState } from "react";





const Carousel = () => {
  const [index,setIndex] = useState()
  
  return (
    <div className="w-2/3 my-8 flex overflow-hidden">
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
      <div className="border rounded h-48 w-48 my-auto"></div>
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
      <div className="border rounded h-48 w-48 scale-75 my-auto"></div>
    </div>
  )
}



function App() {
  const [section,setSection] = useState('about')

  return (
    <div className="bg-clr-navy h-screen border">
      <div className="m-8 border-2 border-white rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-1/4">
            LOGO
          </div>
          <div className="w-1/2 flex justify-evenly">
            <p onClick={()=>setSection('about')} className={`transition-all cursor-pointer border-t-2 ${section==='about'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>about</p>
            <p onClick={()=>setSection('gigs')} className={`transition-all cursor-pointer border-t-2 ${section==='gigs'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>gigs</p>
            <p onClick={()=>setSection('shots')} className={`transition-all cursor-pointer border-t-2 ${section==='shots'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>shots</p>
            <p onClick={()=>setSection('anotha')} className={`transition-all cursor-pointer border-t-2 ${section==='anotha'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>anotha</p>
            <p onClick={()=>setSection('contact')} className={`transition-all cursor-pointer border-t-2 ${section==='contact'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>contact</p>
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="p-8 mt-24 w-7/12">
          <div>
            <p className="text-white text-7xl font-light">This months</p>
            <p className="text-white text-7xl ">Crowd Gathering gigs !</p>

            <p className="text-gray-500 py-4">
              Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Molestias nostrum veniam 
              eaque molestiae, eligendi quod nam voluptate 
              velit quaerat corporis!
            </p>

            <div className="">
              <button className="rounded-3xl bg-clr-red text-white text-lg py-2 px-8">Listen Now</button>
              <button className="rounded-3xl bg-clr-red text-white text-lg py-2 px-8 ml-8">What's Next</button>
            </div>
          </div>

          <Carousel />

        </div>
      </div>

        
    </div>
  );
}

export default App;
