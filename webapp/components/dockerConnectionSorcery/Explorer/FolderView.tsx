import { ProjectContext } from "@/context/ProjectWorkingContext";
import { Box, Card, CardHeader, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFileText, BsFolder2 } from "react-icons/bs";
const FolderView = () => {
  const handleClick = () => {
    console.log("Sidement");
  };
const [ShowTree, setShowTree] = useState(false)
  const [ProjectData, setProjectData]: any = useContext(ProjectContext);
    useEffect(() => {

    if (ProjectData.sessions) {
        setShowTree(true)
    }

  },[ProjectData])
  return (
    <Box onContextMenu={handleClick} display={"flex"} flexWrap="wrap" px="6">
      {ShowTree ? (
        <>
        
        <FolderCardLoop data={ProjectData.sessions} />
          </>
      ) : null}
    </Box>
  );
};

const FolderCardLoop = ({ data }: any) => {
  return (
    <>
    

      
      {
        data?.docs.map((e:any) => {
          return <FolderCard data={e}/>
        })
      }
    </>
  );
};

const FolderCard = ({ data }: any) => {
   //   @ts-ignore no problem in operation, although type error appears.
  const date =  Date(data.createdAt).toLocaleString() 

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
            <VStack
              justifyContent={"flex-start"}
              alignItems="flex-start"
              pl="6"
            >
              <Text fontSize={"lg"}>{data.sessionName}</Text>
              <HStack>
                {/* <Text>Created At :</Text> */}
                {/* <Text>{date} </Text> */}
              </HStack>
              <HStack>
                {/* <Text>status :</Text>
                <Text> running</Text> */}
              </HStack>
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
            <VStack
              justifyContent={"flex-start"}
              alignItems="flex-start"
              pl="6"
            >
              <Text fontSize={"lg"}>Work 03</Text>
              <HStack>
                <Text>Created At :</Text>
                <Text> 08/04/2001</Text>
              </HStack>
            </VStack>
          </HStack>
        </CardHeader>
      </Card>
    </>
  );
};

export default FolderView;
