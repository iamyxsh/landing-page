import React from "react"
import HeroAnim from "./HeroAnim"
import { makeStyles } from "@material-ui/core/styles"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Button, Container, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	freeEstimate: {
		...theme.mixins.buttonPrim,
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
			height: "4rem",
			margin: "0.5rem",
		},
	},
	button: {
		...theme.mixins.buttonSec,
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
			height: "4rem",
			margin: "0.5rem",
		},
	},
	heroText: {
		[theme.breakpoints.down("md")]: {
			fontSize: "3.8rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "3rem",
		},
	},
}))

const Hero = () => {
	const classes = useStyles()

	return (
		<Container maxWidth="xl">
			<Grid container>
				<Grid
					container
					item
					style={{ margin: "auto" }}
					spacing={3}
					justify="space-around"
					alignItems="center"
					sm={8}
					xs={12}
				>
					<Grid item xs={12}>
						<Typography className={classes.heroText} variant="h2">
							Bringing Silicon Valley Technology to India.
						</Typography>
					</Grid>
					<Grid
						container
						style={{ marginRight: "auto" }}
						alignItems="center"
						justify="space-around"
						item
						xl={8}
						md={8}
						xs={12}
					>
						<Grid item lg={4} md={5} sm={4} xs={5}>
							<Button
								className={classes.freeEstimate}
								color="secondary"
								variant="contained"
							>
								<Typography variant="button">Free Estimate</Typography>
							</Button>
						</Grid>
						<Grid item lg={4} md={5} sm={4} xs={5}>
							<Button
								endIcon={<ArrowForwardIcon />}
								className={classes.button}
								variant="contained"
							>
								<Typography>Learn More</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm={4} xs={12}>
					<HeroAnim />
				</Grid>
			</Grid>
		</Container>
	)
}

export default Hero
