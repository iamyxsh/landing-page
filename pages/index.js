import React from "react"
import Hero from "../components/Homepage/Hero/Hero"
import { Container } from "@material-ui/core"
import Service from "../components/Homepage/Service/Service"
import Idea from "../components/Homepage/TheIdea/Idea"
import Info from "../components/Homepage/Info/Info"
import Cta from "../components/Homepage/CTA/Cta"

const Home = () => {
	return (
		<Container style={{ padding: "2rem 1rem", margin: "auto" }} maxWidth="xl">
			<Hero />
			<Service />
			<Idea />
			<Info />
			<Cta />
		</Container>
	)
}

export default Home
