import { LoadingScreen } from "@/components/loading/Loading";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import React, { useEffect, useState,useRef,Suspense } from "react";

function Playground({showControls}:any) {


  const [ShowPlayGorund, setShowPlayGorund] = useState(false)

  useEffect(() => {
    setShowPlayGorund(true)
  },[])

  return (
    <Box>
      <Head>
         {/* MOl Star
{/* <!-- Required for IE11 --> */}
              <script
                typeof="module"
                src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"
              ></script>
              {/* <!-- Web component polyfill (only loads what it needs) --> */}
              <script
                typeof="module"
                src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js"
                charSet="utf-8"
              ></script>
              {/* <!-- Required to polyfill modern browsers as code is ES5 for IE... --> */}
              <script
                typeof="module"
                src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
                charSet="utf-8"
              ></script>

              {/* <!-- CSS --> */}
              <link
                rel="stylesheet"
                type="text/css"
                href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-3.1.0.css"
              />

              {/* <!-- For Light Theme include this css file instead of above --> */}
              {/* <!--<link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-light-3.1.0.css">--> */}

              <script
                typeof="module"
                type="text/javascript"
                src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-3.1.0.js"
              ></script>
        </Head>     
      {
        ShowPlayGorund ? <Box mb="16" height={"700"} position="relative">
        <Suspense fallback={<LoadingScreen />}><Fold  molecule-id="7aad"  bg-color-r="255" bg-color-g="255" bg-color-b="255" landscape="true" validation-annotation="false" hide-controls={showControls ? "true" : "false"}/></Suspense>
        </Box> : null
      }
    </Box>
  );
}

// const Fold =  ({ children, elementType: ElementType = 'pdbe-molstar' }: any): JSX.Element {
//     return (
//       <ElementType>{children}</ElementType>
    
//     );
//   }

const Fold = (props:any) => React.createElement(
    "pdbe-molstar",
    
    props,
    [props.children],
    
  )


export default Playground;
