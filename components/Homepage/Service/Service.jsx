import { Grid } from "@material-ui/core"
import React from "react"
import blocks from "../../../constants/services-block"
import ServiceBlock1 from "./ServiceBlock1"
import ServiceBlock2 from "./ServiceBlock2"

const Service = () => {
	return (
		<Grid
			container
			direction="column"
			spacing={6}
			style={{ padding: "1rem", width: "99vw" }}
		>
			<Grid container item>
				<ServiceBlock1 block={blocks.software} />
			</Grid>
			<Grid container item>
				<ServiceBlock2 block={blocks.ios} />
			</Grid>
			<Grid container item>
				<ServiceBlock1 block={blocks.web} />
			</Grid>
		</Grid>
	)
}

export default Service
