import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

import "../styles/globals.css"
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { UserContextProvider } from "@/context/Usercontext";
import { ProjectContextProvider } from "@/context/ProjectWorkingContext";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (<UserContextProvider>

    <ProjectContextProvider>
      
    
    
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
      <Head>
      <link rel="icon" href="./logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />


{/* MOl Star
{/* <!-- Required for IE11 --> */}
<script typeof="module" src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"></script>
{/* <!-- Web component polyfill (only loads what it needs) --> */}
<script typeof="module" src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js" charSet="utf-8"></script>
{/* <!-- Required to polyfill modern browsers as code is ES5 for IE... --> */}
<script typeof="module" src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charSet="utf-8"></script>

{/* <!-- CSS --> */}
<link  rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-3.1.0.css" />

{/* <!-- For Light Theme include this css file instead of above --> */}
{/* <!--<link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-light-3.1.0.css">--> */}

<script typeof="module" type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-3.1.0.js"></script> 

      </Head>
      <Navbar />
      <Component {...pageProps} />
      </ QueryClientProvider>
    </ChakraProvider>
  
  
    </ProjectContextProvider>
  </UserContextProvider>);
}
