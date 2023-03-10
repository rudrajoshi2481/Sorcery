import { Box, Card, CardHeader, HStack, Text, VStack } from "@chakra-ui/react";
import { BsFileText, BsFolder2 } from "react-icons/bs";
const FolderView = () => {
  const handleClick = () => {
    console.log("Sidement");
  };

  return (
    <Box onContextMenu={handleClick} display={"flex"} flexWrap="wrap" px="6">
      <FolderCard name={"based on olaparib"} />
      
    </Box>
  );
};

const FolderCard = ({name}:any) => {
  return (
    <>
      <Card
        _hover={{ cursor: "grab" }}
        m="3"
        minW={"250"}
        border="1px solid gray"
        bgColor={"green.100"}
      >
        <CardHeader>
          <HStack justifyContent={"flex-start"} alignItems="flex-start">
            <Text fontSize={"xl"}>
              <BsFolder2 />
            </Text>
          <VStack justifyContent={"flex-start"} alignItems="flex-start" pl="6">
            <Text fontSize={"lg"}>{name}</Text>
            <HStack><Text>Created At :</Text><Text> 08/04/2001</Text></HStack>
            <HStack><Text>status :</Text><Text> running</Text></HStack>
            
          </VStack>
          </HStack>
        </CardHeader>
      </Card>
    </>
  );
};

const FileCard = () => {
  return (
    <>
      <Card
        _hover={{ cursor: "grab" }}
        m="3"
        minW={"250"}
        border="1px solid green"
        
      >
        <CardHeader>
          <HStack justifyContent={"flex-start"} alignItems="flex-start">
            <Text fontSize={"xl"}>
              <BsFileText />
            </Text>
            <VStack justifyContent={"flex-start"} alignItems="flex-start" pl="6">
            <Text fontSize={"lg"}>Work 03</Text>
            <HStack><Text>Created At :</Text><Text> 08/04/2001</Text></HStack>
          </VStack>
          </HStack>
        </CardHeader>
      </Card>
    </>
  );
};

export default FolderView;
