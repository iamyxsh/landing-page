import { createMuiTheme } from "@material-ui/core/styles"

const SUB = "#ebd9dd"
const LIGHT = "#d8aed3"
const MAIN = "#9182c4"
const DEEP = "#486989"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: MAIN,
		},
		secondary: {
			main: SUB,
		},
		common: {
			light: LIGHT,
			Deep: DEEP,
		},
	},
})

export default theme
