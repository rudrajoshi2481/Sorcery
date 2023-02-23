import { Box, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

function Playground() {

  const [ShowPlayGorund, setShowPlayGorund] = useState(false)

  useEffect(() => {
    setShowPlayGorund(true)
  },[])

  return (
    <Box>
      <Text>Playgroung</Text>

      {/* <pdbe-molstar molecule-id="1cbs"></pdbe-molstar> */}
      {/* <Molstar pdbId="1LOL" /> */}
      {
        ShowPlayGorund ? <Box mb="16" height={"600"} position="relative">
        <Fold molecule-id="7aad" bg-color-r="255" bg-color-g="255" bg-color-b="255" validation-annotation="false"/>
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
    [props.children]
  )


export default Playground;
