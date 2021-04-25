import { Grid } from "@material-ui/core"
import React from "react"
import blocks from "../../../constants/services-block"
import ServiceBlock1 from "./ServiceBlock1"
import ServiceBlock2 from "./ServiceBlock2"

const Service = () => {
	return (
		<Grid container style={{ width: "99.5vw" }} direction="column" spacing={6}>
			<Grid container item xs={12}>
				<ServiceBlock1 block={blocks.software} />
			</Grid>
			<Grid container item xs={12}>
				<ServiceBlock2 block={blocks.ios} />
			</Grid>
			<Grid container item xs={12}>
				<ServiceBlock1 block={blocks.web} />
			</Grid>
		</Grid>
	)
}

export default Service
