import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	Button,
	useTheme,
	Grid,
} from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"

import routes from "../../constants/routes"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		paddingTop: "1rem",
		paddingLeft: "5rem",
		margin: 0,
		fontSize: "3.5rem",
	},
	tab: {
		...theme.mixins.tabs,
	},
	tabActive: {
		...theme.mixins.tabs,
		opacity: 1,
	},
}))

export default function Header() {
	const classes = useStyles()
	const { pathname } = useRouter()
	const theme = useTheme()

	const [tab, setTab] = useState(0)

	useEffect(() => {
		routes.forEach((route, ind) => {
			if (pathname === route.route) setTab(ind)
		})
	}, [pathname])

	return (
		<AppBar position="static">
			<Toolbar
				style={{
					maxWidth: theme.breakpoints.values.xl,
					margin: "auto",
					width: "90vw",
				}}
			>
				<Grid container justify="space-between" alignItems="center">
					<Grid>
						<Link href="/">
							<a>
								<Typography variant="h1" className={classes.title}>
									Slick Inc.
								</Typography>
							</a>
						</Link>
					</Grid>
					<Grid>
						<Tabs
							value={tab}
							aria-label="simple tabs example"
							indicatorColor="primary"
						>
							{routes.map((route, ind) => (
								<Link href={route.route}>
									<Tab
										value={ind}
										label={route.title}
										className={
											tab === ind
												? (classes.tab, classes.tabActive)
												: classes.tab
										}
										component={Button}
										key={ind}
									/>
								</Link>
							))}
						</Tabs>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
