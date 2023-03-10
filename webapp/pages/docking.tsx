import {
  getallprojectslist,
  helloWorld,
} from "@/components/config/backendLinks";
import LoginRequired from "@/components/ErrorStatus/LoginRequired";
import { LoadingScreen } from "@/components/loading/Loading";
import { getToken } from "@/components/logic/cookie";
import { UserContext } from "@/context/Usercontext";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
// fetch all projects

function Docking() {
  const [UserData, setUserData]: any = useContext(UserContext);
  const [ProjectList, setProjectList]: any = useState(null);
  // const {uuid,token} = getToken()
  const toast = useToast();
  
  const [IsUserLogedIn, setIsUserLogedIn] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);
  
  const FetchData = async () => {
      
      await axios
      .post(getallprojectslist, {
        token: await getToken().token,
        uuid: await getToken().uuid,
      })
      .then((res: any) => {
        // console.log(res);
        
        setProjectList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Cannot connect to server",
        });
      });
    };



  useEffect(() => {
    FetchData()
  },[])



  return (
    <>
      {IsUserLogedIn ? (
        <Box p="3">
          <Box mb="6" display={"flex"} maxW={"350"}>
            <Input placeholder="search for project" />
            <Button>🔍</Button>
          </Box>
          <Divider />

          <Box border={"1px solid grey"} p="6">
            <Box display={"flex"} justifyContent="space-between">
              <Heading className="title">Projects</Heading>

              <Link href="/docking/create-new-project">
                <Button colorScheme={"green"} variant={"outline"}>
                  Create New Project
                </Button>
              </Link>
            </Box>

              <Flex flexWrap={"wrap"}>
                {ProjectList?.status != 400 && ProjectList?.docs?.length < 0 ? (
                // {!IsLoading ? (
                  <>
                    {ProjectList?.docs?.map((e: any) => {
                      return (
                        <ProjectsCards
                          projectId={e._id}
                          description={e.description}
                          title={e.title}
                          createdAt={e.createdAt}
                        />
                      );
                    })}
                  </>
                ) : (
                  <Box my="6">
                    <Text color={"green.400"}>No Project found</Text>
                  </Box>
                )}
                {/* <ProjectsCards
                  projectId={"1234"}
                  description=" you will be suprised, this is the one of the best description text of my life"
                  title={"Triple Negative Breast cancer"}
                  createdAt={"08/04/2001"}
                /> */}
              </Flex>
            
          </Box>
        </Box>
      ) : (
        <LoginRequired />
      )}
    </>
  );
}

function ProjectsCards({ projectId, description, title, createdAt }: any) {
  // let date = dayjs(createdAt,"MM-DD-YYYY")
  let date = new Date(createdAt).toLocaleString();

  return (
    <Link href={`/docking/${projectId}`}>
      <Card
        maxW={"350"}
        minW="350"
        maxH="250"
        minH={"250"}
        p="3"
        m="6"
        border={"1px solid green"}
        _hover={{ cursor: "grab" }}
      >
        <Stack>
          <CardBody display={"flex"} flexDir="column">
            <Box>
              <HStack>
                <Heading>{title}</Heading>
              </HStack>
              <Text py="3" color="grey">
                {description}
              </Text>
            </Box>
            <Box py="3">
              <Divider />
              <Text>created At: </Text>
              <Text>{date}</Text>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
}

export default Docking;
