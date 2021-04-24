import { Button, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import React from "react"
import Link from "next/link"

import Web from "../../../assets/coding.jsx"
import Software from "../../../assets/computer.jsx"
import Ios from "../../../assets/smartphone-call.jsx"

const useStyles = makeStyles((theme) => ({
	iconContainer: {
		height: "20rem",
		width: "100%",
	},
}))

const ServiceBlock = ({ block, key }) => {
	const classes = useStyles()

	const { title, link, type, body, sub } = block

	return (
		<Grid container>
			<Grid
				item
				style={{ display: type == "ios" ? "block" : "none" }}
				className={classes.iconContainer}
				xs={4}
			>
				{type === "ios" ? <Ios /> : undefined}
			</Grid>
			<Grid item container justify="space-around" direction="column" xs={6}>
				<Grid item style={{ padding: 0, margin: 0, height: "3rem" }}>
					<Typography variant="h4">{title}</Typography>
				</Grid>
				<Grid item style={{ padding: 0, margin: 0, height: "2rem" }}>
					<Typography variant="subtitle1">{sub}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body">{body}</Typography>
				</Grid>
				<Grid item>
					<Button variant="container">Learn More</Button>
				</Grid>
			</Grid>
			<Grid
				style={{ display: type === "ios" || "web" ? "block" : "none" }}
				item
				className={classes.iconContainer}
				xs={4}
			>
				{type === "web" ? <Web /> : type === "software" ? <Software /> : null}
			</Grid>
		</Grid>
	)
}

export default ServiceBlock
