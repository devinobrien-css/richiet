import { Icon } from "@iconify/react";
import { useState } from "react";


const events = [
  {
    title:'Playing on the Porch',
    location:''
  },
  {
    title:'Swingbellies',
    location:''
  },
  {
    title:'The Bitter End',
    location:''
  },
  {
    title:'Terra Blues',
    location:''
  },
  {
    title:'event4'
  },
  {
    title:'event5'
  },
  {}
]


const Carousel = () => {
  const [current,setIndex] = useState(0)

  console.log(current)
  
  return (
    <div className="relative">
      <div 
        className="text-white absolute border top-1/2" 
        onClick={()=>{
          if(current >= 0)
            setIndex(current-1)
        }}
      >
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
      </div>
      <div 
        className="text-white absolute border top-1/2 right-0"
        onClick={()=>{
          if(current<events.length-3)
            setIndex(current+1)
        }}
      >
        <Icon icon="material-symbols:arrow-forward-ios-rounded" />
      </div>
      
      <div className="w-4/5 my-8 flex overflow-hidden no-wrap mx-auto">
        {
          events.map((event,index) => {
            const translate =  `-translate-x-[${current*100}%]`

            return (
              <div key={index} className={`transition-all transform border rounded h-32 flex items-center w-1/3 scale-75 my-auto shrink-0 ${translate} ${index===current+1?'scale-100':'scale-75'} ${index===events.length-1?'hidden':''}`}>
                <p className="text-white mx-auto">{event.title}</p>
              </div>      
            )
          })
        }
      </div>
    </div>
  )
}



function App() {
  const [section,setSection] = useState('about')

  

  return (
    <div className="bg-clr-navy p-8">
      <div className="m-4 border-2 border-white rounded-xl p-4">
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

        <div className="md:flex">
          <div className="p-8 mt-24 md:w-7/12">
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
    </div>
  );
}

export default App;
