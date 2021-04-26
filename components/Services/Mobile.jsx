import {
	Grid,
	makeStyles,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core"
import React from "react"
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly"
import Smartphone from "../../assets/smartphone"

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
			fontSize: "3rem",
			textAlign: "center",
		},
	},
	icon: {
		width: "100%",
		height: "100%",
		fill: theme.palette.primary.dark,
	},
}))

const Mobile = () => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

	return (
		<Grid
			container
			alignItems="flex-start"
			className={classes.container}
			directon="column"
		>
			<Grid item xs={12}>
				<Typography variant="h4" className={classes.title}>
					iOS/Android Development
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
			<Grid container item spacing={2} alignItems="center">
				<Grid container item sm={4} md={5} xs={12}>
					<Grid item>
						<Typography variant="h5">Integration</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Accusamus natus nemo repellendus, odit vel reprehenderit ex nisi
							hic, aliquid excepturi dolor nulla inventore quia assumenda ad
							repellat. Nihil veritatis enim in explicabo officiis iure cumque.
						</Typography>
					</Grid>
				</Grid>
				<Grid item md={2} sm={4} xs={12}>
					<Smartphone className={classes.icon} />
				</Grid>
				<Grid container item md={5} sm={4} xs={12}>
					<Grid item>
						<Typography variant="h5">Platform Suport</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Accusamus natus nemo repellendus, odit vel reprehenderit ex nisi
							hic, aliquid excepturi dolor nulla inventore quia assumenda ad
							repellat. Nihil veritatis enim in explicabo officiis iure cumque.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Mobile
