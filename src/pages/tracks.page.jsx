import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect } from "react";
import { SubtitleLg, TitleMd, TitleXl } from "../components/component.library";
import { gigs } from "../data/gig.data";

const Album = () => {
	return (
		<div>
			<img src="../img/groovy-piano-icon.png" alt="piano keys icon" className="block w-48 rounded-lg"/>
			<p className="text-gray-300 text-center">Album Title</p>
			<p className="text-gray-600 text-center">2021</p>
		</div>
	)
}

const Song = () => {
	return (
		<div className="w-full sm:w-[40%] md:w-[30%] mx-auto my-2 bg-gray-700 flex justify-between rounded">
			<div className="flex p-1">
				<img src="../img/groovy-piano-icon.png" alt="piano keys icon" className="block w-12 scale-125 rounded-lg"/>
				<div className="pl-4">
					<p className="text-white">Song Title</p>
					<p className="text-gray-300">Artist</p>
				</div>
			</div>
			<Icon icon="mdi:dots-vertical"  className="text-gray-200 my-auto mx-4"/>
		</div>
	)
}

export const Tracks = () => {

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
            <br/>
            <TitleXl>Songs, Albums and More...</TitleXl>
            <SubtitleLg>Lorem ipsum dolor sit amet consectetur adipisicing elit. </SubtitleLg>
            <br/>
            <br/>
			<TitleMd>Albums</TitleMd>
			<div className="flex flex-wrap p-2">
				<Album />
			</div>
			<TitleMd>Songs</TitleMd>
			<div className="flex flex-wrap p-2">
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
			</div>
			<TitleMd>Music Videos</TitleMd>
        </div>
    )
}