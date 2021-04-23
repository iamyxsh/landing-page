import { createMuiTheme } from "@material-ui/core/styles"

const BLUE_LIGHT = "#8ecae6"
const BLUE = "#219ebc"
const BLUE_DEEP = "#023047"
const YELLOW = "#ffb703"
const ORANGE = "#fb8500"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: BLUE,
		},
		secondary: {
			main: YELLOW,
		},
		common: {
			light: BLUE_LIGHT,
			deep: BLUE_DEEP,
			sub: ORANGE,
			main: BLUE,
		},
	},
	typography: {
		fontFamily: `"Poppins", "Sacramento","Helvetica", "Arial", "sans-serif"`,
		fontSize: 16,
		h1: {
			fontFamily: "Sacramento",
		},
	},
	mixins: {
		tabs: {
			fontSize: "1rem",
			fontWeight: 700,
			fontFamily: "Poppins",
			textTransform: "none",
			padding: 0,
			margin: 0,
			minWidth: "7rem",
			"&:hover": {
				backgroundColor: BLUE,
			},
		},
	},
})

export default theme
