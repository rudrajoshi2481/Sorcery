import { Box, Text } from "@chakra-ui/react";

import React from "react";

function Playground() {
  return (
    <Box>
      <Text>Playgroung</Text>

      {/* <pdbe-molstar molecule-id="1cbs"></pdbe-molstar> */}
      {/* <Molstar pdbId="1LOL" /> */}
      <Box height={"900"} position="relative">
      <Fold molecule-id="7aad" bg-color-r="255" bg-color-g="255" bg-color-b="255" validation-annotation="false"/>
      </Box>
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
