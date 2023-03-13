import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

import "../styles/globals.css";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { UserContextProvider } from "@/context/Usercontext";
import { ProjectContextProvider } from "@/context/ProjectWorkingContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Head>
        {/* <link rel="icon" href="./logo.svg" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      /> */}
      </Head>
      <ProjectContextProvider>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
    
            <Navbar />
            <Component {...pageProps} />
    
          </QueryClientProvider>
        </ChakraProvider>
      </ProjectContextProvider>
    </UserContextProvider>
  );
}
