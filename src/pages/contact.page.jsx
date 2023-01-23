import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { TitleXl } from "../components/component.library";

export const Contact = () => {
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
			<TitleXl>Reach out to book an event!</TitleXl>
        </div>
    )
}