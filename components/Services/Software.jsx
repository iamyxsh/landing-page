import { Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"

import { EmojiObjects, AccessAlarms, LocalAtm } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	container: {
		width: "95vw",
		minHeight: "65vh",
		margin: "2rem auto",
	},
	body: {
		margin: "1rem 0 5rem",
		[theme.breakpoints.down("xs")]: {
			textAlign: "center",
		},
	},
	title: {
		[theme.breakpoints.down("xs")]: {
			fontSize: "3.5rem",
			textAlign: "center",
		},
	},
	iconHeader: {
		fontSize: "1.5rem",
		fontWeight: 600,
		[theme.breakpoints.down("xs")]: {
			fontSize: "2.5rem",
		},
	},
	icon: {
		fontSize: "5rem",
		fill: theme.palette.secondary.light,
		[theme.breakpoints.down("xs")]: {
			fontSize: "10rem",
		},
	},
}))

const Software = () => {
	const classes = useStyles()

	return (
		<Grid
			container
			alignItems="flex-start"
			className={classes.container}
			directon="column"
		>
			<Grid item xs={12}>
				<Typography variant="h4" className={classes.title}>
					Custom Software
				</Typography>
			</Grid>
			<Grid item lg={6} md={8} sm={10} xs={12} className={classes.body}>
				<Typography variant="body1">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nobis
					itaque atque, exercitationem ullam, sunt repellendus ut pariatur
					nostrum dignissimos deserunt! Id repellat accusantium officia
					dignissimos reprehenderit exercitationem sequi quam tenetur nihil
					aspernatur, necessitatibus atque nostrum commodi. Rem quidem veritatis
					enim tempora accusantium! Voluptas possimus reprehenderit magni earum
					deserunt nostrum!
				</Typography>
			</Grid>
			<Grid
				item
				lg={8}
				md={10}
				xs={12}
				container
				spacing={2}
				style={{ margin: "0 auto" }}
				direction="row"
				justify="space-around"
			>
				<Grid
					item
					container
					xs={12}
					sm={4}
					direction="column"
					alignItems="center"
				>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							Save Energy
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							<EmojiObjects className={classes.icon} />
						</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					container
					xs={12}
					sm={4}
					direction="column"
					alignItems="center"
				>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							Save Time
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							<AccessAlarms className={classes.icon} />
						</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					container
					xs={12}
					sm={4}
					direction="column"
					alignItems="center"
				>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							Save Money
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4" className={classes.iconHeader}>
							<LocalAtm className={classes.icon} />
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Software
