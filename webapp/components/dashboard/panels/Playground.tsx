import { Box, Text } from "@chakra-ui/react";

import React, { useEffect, useState,useRef } from "react";

function Playground() {


  const [ShowPlayGorund, setShowPlayGorund] = useState(false)

  useEffect(() => {
    setShowPlayGorund(true)
  },[])

  return (
    <Box>
      <Text>Playgroung</Text>

     
      {
        ShowPlayGorund ? <Box mb="16" height={"700"} position="relative">
        <Fold  molecule-id="7aad"  bg-color-r="255" bg-color-g="255" bg-color-b="255" landscape="true" validation-annotation="false"/>
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
