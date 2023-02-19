import {
  Box,
  chakra,
  HStack,
  ListItem,
  shouldForwardProp,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFileText, BsFolder2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { isValidMotionProp, motion } from "framer-motion";
const FileTree = () => {
  return (
    <Box minH={"300"} pr="6">
      <UnorderedList minW={"300"}>
        <ListItem listStyleType={"none"} p="1" px="3">
          <File name="work 01" />
        </ListItem>
        <ListItem listStyleType={"none"} p="1" px="3">
          <File name="work 01" />
        </ListItem>
        <ListItem listStyleType={"none"} p="1" px="3">
          <File name="work 01" />
        </ListItem>
        <ListItem listStyleType={"none"} p="1" px="3">
          <Folder name="work 01" />
        </ListItem>
        <ListItem listStyleType={"none"} p="1" px="3">
          <Folder name="work 01" />
        </ListItem>
        <ListItem listStyleType={"none"} p="1" px="3">
          <Folder name="work 01" />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

const File = ({ name }: any) => {
  return (
    <HStack pt="1">
      <BsFileText /> <Text>{name}</Text>
    </HStack>
  );
};

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const enterIntoFolder = () => {
    
}

const Folder = ({ name }: any) => {
  const [HasSubFolder, setHasSubFolder] = useState(true);
  const [IsFolderOpen, setIsFolderOpen] = useState(false);
  return (
    <Box onDoubleClick={e => enterIntoFolder()}>
      <Box>
        <HStack
          onClick={(e) => {
            setIsFolderOpen(!IsFolderOpen);
          }}
          justifyContent={"space-between"}
          _hover={{ cursor: "grab" }}
        >
          <HStack>
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
                <AiOutlineDown />
              </MotionBox>
            ) : null}
          </Box>
        </HStack>
      </Box>
      {IsFolderOpen ? (
        <MotionBox
          animate={{ x: 15 }}
          //   @ts-ignore no problem in operation, although type error appears.
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Box>
            <UnorderedList ml="9">
              <ListItem listStyleType={"none"}>
                <File name="file 01" />
              </ListItem>
              <ListItem listStyleType={"none"}>
                <File name="file 01" />
              </ListItem>
              <ListItem listStyleType={"none"}>
                <File name="file 01" />
              </ListItem>
            </UnorderedList>
          </Box>
        </MotionBox>
      ) : null}
    </Box>
  );
};

export default FileTree;
