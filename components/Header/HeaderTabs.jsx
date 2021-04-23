import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Tabs, Tab, Button } from "@material-ui/core"
import Link from "next/link"

import routes from "../../constants/routes"

const useStyles = makeStyles((theme) => ({
	tab: {
		...theme.mixins.tabs,
	},
	tabActive: {
		...theme.mixins.tabs,
		opacity: 1,
	},
	tabContainer: {
		marginLeft: "auto",
		backgroundColor: theme.palette.primary.main,
		color: "white",
	},
}))

const HeaderTabs = ({ tab, matchesMD, type }) => {
	const classes = useStyles()

	return (
		<Tabs
			value={tab}
			aria-label="simple tabs example"
			orientation={type === "drawer" ? "vertical" : "horizantal"}
			indicatorColor="primary"
			variant="fullWidth"
			className={classes.tabContainer}
			style={{ display: matchesMD ? "none" : "block" }}
		>
			{routes.map((route, ind) => (
				<Link href={route.route}>
					<Tab
						value={ind}
						label={route.title}
						className={
							tab === ind ? (classes.tab, classes.tabActive) : classes.tab
						}
						component={Button}
						key={ind}
						style={{ margin: type === "drawer" ? "2rem 5rem" : undefined }}
					/>
				</Link>
			))}
		</Tabs>
	)
}

export default HeaderTabs
