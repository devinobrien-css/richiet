import gsap from "gsap";
import { useEffect, useState } from "react";
import { About } from "./pages/about.page";
import { Contact } from "./pages/contact.page";
import { Gigs } from "./pages/gigs.page";
import { Tracks } from "./pages/tracks.page";

const pages = {
  'about':About,
  'gigs':Gigs,
  'tracks':Tracks,
  'contact':Contact
}

function App() {
  const [section,setSection] = useState('about')
  const Section = pages[section]

  return (
    <div className="bg-clr-navy p-2 md:p-4 min-h-screen">
      <div className="m-4 border-2 border-white rounded-xl p-4 ">
        <div className="flex justify-between">
          <div className="w-full flex justify-evenly">
            <p onClick={()=>setSection('about')} className={`transition-all cursor-pointer border-t-2 ${section==='about'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>about</p>
            <p onClick={()=>setSection('gigs')} className={`transition-all cursor-pointer border-t-2 ${section==='gigs'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>gigs</p>
            <p onClick={()=>setSection('tracks')} className={`transition-all cursor-pointer border-t-2 ${section==='tracks'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>tracks</p>
            <p onClick={()=>setSection('contact')} className={`transition-all cursor-pointer border-t-2 ${section==='contact'?'text-clr-red border-clr-red':'text-white border-transparent'}`}>contact</p>
          </div>
        </div>
        <Section />
      </div>    
    </div>
  );
}

export default App;
