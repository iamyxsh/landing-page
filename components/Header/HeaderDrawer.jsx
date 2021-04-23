import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { SwipeableDrawer, Tabs, Tab } from "@material-ui/core"
import HeaderTabs from "./HeaderTabs"

const useStyles = makeStyles((theme) => ({
	drawer: {
		backgroundColor: theme.palette.primary.main,
		[theme.breakpoints.down("xs")]: {
			minWidth: "50vw",
		},
	},
}))

const HeaderDrawer = ({ tab, open, setOpen }) => {
	const classes = useStyles()

	return (
		<SwipeableDrawer
			classes={{ paper: classes.drawer }}
			anchor="left"
			open={open}
			onClose={() => setOpen(false)}
		>
			<HeaderTabs tab={tab} type="drawer" />
		</SwipeableDrawer>
	)
}

export default HeaderDrawer
