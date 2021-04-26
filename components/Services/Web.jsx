import {
	Grid,
	makeStyles,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core"
import React from "react"
import AnalyticsSvg from "../../assets/dollar-analysis-bars-chart"
import Outreach from "../../assets/promotion"

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
		fill: theme.palette.secondary.light,
	},
}))

const Web = () => {
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
					Web Development
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
				container
				item
				xs={12}
				justify="space-around"
				style={{ margin: "auto" }}
				spacing={matchesXS ? 10 : undefined}
			>
				<Grid item container xs={12} lg={5} alignItems="center" spacing={4}>
					<Grid item xs={12} sm={6}>
						<AnalyticsSvg className={classes.icon} />
					</Grid>
					<Grid container direction="column" item xs={12} sm={6} md={6}>
						<Grid item>
							<Typography variant="h5">Analytics</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" style={{ marginTop: "0.5rem" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, blanditiis distinctio temporibus inventore autem
								minus ab repellendus voluptate qui perferendis?
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container xs={12} lg={5} alignItems="center" spacing={4}>
					<Grid container direction="column" sm={6} item xs={12}>
						<Grid item>
							<Typography variant="h5">Outreach</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" style={{ marginTop: "0.5rem" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, blanditiis distinctio temporibus inventore autem
								minus ab repellendus voluptate qui perferendis?
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Outreach className={classes.icon} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Web
