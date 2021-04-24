import { Grid } from "@material-ui/core"
import React from "react"
import blocks from "../../../constants/services-block"
import ServiceBlock from "./ServiceBlock"

const Service = () => {
	return (
		<Grid container direction="column" spacing={4}>
			{blocks.map((block, ind) => (
				<Grid item xs={10}>
					<ServiceBlock key={ind} block={block} />
				</Grid>
			))}
		</Grid>
	)
}

export default Service
