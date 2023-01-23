import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { TitleXl } from "../components/component.library";
import { gigs } from "../data/gig.data";

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
      title:'The Late Late'
    },
    {
      title:'Stitch'
    },
    {}
  ]
  
  
  const Carousel = () => {
    const [current,setIndex] = useState(0)
    
    return (
		<div className="relative">
			<div 
				className="text-white absolute top-1/2 cursor-pointer" 
				onClick={()=>{
					if(current >= 0)
						setIndex(current-1)
				}}
			>
			<Icon icon="material-symbols:arrow-back-ios-new-rounded" />
			</div>
			<div 
				className="text-white absolute top-1/2 cursor-pointer right-0"
				onClick={()=>{
					if(current<events.length-4)
						setIndex(current+1)
				}}
			>
				<Icon icon="material-symbols:arrow-forward-ios-rounded" />
			</div>
			
			<div className="w-4/5 my-8 flex overflow-hidden no-wrap mx-auto">
				{
					gigs.map((gig,index) => {
						//   const translate =  `-translate-x-[${current*100}%]`
						const scale = index===current+1?'scale-100':'scale-75'
						return (
							<div key={index} style={{transform:`translateX(-${current*100}%)`, backgroundImage:`url(./img/${gig.img[0]})`}} className={`transition-all transform bg-cover bg-no-repeat rounded h-32 flex items-center w-1/3 my-auto shrink-0 scale-95 ${index===events.length-1?'hidden':''}`}>
							</div>      
						)
					})
				}
			</div>
		</div>
    )
}

const AboutPhoto = ({className}) => {
	useEffect(() => {
		gsap.fromTo("#content",{
			opacity:0,
			scale:0.7
		},{
			opacity:1,
			scale:1
		})
	},[])

    useLayoutEffect(() => {
      gsap.fromTo("#circle-image",{
        opacity:0.8
      },{
        opacity:0.3,
        duration:4,
        repeat:-1,
        yoyo:true
      })
    },[])
  
    return (
      <svg id="content" viewBox="0 0 850 889" fill="none" className={`${className}`}>
        <ellipse cx="456.5" cy="259" rx="258.5" ry="259" fill="#F95C75" fillOpacity="0.98"/>
        <circle cx="245.5" cy="352.5" r="245.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <circle cx="745.5" cy="798.5" r="52.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <circle cx="599.5" cy="806.5" r="52.5" fill="#F95C75" fillOpacity="0.98"/>
        <ellipse cx="812" cy="723.5" rx="31" ry="30.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <ellipse cx="831" cy="624" rx="19" ry="21" fill="#EDC1C8" fillOpacity="0.98"/>
        <ellipse cx="715" cy="687.5" rx="31" ry="30.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <ellipse cx="460" cy="851.5" rx="31" ry="30.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <ellipse cx="630" cy="858.5" rx="31" ry="30.5" fill="#EDC1C8" fillOpacity="0.98"/>
        <ellipse cx="806" cy="621.5" rx="25" ry="23.5" fill="#F95C75" fillOpacity="0.98"/>
        <ellipse cx="709" cy="710.5" rx="25" ry="23.5" fill="#F95C75" fillOpacity="0.98"/>
        <rect x="106" y="107" width="700" height="699" rx="349.5" fill="url(#pattern0)"/>
  
  
        <g clipPath="url(#circle-clip)" transform="translate(0 150)" >
          <image href="./img/main.jpg" width="1186" height="697" filter="url(#discrete)" />
        </g>
        <g clipPath="url(#circle-clip)" transform="translate(0 150)" >
          <image href="./img/main.jpg" width="1186" height="697" id="circle-image" />
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
          <circle id="circle" cx="450" cy="350" r="350" vectorEffect="non-scaling-stroke"/>
          <clipPath id="circle-clip">
            <use href="#circle"/>
          </clipPath>
        </defs>
      </svg>
  
    )
}

export const About = () => {
  	useEffect(() => {
		gsap.fromTo("#content",{
			opacity:0,
			scale:0.7
		},{
			opacity:1,
			scale:1
		})
	},[])

    return (
        <div id="content" className="md:flex">
			<div className="md:p-8 mt-4 md:mt-24 md:w-11/12">
				<div className="">
					<TitleXl>Rich Townsend & The Nightrain</TitleXl>

					<p className="text-gray-500 py-4">
						We're Rich Townsend and the Nightrain- a blues, jazz and rock n' roll band based in New York. Get groovy with us! You won't be disappointed!
					</p>
					<div className="sm:flex sm:items-center sm:justify-evenly md:block">
						<AboutPhoto className="md:w-0 w-full max-w-[400px]" />

						<div className="md:flex flex-nowrap justify-evenly">
							<button className="rounded-3xl bg-clr-red text-white text-lg py-2 px-8 md:m-0 mx-auto block my-2">Listen Now</button>
							<button className="rounded-3xl bg-clr-red text-white text-lg py-2 px-8 md:m-0 mx-auto block my-2">What's Next</button>
						</div>
					</div>
				</div>
				<Carousel />
			</div>
          <AboutPhoto  className="md:w-full w-0"/>
        </div>
    )
}