import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { SubtitleLg, TitleXl } from "../components/component.library";
import { gigs } from "../data/gig.data";


const GigCard = ({gig,className,...rest}) => {
  useEffect(() => {
		gsap.fromTo("#content",{
			opacity:0,
			scale:0.7
		},{
			opacity:1,
			scale:1
		})
	},[])

  const date_object = gig.date.split('/')
  const months = {
    '01':'jan',
    '02':'feb',
    '03':'mar',
    '04':'apr',
    '05':'may',
    '06':'jun',
    '07':'jul',
    '08':'aug',
    '09':'sep',
    '10':'oct',
    '11':'nov',
    '12':'dec'
  }
  
  return (
    <div id="content" className={`w-full sm:w-4/5 md:w-[30%] rounded-lg overflow-clip bg-white ${className}`} {...rest}>
      <div className={`h-48 bg-cover bg-center bg-no-repeat relative`} style={{backgroundImage:`url(./img/${gig.img[0]})`}}>
        <div className="w-8 h-8 top-3 right-3 rounded-full absolute bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-all transform">
          <Icon icon="fluent:share-ios-48-filled" className="m-auto"/>
        </div>
        <div className="w-8 h-8 top-3 right-14 rounded-full absolute bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-all transform">
          <Icon icon="ph:map-pin-duotone" className="m-auto "/>
        </div>

        <div className="p-2 top-3 left-3 rounded-lg absolute bg-white">
          <p className="uppercase font-bold">{gig.cost}</p>
        </div>
      </div>
      <div className="flex mt-2 pb-4">
        <div className="w-1/4 flex flex-col items-center">
          <div className="my-auto px-4 py-2">
            <p className="uppercase text-blue-400 font-bold mx-auto text-center">{months[date_object[0]]}</p>
            <p className="font-bold mx-auto mt-2 text-center">{date_object[1]}</p>
          </div>
        </div>
        <div>
          <p className="font-bold hover:text-blue-500 transition-all hover:underline cursor-pointer">{gig.title}</p>
          <p className="text-gray-400 mt-2 font-light w-4/5">{gig.location}</p>
        </div>
      </div>
    </div>
  )
}

export const Gigs = () => {
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
        <div id="content">
          <div>
            <br/>

            <TitleXl>Upcoming Gigs</TitleXl>
            <SubtitleLg className="md:w-3/5">Experience the blues! Our unique style must be experienced in person to fully understand what we do. Don't miss our upcoming shows!</SubtitleLg>

            <div className="flex justify-between my-8">
              <div className="bg-gray-300 flex rounded overflow-clip">
                <Icon icon="twemoji:magnifying-glass-tilted-left" className="my-auto mx-2" />
                <input className="bg-transparent p-2" placeholder="search..."/>
              </div>
              <div>
                <button>weekdays</button>
                <button>free</button>
              </div>
            </div>

            <div className="flex flex-wrap">
              {
                gigs.map((gig,index) => {
                  return (
                    <GigCard key={`gig-${index}`} gig={gig} className="mx-auto my-4"/>
                  )
                })
              }
            </div>
          </div>
        </div>
    )
}