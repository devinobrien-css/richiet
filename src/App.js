import { useState } from "react";
import { About } from "./pages/about.page";
import { Gigs } from "./pages/gigs.page";

const pages = {
  'about':About,
  'gigs':Gigs,
  'shots':About,
  'anotha':About,
  'contact':About
}

function App() {
  const [section,setSection] = useState('about')
  const Section = pages[section]

  return (
    <div className="bg-clr-navy p-8 h-screen max-h-screen">
      <div className="m-4 border-2 border-white rounded-xl p-4 ">
        <div className="flex justify-between">
          <div className="w-1/4 text-white">
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
        <Section />
        
      </div>    
    </div>
  );
}

export default App;
