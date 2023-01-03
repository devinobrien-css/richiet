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


const AboutPhoto = () => {
  return (
    <svg width="850" height="889" viewBox="0 0 850 889" fill="none">
      <ellipse cx="456.5" cy="259" rx="258.5" ry="259" fill="#F95C75" fill-opacity="0.98"/>
      <circle cx="245.5" cy="352.5" r="245.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <circle cx="745.5" cy="798.5" r="52.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <circle cx="599.5" cy="806.5" r="52.5" fill="#F95C75" fill-opacity="0.98"/>
      <ellipse cx="812" cy="723.5" rx="31" ry="30.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <ellipse cx="831" cy="624" rx="19" ry="21" fill="#EDC1C8" fill-opacity="0.98"/>
      <ellipse cx="715" cy="687.5" rx="31" ry="30.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <ellipse cx="460" cy="851.5" rx="31" ry="30.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <ellipse cx="630" cy="858.5" rx="31" ry="30.5" fill="#EDC1C8" fill-opacity="0.98"/>
      <ellipse cx="806" cy="621.5" rx="25" ry="23.5" fill="#F95C75" fill-opacity="0.98"/>
      <ellipse cx="709" cy="710.5" rx="25" ry="23.5" fill="#F95C75" fill-opacity="0.98"/>
      <rect x="106" y="107" width="700" height="699" rx="349.5" fill="url(#pattern0)"/>


      <g clip-path="url(#circle-clip)" transform="translate(0 150)" >
        <image href="./img/main.jpg" width="1186" height="697" filter="url(#discrete)" />
      </g>
      <g style={{mixBlendMode:"color-burn"}}>
        <rect x="106" y="107" width="700" height="699" rx="349.5" fill="url(#pattern1)"/>
      </g>
      <circle x="0" y="0" width="1000" height="1000" fill="url(#image)"/>
      <defs>
        <filter id="gamma">
            <feComponentTransfer>
                <feFuncR type="gamma" amplitude="2" exponent="1"/>
                <feFuncG type="gamma" amplitude="2" exponent="3"/>
                <feFuncB type="gamma" amplitude="2" exponent="1"/>
            </feComponentTransfer>
        </filter>
        <filter id="discrete">
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 .5 1 1"/>
            <feFuncG type="discrete" tableValues="0  5 1"/>
            <feFuncB type="discrete" tableValues="0 .5 1 1"/>
          </feComponentTransfer>
        </filter>
        <circle id="circle" cx="450" cy="350" r="350" vector-effect="non-scaling-stroke"/>
        <clipPath id="circle-clip">
          <use href="#circle"/>
        </clipPath>
      </defs>
    </svg>

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
          <AboutPhoto />
        </div>
      </div>    
    </div>
  );
}

export default App;
