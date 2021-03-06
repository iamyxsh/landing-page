import { createMuiTheme } from "@material-ui/core/styles"

const BLUE_LIGHT = "#8ecae6"
const BLUE = "#219ebc"
const BLUE_DEEP = "#006ea6"
const YELLOW = "#ffb703"
const ORANGE = "#fb8500"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: BLUE,
		},
		secondary: {
			main: ORANGE,
		},
		common: {
			light: BLUE_LIGHT,
			deep: BLUE_DEEP,
			sub: ORANGE,
			main: BLUE,
			yellow: YELLOW,
		},
	},
	typography: {
		fontFamily: `"Poppins", "Playfair Display", "Parisienne", "Sacramento","Helvetica", "Arial", "sans-serif"`,
		fontSize: 16,
		h1: {
			fontFamily: "Sacramento",
		},
		h2: {
			fontFamily: "Poppins",
			color: BLUE_DEEP,
			fontWeight: 700,
		},
		h3: {
			fontFamily: "Playfair Display",
			color: BLUE_DEEP,
		},
		h4: {
			fontFamily: "Poppins",
			color: BLUE_DEEP,
			fontWeight: 700,
			margin: 0,
		},
		h5: {
			fontFamily: "Poppins",
			color: BLUE_DEEP,
			fontWeight: 500,
			margin: 0,
		},
		subtitle1: {
			color: "grey",
		},
		subtitle2: {
			color: BLUE_DEEP,
			opacity: 0.75,
		},
		body1: {
			color: "grey",
		},
		button: {
			fontFamily: "Parisienne",
			color: "white",
			fontWeight: 700,
			textTransform: "none",
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
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
		buttonPrim: {
			height: "3.5rem",
			width: "100%",
			color: "white",
			"&:hover": {
				backgroundColor: YELLOW,
			},
		},
		buttonSec: {
			fontSize: "1.5rem",
			height: "3.5rem",
			fontFamily: "Poppins",
			color: BLUE_DEEP,
			width: "100%",
			border: `2px solid ${BLUE_LIGHT}`,
			backgroundColor: "white",
		},
	},
})

export default theme
