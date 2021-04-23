import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light} , ${theme.palette.primary.dark} )`,
		color: "white",
		minHeight: "20vh",
		marginTop: "auto",
		padding: "2rem 2rem 2rem 10vw",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}))

const Footer = () => {
	const classes = useStyles()

	return (
		<footer>
			<Grid
				container
				className={classes.footer}
				xs={12}
				justify="space-between"
			>
				<Grid item container xs={1}>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Home
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" xs={3} spacing={2}>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Services
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Web Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							iOS/Android Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Software Development
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" xs={2} spacing={2}>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							The IDEA
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Vision
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Technologies
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" xs={2} spacing={2}>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							About Us
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							History
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component={Link} href="/">
							Team
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" xs={1} spacing={2}>
					<Grid item>
						<Typography
							style={{ textAlign: "left" }}
							variant="subtitle1"
							component={Link}
							href="/"
						>
							Contact Us
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	)
}

export default Footer
