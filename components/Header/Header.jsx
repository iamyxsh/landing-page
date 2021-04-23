import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	AppBar,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"
import { Menu } from "@material-ui/icons"

import routes from "../../constants/routes"
import HeaderTabs from "./HeaderTabs"
import HeaderDrawer from "./HeaderDrawer"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		maxWidth: theme.breakpoints.values.xl,
		margin: "auto",
		width: "100vw",
	},
	title: {
		flexGrow: 1,
		paddingTop: "1rem",
		paddingLeft: "5rem",
		margin: 0,
		fontSize: "3.5rem",
		[theme.breakpoints.down("md")]: {
			paddingLeft: "1rem",
		},
	},
}))

export default function Header() {
	const classes = useStyles()
	const { pathname } = useRouter()
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down("sm"))

	const [tab, setTab] = useState(0)
	const [drawer, setDrawer] = useState(false)

	useEffect(() => {
		routes.forEach((route, ind) => {
			if (pathname === route.route) setTab(ind)
		})
	}, [pathname])

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Link href="/">
					<a>
						<Typography variant="h1" className={classes.title}>
							Slick Inc.
						</Typography>
					</a>
				</Link>
				<HeaderTabs matchesMD={matchesMD} tab={tab} />
				<Menu
					style={{ display: matchesMD ? "block" : "none", marginLeft: "auto" }}
					onClick={() => setDrawer(true)}
				/>
				<HeaderDrawer
					tab={tab}
					open={drawer}
					setOpen={(val) => setDrawer(val)}
				/>
			</Toolbar>
		</AppBar>
	)
}
