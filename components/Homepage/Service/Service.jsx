import React from "react"
import ServiceBlock from "./ServiceBlock"
import Web from "../../../assets/coding.jsx"
import Software from "../../../assets/computer.jsx"
import Ios from "../../../assets/smartphone-call.jsx"

const blocks = [
	{
		title: "Software Development",
		sub: "Save Energy. Save Time. Save Money.",
		body: "Complete digital solutions, from investigation to celebration.",
		link: "/",
		icon: Software,
	},
	{
		title: "iOS/Android Development",
		sub: "Extend Functionality. Extend Access. Increase Engagement.",
		body:
			"Integrate your web experience or create a standalone app with either mobile platform.",
		link: "/",
		icon: Ios,
	},
	{
		title: "Website Development",
		sub: "Reach More. Discover More. Sell More.",
		body: "Optimized for Search Engines, built for Speed",
		link: "/",
		icon: Web,
	},
]

const Service = () => {
	return (
		<>
			{blocks.map((block) => (
				<ServiceBlock block={block} />
			))}
		</>
	)
}

export default Service
