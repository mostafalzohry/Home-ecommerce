import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import Home from "./index"


function MyApp() {

  const breakpoints = {
    xs: "23.4375em",
  };

  const Home = dynamic(() => import('./index.jsx'), {
    ssr: false,
})

  const theme = extendTheme({ breakpoints });
  return (
    
  
    <ChakraProvider theme={theme}>
      <Home/>
    </ChakraProvider>
 

  );
}

export default MyApp;
