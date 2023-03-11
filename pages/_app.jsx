import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const breakpoints = {
    xs: "23.4375em",
  };

  const theme = extendTheme({ breakpoints });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
