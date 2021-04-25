import {
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import React from "react"
import Link from "next/link"

import Ios from "../../../assets/smartphone-call.jsx"
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

const ServiceBlock2 = ({ block }) => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

	const { title, link, type, body, sub } = block

	return (
		<Grid container spacing={4} className={classes.container}>
			<Grid
				item
				style={{
					marginLeft: "auto",
					display: matchesXS ? "none" : "block",
				}}
				className={classes.iconContainer}
				md={2}
				sm={3}
			>
				{type === "ios" ? <Ios /> : undefined}
			</Grid>
			<Grid
				item
				container
				justify="space-around"
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
					<Typography variant="body1">{body}</Typography>
				</Grid>
				<Grid item>
					<Link href={link}>
						<Button
							endIcon={<ArrowForward />}
							className={classes.learnMore}
							variant="contained"
						>
							Learn More
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid
				item
				style={{
					marginLeft: "auto",
					display: matchesXS ? "block" : "none",
				}}
				className={classes.iconContainer}
				xs={12}
			>
				{type === "ios" ? <Ios /> : undefined}
			</Grid>
		</Grid>
	)
}

export default ServiceBlock2
