import { Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { ArrowBack, ArrowForward } from "@material-ui/icons"
import clsx from "clsx"
import React from "react"

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		width: "100vw",
		padding: "2rem",
	},
	title: {
		color: "white",
	},
	button: {
		...theme.mixins.buttonSec,
		borderRadius: 20,
		width: "9.5rem",
		fontSize: "1rem",
		fontWeight: 400,
	},
}))

const Info = () => {
	const classes = useStyles()

	return (
		<Grid
			container
			alignItems="center"
			className={clsx(classes.container, "info-container")}
		>
			<Grid container direction="column" item xs={6}>
				<Grid item>
					<Typography className={classes.title} variant="h4">
						About Us
					</Typography>
				</Grid>
				<Grid item style={{ marginBottom: "1rem" }} xs={12}>
					<Typography className={classes.title} variant="subtitle1">
						Let's get personal. 👋🏻
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<ArrowBack />}
					>
						Learn More
					</Button>
				</Grid>
			</Grid>
			<Grid container direction="column" item xs={6}>
				<Grid item style={{ marginLeft: "auto" }}>
					<Typography className={classes.title} variant="h4">
						Contact Us
					</Typography>
				</Grid>
				<Grid item style={{ marginBottom: "1rem", marginLeft: "auto" }} xs={12}>
					<Typography className={classes.title} variant="subtitle1">
						Let's have a chat. 🤙🏻
					</Typography>
				</Grid>
				<Grid item style={{ marginLeft: "auto" }} xs={12}>
					<Button
						variant="contained"
						className={classes.button}
						endIcon={<ArrowForward />}
					>
						Learn More
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Info
