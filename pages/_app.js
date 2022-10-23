// pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/libre-franklin/900.css";
import "@fontsource/roboto";
const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Roboto', sans-serif`,
		//montserrat
		montserrat: `'Montserrat', sans-serif`,
		librefranklin: `'Libre Franklin', sans-serif`,
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
