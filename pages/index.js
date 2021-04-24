import React from "react"
import Hero from "../components/Homepage/Hero/Hero"
import { Container } from "@material-ui/core"
import Service from "../components/Homepage/Service/Service"

const Home = () => {
	return (
		<Container style={{ padding: "2rem 1rem", margin: "auto" }} maxWidth="xl">
			<Hero />
			<Service />
		</Container>
	)
}

export default Home
