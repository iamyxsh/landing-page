import { Grid, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100vw",
		height: "100vh",
	},
}))

const Cta = () => {
	const classes = useStyles()
	return (
		<Grid container className={clsx(classes.container, "cta-container")}>
			<Grid item></Grid>
		</Grid>
	)
}

export default Cta
