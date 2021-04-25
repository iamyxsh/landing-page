import { Button, Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import React from "react"
import Link from "next/link"

import Web from "../../../assets/coding.jsx"
import Software from "../../../assets/computer.jsx"
import { ArrowForward } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "2rem",
		[theme.breakpoints.down("sm")]: {
			padding: "0.2rem",
		},
	},
	learnMore: {
		...theme.mixins.buttonSec,
		width: "10rem",
		height: "2.5rem",
		fontSize: "1rem",
		fontWeight: 400,
	},
}))

const ServiceBlock1 = ({ block }) => {
	const classes = useStyles()

	const { title, link, type, body, sub } = block

	return (
		<>
			<Grid
				className={classes.container}
				item
				container
				direction="column"
				lg={5}
				md={6}
				sm={9}
				xs={12}
			>
				<Grid item>
					<Typography variant="h4">{title}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1">{sub}</Typography>
				</Grid>
				<Grid item style={{ margin: "1rem 0 1.5rem" }}>
					<Typography variant="body">{body}</Typography>
				</Grid>
				<Grid item>
					<Link href={link}>
						<Button
							className={classes.learnMore}
							variant="contained"
							endIcon={<ArrowForward />}
						>
							Learn More
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid
				style={{
					display:
						type === "software" ? "block" : type === "web" ? "block" : "none",
				}}
				item
				className={classes.iconContainer}
				style={{
					margin: type === "web" ? "2rem 0" : undefined,
				}}
				md={2}
				sm={3}
				xs={12}
			>
				{type === "web" ? <Web /> : type === "software" ? <Software /> : null}
			</Grid>
			<Divider />
		</>
	)
}

export default ServiceBlock1
