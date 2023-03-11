import {
  Box,
  chakra,
  Divider,
  HStack,
  ListItem,
  shouldForwardProp,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFileText, BsFolder2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { isValidMotionProp, motion } from "framer-motion";
import { ProjectContext } from "@/context/ProjectWorkingContext";



import React from 'react'

function FileTree() {

  const [ShowTree, setShowTree] = useState(false)
    const [ProjectData, setProjectData]: any = useContext(ProjectContext);


  useEffect(() => {

    if (ProjectData.sessions != false ) {
        setShowTree(true)
    }

  },[ProjectData])

  return (
    <Box>
      {
        ShowTree ?<Box minH={"300"} pr="6"> <UnorderedList minW={"300"}><FolderLoop data={ProjectData.sessions}/></UnorderedList></Box> : <Text>False</Text>
      }
    </Box>
  )
}

export default FileTree

// const FileTree = () => {
//   const [ProjectData, setProjectData]: any = useContext(ProjectContext);
//   const [ShowFileTree, setShowFileTree] = useState(false);

//   useEffect(() => {
//     if (ProjectData?.sessions?.data?.docs.length >= 0) {
//       setShowFileTree(true);
//     }
//   });

//   return (
//     <Box minH={"300"} pr="6">
//       <Text fontWeight={"bold"}>All Sessions</Text>
//       <UnorderedList minW={"300"}>
//         {
//           ProjectData.sessions.status != 400 ? (
//             <>
//               <FolderLoop data={ProjectData.sessions}/>
//             </> 
//           ): <Text>No Sessions Found</Text>
//         }
//       </UnorderedList>
//     </Box>
//   );
// };

const FolderLoop = ({ data }:any) => {
  return (
    <> 
    {
      // JSON.stringify(data.docs[0].sessionName)/
    }
{

  data.docs.map((element:any) => {
    return <>
    <ListItem listStyleType={"none"} _hover={{color:"green.400"}} p="1" px="3">
    <Folder name={element.sessionName} />
    </ListItem>
        </>
  })
  
  // data.docs.map((e:any) => {
  //   JSON.stringify(e)
  // //   return (
  // //     <>
  // //     <ListItem listStyleType={"none"} p="1" px="3">
  // //   <Folder name={e.sessionName} />
  // // </ListItem>
  // //     </>
  // //   )
  // })

}
    </>
  );
};

// const File = ({ name }: any) => {
//   return (
//     <HStack pt="1">
//       <BsFileText /> <Text>{name}</Text>
//     </HStack>
//   );
// };

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const enterIntoFolder = () => {};

const Folder = ({ name }: any) => {
  const [HasSubFolder, setHasSubFolder] = useState(true);
  const [IsFolderOpen, setIsFolderOpen] = useState(false);
  return (
    <Box onDoubleClick={(e) => enterIntoFolder()}>
      <Box>
        <HStack
          onClick={(e) => {
            setIsFolderOpen(!IsFolderOpen);
          }}
          justifyContent={"space-between"}
          _hover={{ cursor: "grab" }}
        >
          <HStack justifyContent={"flex-start"} alignItems="flex-start">
            <BsFolder2 /> <Text>{name}</Text>
          </HStack>
          <Box>
            {HasSubFolder ? (
              <MotionBox
                //   @ts-ignore no problem in operation, although type error appears.
                animate={{
                  rotate: IsFolderOpen ? [0, 180] : [180, 360],
                }}
                //   @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 0.3,
                }}
              >
                {/* <AiOutlineDown /> */}
              </MotionBox>
            ) : null}
          </Box>
        </HStack>
        
      </Box>
      {/* {IsFolderOpen ? (
        <MotionBox
          animate={{ x: 15 }}
          //   @ts-ignore no problem in operation, although type error appears.
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Box>
            <UnorderedList ml="9">
              <ListItem listStyleType={"none"}>
                {/* <File name="file 01" /> */}
      {/* </ListItem> */}
      {/* <ListItem listStyleType={"none"}> */}
      {/* <File name="file 01" /> */}
      {/* </ListItem> */}
      {/* // <ListItem listStyleType={"none"}> */}
      {/* <File name="file 01" /> */}
      {/* </ListItem> */}
      {/* </UnorderedList> */}
      {/* </Box> */}
      {/* </MotionBox > */}
      {/* ) : null} */}
    </Box>
  );
};
