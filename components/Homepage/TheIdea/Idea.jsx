import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles((theme) => ({
	container: {
		height: "auto",
		width: "100vw",
		padding: "5rem",
		textAlign: "center",
		margin: "auto",
		backgroundImage: `linear-gradient(-45deg,${theme.palette.primary.light}, white)`,
		[theme.breakpoints.down("sm")]: {
			padding: "5rem 0.5rem",
		},
	},
	card: {
		padding: "5rem 3rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1rem 0.5rem",
		},
	},
	button: {
		...theme.mixins.buttonSec,
		width: "50%",
		maxWidth: "25rem",
		minWidth: "15rem",
		fontSize: "1.5rem",
		fontWeight: 400,
		margin: "2rem auto 0",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			minWidth: "10rem",
		},
	},
}))

const Idea = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.container}>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="h3">The IDEA</Typography>
					<Typography variant="subtitle2">
						The idea we have to revolutionize the web development scene.
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						className={classes.button}
						endIcon={<ArrowForward />}
					>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default Idea
